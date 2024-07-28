import mongoose from "mongoose";

export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://siddharth:dbProject1@cluster0.gk5wanc.mongodb.net/food-dev').then(()=>console.log("DB connected"));
}