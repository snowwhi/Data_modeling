import mongoose from "mongoose";
const TodoSchema=new mongoose.model({
    title:{
        type:String,
        requried:true,
    },
    createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    }
)
export const Todo = mongoose.model('Todo',TodoSchema)