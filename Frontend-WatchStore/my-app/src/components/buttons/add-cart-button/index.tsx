"use client";
import { useCart } from "../../../context/cart-context";
import { Product } from "../../../types/product";

type AddToCartProps = {
  product: Product;
};

export default function AddToCart({ product }: AddToCartProps) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-blue-500 text-white px-4 py-2 mt-4 rounded cursor-pointer "
    >
      Agregar al Carrito
    </button>
  );
}



// import React from "react";
// import {Product as ProductType} from "../../../types/product";

// interface AddToCartButtonProps {
//     product:ProductType;
// }

// const AddToCartButton: React.FC<AddToCartButtonProps> = ({product }) => {
//     const handleAddToCart = () => {
//         console.log (`Product ${product.title} agregar al caarito`);
//     };

//     return (
//         <button onClick={handleAddToCart} className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-700">
//             Add to Cart
//         </button>
//     );
// };

// export default AddToCartButton;