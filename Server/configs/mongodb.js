import mongoose from 'mongoose';

//Connect to the mongodb databse

const connectDB = async () => {
    mongoose.connection.on('connected', ()=> console.log("Database connected"))

    await mongoose.connect(`${process.env.MONGODB_URI}/lms`)
}

export default connectDB