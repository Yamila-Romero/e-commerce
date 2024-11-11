"use client";
import React from "react";
import { useCart } from "../../context/cart-context";
import Link from "next/link";

export default function Cart() {
  const { cart } = useCart();

  
  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      return total + product.price * product.quantity; 
    }, 0);
  };

  const total = calculateTotal(); 

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tu Carrito</h1>
      {cart.length === 0 ? (
        <p className="text-lg">Tu carrito está vacío.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((product, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-white shadow rounded-lg"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="ml-4 flex-1">
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p className="text-gray-600">Cantidad: {product.quantity}</p>
                <p className="text-gray-600">Precio: ${product.price}</p>
              </div>
            </div>
          ))}
          {/* Mostrar el total calculado */}
          <div className="flex justify-between items-center mt-4 bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-bold">Total:</h3>
            <p className="text-lg font-semibold">${total.toFixed(2)}</p>
          </div>
          <div className="flex justify-end mt-4">
            <Link
              href="/checkout"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Ir a Pagar
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}



