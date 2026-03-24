import mongoose from "mongoose";
const MainSchema =new mongoose.Schema({
      random:{
         type:String,
         requried:true

      },
      MadeBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
      }
},{timestamps:true})
export const Main = mongoose.model("Main",MainSchema) 