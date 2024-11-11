"use client";
import { useCart } from "../../context/cart-context";
import React, { useState } from 'react';
import Link from 'next/link';
import { Product } from "@/types/product";
import RegisterButton from "../buttons/register-button";
import LoginButton from "../buttons/login-button";
import SearchComponent from "../search-bar";
import { IconCart } from "@/assets/icons";

export default function Header () {
    const { cart, clearCart, removeFromCart, getTotalItems } = useCart();
    const [active, setActive] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onDeleteProduct = (product: Product) => {
        removeFromCart(product);
    };

    const onCleanCart = () => {
        clearCart();
    };

    return (
        <header className="flex justify-between items-center w-full bg-green-900 h-24 px-4 py-6  drop-shadow-md">
            <Link href="http://localhost:3000/">
            <img src="/logo.png" 
            className="w-16 h-16 rounded-full object-cover shadow-lg border-4  hover:scale-105 transition-all cursor-pointer" />
            </Link>

            <SearchComponent/>

            <div className="flex gap-8">
                <RegisterButton />
                <LoginButton />
            

            <div className="relative">
                <div className="relative" onClick={() => setActive(!active)}>
                    <div>
                        <IconCart className="w-10 h-10 text-white cursor-pointer" />
                    </div>
                    <div className="absolute top-1/2 right-0 bg-black text-white w-6 h-6 flex justify-center items-center rounded-full">
                        <span id="contador-productos" className="text-xs">{getTotalItems()}</span>
                    </div>
                </div>

                <div className={`absolute top-12 right-0 bg-white w-96 z-10 shadow-lg rounded-lg ${active ? '' : 'hidden'}`}>
                    {cart.length ? (
                        <>
                            <div className="divide-y divide-gray-200">
                                {cart.map((product, index) => (
                                    <div className="flex items-center justify-between p-6" key={index}>
                                        <div className="flex justify-between flex-1">
                                            <span className="font-normal text-lg">{product.quantity}</span>
                                            <p className="ml-4 font-medium text-lg">{product.title}</p>
                                            <span className="ml-4 font-bold text-lg">${product.price}</span>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-current hover:stroke-red-500 hover:cursor-pointer" onClick={() => onDeleteProduct(product)}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center items-center py-5 gap-5">
                                <h3 className="font-bold text-lg">Total:</h3>
                                <span className="font-extrabold text-lg">${cart.reduce((total, product) => (total + product.price * product.quantity), 0).toFixed(2)}</span>
                            </div>

                            <Link href="/cart" className=" flex items-center  justify-center w-full bg-black text-white py-2  font-medium hover:bg-gray-800 hover:scale-105 transition-all">
                                GO to Cart
                            </Link>

                            <button className="w-full bg-black text-white py-2 rounded-b-lg font-medium hover:bg-gray-800 hover:scale-105 transition-all" onClick={onCleanCart}>
                                 Clear Cart
                            </button>
                        </>
                    ) : (
                        <p className="p-5 text-center">The cart in empty</p>
                    )}
                    </div>
                </div>
            </div>
        </header>
    );
};



