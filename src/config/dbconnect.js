import mongoose from "mongoose";
export default async function dbconnect(){

    await mongoose.connect("mongodb+srv://sunilkumar47260:onamiWU1JUN9SZny@cluster0.giviwl5.mongodb.net/Ecommerce").then(
        console.log("mongodb connected succefully")
    )
}