import mongoose from "mongoose";
const MedicalRecordSchema= new mongoose.Schema({
     name:{
        type:String,
        requried:true
    },
    DignosedBy:{
        type:mongoose.Schema.Type.ObjectId,
        ref:"Doctor"
    },
},{})
export const MedicalRecord =mongoose.model('MedicalRecord',MedicalRecordSchema)