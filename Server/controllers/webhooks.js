// controllers/webhooks.js
import { Webhook } from "svix";
import User from "../models/User.js";

export const clerkWebhooks = async (req, res) => {
  try {
    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    const event = wh.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = event;

    switch (type) {
      case "user.created": {
        const clerkId = data.id;
        const email = data.email_addresses?.[0]?.email_address || "unknown";
        const name = `${data.first_name || ""} ${data.last_name || ""}`.trim();
        const imageUrl = data.image_url || "";

        const existingUser = await User.findOne({ clerkId });

        if (!existingUser) {
          await User.create({
            clerkId,
            email,
            name,
            imageUrl,
            role: "student",
          });
          console.log(`✅ User created in MongoDB: ${clerkId}`);
        }
        break;
      }

      case "user.updated": {
        const clerkId = data.id;
        await User.findOneAndUpdate(
          { clerkId },
          {
            email: data.email_addresses?.[0]?.email_address || "unknown",
            name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
            imageUrl: data.image_url || "",
          },
          { new: true }
        );
        console.log(`🔄 User updated: ${clerkId}`);
        break;
      }

      case "user.deleted": {
        const clerkId = data.id;
        await User.findOneAndDelete({ clerkId });
        console.log(`🗑️ User deleted: ${clerkId}`);
        break;
      }

      default:
        console.log(`ℹ️ Unhandled Clerk event: ${type}`);
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Clerk Webhook Error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};
