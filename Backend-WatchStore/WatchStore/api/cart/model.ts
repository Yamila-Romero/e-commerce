import { Schema, model } from "mongoose";

const cartSchema = new Schema({
  products: [
    {
      user_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
      },
      product_id: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      }
    },
  ],
  total_price: {
    type: Number,
    required: true,
  },
},
{timestamps: true }
);

cartSchema.index({createdAt:1 }, {expireAfterSeconds: 10});
//60* 60* 24 
const Cart = model("Cart", cartSchema);
export default Cart;

 

/*export default Cart;
created_at: {
  type: Date,
  default: Date.now,
},
expires_at: {
  type: Date,
  default: new Date().setDate(new Date().getDate() + 2),
},*/