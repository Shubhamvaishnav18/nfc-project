import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://HeloTap:01092002@cluster0.9iwkt.mongodb.net/HeloTap")
    .then(()=>console.log("Connected to DB"));
};