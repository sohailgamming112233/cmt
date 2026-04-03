"use client";

import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Shirt Data
const shirts = [
    {
        name: "Formal Shirt",
        price: "$25",
        img: "https://images.unsplash.com/photo-1618354697202-91e2f02c67b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Casual Shirt",
        price: "$20",
        img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Denim Shirt",
        price: "$30",
        img: "https://images.unsplash.com/photo-1618355182019-d1f3b2d9a6d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Plaid Shirt",
        price: "$28",
        img: "https://images.unsplash.com/photo-1585386959984-a415522e18f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Short Sleeve Shirt",
        price: "$22",
        img: "https://images.unsplash.com/photo-1576754091060-6c3f7e2c8106?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        name: "Linen Shirt",
        price: "$26",
        img: "https://images.unsplash.com/photo-1618355182020-1f66e75cd03d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
];
interface ShirtItem {
    name: string;
    price: string;
    img: string;
    quantity?: number;
}

const ShirtPage: React.FC = () => {
    const [cart, setCart] = useState<ShirtItem[]>([]);

    // Load cart from localStorage
    useEffect(() => {
        const data: ShirtItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(data);
    }, []);

    const addToCart = (item: ShirtItem) => {
        const updatedCart = [...cart, { ...item, quantity: 1 }];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        toast.success(`${item.name} added to cart!`);
    };

    return (
        <div className="px-6 py-20 bg-gray-900 min-h-screen">
            <ToastContainer />
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white">Shirts Collection</h1>
                <p className="text-gray-400 mt-2">
                    Explore our modern shirts for every occasion
                </p>
            </div>

            {/* Shirts Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {shirts.map((item, i) => (
                    <div
                        key={i}
                        className="bg-gray-800 rounded-xl overflow-hidden group hover:shadow-xl transition duration-300"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
                            />
                        </div>

                        <div className="p-4">
                            <h3 className="text-white font-semibold">{item.name}</h3>
                            <p className="text-green-400 mt-1">{item.price}</p>

                            <div className="flex justify-between items-center mt-4">
                                <button
                                    onClick={() => addToCart(item)}
                                    className="bg-white text-black px-4 py-2 rounded-lg text-sm hover:opacity-80"
                                >
                                    Add to Cart
                                </button>

                                <a
                                    href="https://wa.me/923143370276"
                                    target="_blank"
                                    className="text-sm text-green-400"
                                >
                                    Inquiry
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Cart Count */}
            <div className="fixed bottom-6 right-6 bg-white text-black px-4 py-2 rounded-full shadow-lg">
                Cart: {cart.length}
            </div>
        </div>
    );
};

export default ShirtPage;