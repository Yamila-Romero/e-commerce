"use client";
import { useEffect, useState } from "react";
import {Product} from "../../types/product";
import ProductCard from "../../components/product-card"


export default function ProductsPage () {
    const [products, setProducts] = useState <Product[]> ([]);
    const [loading, setLoading] = useState <boolean> (true);
    const [error, setError] = useState <string | null> (null);


    useEffect (()=>{
        const fetchProducts = async () => {
            try {
                const response = await fetch ("https://fakestoreapi.com/products");
                if (!response.ok) throw new Error ("Error fetching products");

                const data = await response.json();
                const formattedData = data.map((item: any)=>({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    category: item.category, 
                    description: item.description,
                    image: item.image,
                    quantity:1,
                }));

                setProducts (formattedData);
            } catch (error){
                console.error ("Error fetching products:", error);
                setError ("Error fetching products");
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>

    );

};