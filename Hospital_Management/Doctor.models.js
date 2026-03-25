import mongoose from "mongoose";
const DoctorSchema= new mongoose.Schema({},{})
export const Doctor =mongoose.model('Doctor',DoctorSchema)