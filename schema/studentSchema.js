import mongoose from "mongoose";

const studentSchema=mongoose.Schema({
    name:String,
    age:Number,
    branch:String,
    email:String
})

export default studentSchema