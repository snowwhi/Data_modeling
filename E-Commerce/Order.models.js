import mongoose from "mongoose";
// mini schema
const ProductIdSchema=new mongoose.Schema({
    ProductId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    Quantity:{
        type:Number,
        default:0
    }
})

const OrderSchema=new mongoose.Schema({
    orderprice:{
        type:Number,
        requried:true
    },
    Customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    OrderItems:{
       type:[ProductIdSchema]
    },Address:{
        type:String,
        requried:true
    },
    // For specific data type use predefined options
    status:{
        type:String,
        enum:["Pending","Delivered","Cancelled"],
        default:"Pending"
    }
})
export const Order=mongoose.model("Order",OrderSchema)