import { clerkClient } from '@clerk/express';
import course from '../models/course.js';
import { v2 as cloudinary } from 'cloudinary';

// Update role to educator
export const updateRoleToEducator = async (req, res) => {
  try {
    const userId = req.auth.userId; // Clerk adds this when requireAuth() runs

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: 'educator',
      },
    });

    res.json({
      success: true,
      message: 'You can now publish courses as an educator!',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Add new course
export const addcourse = async (req, res) => {
    try {
        const {courseData} = req.body
        const imageFile = req.file
        const educatorId = req.auth.userId

        if(!imageFile){
            return res.json({success: false, message: 'Thumbnail Not Attached'})
        }

        const parsedCourseData = await JSON.parse(courseData)
        parsedCourseData.educator = educatorId
        const newcourse = await course.create(parsedCourseData)
        const imageUpload = await cloudinary.uploader.upload(imageFile.path)
        newcourse.courseThumbnail = imageUpload.secure_url
        await newcourse.save()

        res.json({success: true, message: 'Course Added'})

    } catch (error) {
        res.json({success: false, message: error.message})
    }
}
