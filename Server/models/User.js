import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        _id: {type: String, required: true},
        name: {type: String, requireed: true},
        email: {type: String, requireed: true},
        imageUrl: {type: String, requireed: true},
        enrolledcourses : [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course'
            }
        ],
    }, {timestamps: true})

    const User = mongoose.model('User', userSchema);

    export default User

