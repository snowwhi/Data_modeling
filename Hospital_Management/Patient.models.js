import mongoose from "mongoose";
const PatientSchema= new mongoose.Schema({},{})
export const Patient =mongoose.model('Patient',PatientSchema)