"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <div className="flex w-full h-14 bg-green-900 items-center justify-center  ">

            <i
                className=" bx bx-menu xl:hidden block text-2xl text-white cursor-pointer absolute left-10 "
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
            ></i> 

            <nav className="hidden xl:flex items-center gap-12 text-base font-semibold">
                <Link
                    href="/"
                    className="text-white p-3 rounded-md transition-all hover:text-gray-300 hover:underline"
                >
                    Home
                </Link>
                <Link
                    href="/products"
                    className="text-white p-3 rounded-md transition-all hover:text-gray-300 hover:underline"
                >
                    Products
                </Link>
                <Link
                    href="/contact"
                    className="text-white p-3 rounded-md transition-all hover:text-gray-300 hover:underline"
                >
                    Contact
                </Link>
            </nav>

            
            <div
                className={`absolute xl:hidden top-16 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-all ${
                    isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                style={{
                    transition: "transform 0.3s ease, opacity 0.3s ease",
                    transform: isMenuOpen ? "translateY(0)" : "translateY(-20px)"
                }}
            >
                <Link
                    href="/"
                    className="list-none w-full text-center p-4 hover:text-white transition-all hover:bg-sky-400 cursor-pointer"
                >
                    Home
                </Link>
                <Link
                    href="/products"
                    className="list-none w-full text-center p-4 hover:text-white hover:bg-sky-400 transition-all cursor-pointer"
                >
                    Products
                </Link>
                <Link
                    href="/contact"
                    className="list-none w-full text-center p-4 hover:text-white hover:bg-sky-400 transition-all cursor-pointer"
                >
                    Contact
                </Link>
            </div>
        </div>
    );
} 




