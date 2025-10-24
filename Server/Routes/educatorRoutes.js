// Server/Routes/educatorRoutes.js
import express from "express";
import upload from "../configs/multer.js";
import { requireAuth } from "@clerk/express";
import { addcourse, updateRoleToEducator } from "../controllers/educatorcontroller.js";
import { protectEducator } from "../middlewares/Authmiddleware.js";

const educatorRouter = express.Router();

educatorRouter.post(
  "/update-role",
  requireAuth(),
  updateRoleToEducator
);

educatorRouter.post(
  "/add-course",
  requireAuth(),            // ✅ ensures req.auth() is available
  upload.single("image"),
  protectEducator,          // ✅ ensures only educators can access
  addcourse
);

export default educatorRouter;
