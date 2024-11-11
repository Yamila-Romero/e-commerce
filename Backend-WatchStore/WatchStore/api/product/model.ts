import { Schema, model } from "mongoose";

const productSchema = new Schema({
  brand:{
    type: String,
    required: true,
  },
  model:{
    type: String,
    required: true,
  },
  strap_material:{
    type: String,
    required: true,
  },
  movement:{
    type: String,
    required: true,
  },
  color:{
    type: String,
    required: true,
  },
  water_resistance:{
    type: String,
    required: true,
  },
  gender:{
    type: String,
    required: true,
  },
  origin:{
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  /*salers_id:{
   type: Schema.Types.ObjectId,
   ref:"User",
   required: true
  },*/
  /*category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },*/
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
});


const Product = model("Product", productSchema);

export default Product;