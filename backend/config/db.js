import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://hossain24135505_db_user:XzIgattlA4BBgKXW@cluster0.tp9jlw4.mongodb.net/food-delivery-system').then(()=>console.log("DB Connected"));
}
