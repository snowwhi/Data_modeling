import mongoose from "mongoose";
const HospitalSchema= new mongoose.Schema({},{})
export const Hospital =mongoose.model('Hospital',HospitalSchema)