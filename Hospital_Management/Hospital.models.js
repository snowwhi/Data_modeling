import mongoose from "mongoose";
const HospitalSchema= new mongoose.Schema({
     name:{
        type:String,
        requried:true
    },
    addressline1:{
        type:String,
        requried:true
    },
     addressline2:{
        type:String,
        
    },
     city:{
        type:String,
        requried:true
    },
    pincode:{
        type:String,
        requried:true
    },
    
},{})
export const Hospital =mongoose.model('Hospital',HospitalSchema)