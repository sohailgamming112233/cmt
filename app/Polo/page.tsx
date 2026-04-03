"use client";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const polos = [
  {
    name: "Classic Polo",
    price: "$18",
    img: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
  },
  {
    name: "Slim Fit Polo",
    price: "$20",
    img: "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg",
  },
  {
    name: "Cotton Polo",
    price: "$22",
    img: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg",
  },
  {
    name: "Premium Polo",
    price: "$25",
    img: "https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg",
  },
];

const Page = () => {
  const [cart, setCart] = useState<any[]>([]);

  // Load cart
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(stored);
  }, []);

  const addToCart = (item: any) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // 🔥 trigger storage event for header update
    window.dispatchEvent(new Event("storage"));

    // ✅ Toast
    toast.success("Item added to cart 🛒");
  };

  return (
    <div className="px-6 py-20 bg-gradient-to-b from-gray-900 to-black min-h-screen">

      {/* Toast */}
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">
          Polo Shirts Collection
        </h1>
        <p className="text-gray-400 mt-2">
          Stylish polos for casual & smart look
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {polos.map((item, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-2xl overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-white font-semibold text-lg">
                {item.name}
              </h3>
              <p className="text-green-400 mt-1 font-medium">
                {item.price}
              </p>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => addToCart(item)}
                  className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
                >
                  Add to Cart
                </button>

                <a
                  href="https://wa.me/923143370276"
                  target="_blank"
                  className="text-sm text-green-400 hover:underline"
                >
                  Inquiry
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Badge */}
      <div className="fixed bottom-6 right-6 bg-white text-black px-5 py-2 rounded-full shadow-xl font-semibold">
        🛒 {cart.length}
      </div>
    </div>
  );
};

export default Page;