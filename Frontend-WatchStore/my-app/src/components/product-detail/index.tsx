import React from "react";
import { Product as ProductType } from "../../types/product";
import AddToCart from "../buttons/add-cart-button";

interface ProductDetailProps {
  product: ProductType;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { title, image, price, description } = product;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row">
        <img
          src={image}
          alt={title}
          className="w-full md:w-1/2 h-auto object-cover rounded-lg mb-4 md:mb-0"
        />
        <div className="md:ml-6">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-gray-600 mb-4">{description}</p>
          {/* <p className="text-gray-800 font-semibold mb-4">Category: {category}</p> */}
          <p className="text-2xl font-bold text-gray-900 mb-4">${price}</p>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
