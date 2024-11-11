'use client';
import React from "react";
import {Product as ProductType} from "../../../../types/product";
import ProductDetail from "../../../../components/product-detail"



interface ProductProps {
    product: ProductType;
}

const Product: React.FC <ProductProps>= ({ product })=>{
    return (
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
            <ProductDetail product={product} />
           
        </div>

    );
};

export default Product;