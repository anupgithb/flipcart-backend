import mongoose from "mongoose";
const productSchema1 = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    url: String,
    detailUrl: String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagLine:String
});

const Product1 = mongoose.model('product1',productSchema1);

export default Product1;