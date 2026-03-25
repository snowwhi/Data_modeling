import mongoose from "mongoose";
const DoctorSchema= new mongoose.Schema({
    name:{
        type:String,
        requried:true
    },
    age:{
        type:Number,
        requried:true
    },
    Salary:{
        type:Number,
        requried:true
    },
    Gender:{
        type:String,
        enum:['F','M','O'],
        requried:true
    },
    ExpreiencedInYears:{
        type:Number,
        requried:true
    },
     WorkedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital'
     }

},{timestamps:true})
export const Doctor =mongoose.model('Doctor',DoctorSchema)