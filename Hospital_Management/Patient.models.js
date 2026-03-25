import mongoose from "mongoose";
const PatientSchema= new mongoose.Schema({
    name:{
        type:String,
        requried:true
    },
    CNIC:{
        type:String,
        requried:true
    },
    age:{
        type:Number,
        requried:true
    },
    Gender:{
        type:String,
        enum:['F','M','O'],
        requried:true
    },
    BloodType:{
        type:String,
        enum:['A+','A-','AB+','AB-','B+','B-','O+','O-'],
        requried:true
    },
    Admittedin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital',
        requried:true
    },
    DignosedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor',
        requried:true
    }

},{timestamps:true})
export const Patient =mongoose.model('Patient',PatientSchema)