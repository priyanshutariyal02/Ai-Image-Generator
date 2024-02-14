import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);  // This is going to be useful with search functionality
    mongoose.connect(url)
        .then(() => {
            console.log('MongooseDB connected');
        })
        .catch((err) => {
            console.error(err); // Changed console.log to console.error for error messages
        });
}

export default connectDB;
