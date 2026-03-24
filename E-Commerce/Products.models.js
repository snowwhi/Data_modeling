import mongoose, { mongo } from "mongoose";
const ProductSchema=new mongoose.Schema({
    Description:{
        type:String,
        requried:true,
    },name:
    {
        type:String,
        requried:true
    },
        productImage:
        {
        type:String,
        requried:true,
        },
        price:{
        type:Number,
        default:0
        },
        stock:{
        type:Number,
        default:0
        },
        Category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Category'
        },
         MadeBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }

})
export const Product=mongoose.model("Product",ProductSchema)