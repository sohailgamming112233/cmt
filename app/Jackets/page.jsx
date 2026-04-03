"use client";

import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const jackets = [
  { name: "Winter Jacket", price: "$25", img: "https://images.unsplash.com/photo-1548883354-94bcfe321cbb" },
  { name: "Leather Jacket", price: "$40", img: "https://images.unsplash.com/photo-1520975916090-3105956dac38" },
  { name: "Puffer Jacket", price: "$30", img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf" },
  { name: "Denim Jacket", price: "$28", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f" },
  { name: "Bomber Jacket", price: "$35", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5" },
  { name: "Custom Jacket", price: "$20", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d" },
];

const Page = () => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Added to Cart 🛒");
  };

  return (
    <div className="px-6 py-20">
      <ToastContainer />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Jacket Manufacturing</h1>
        <p className="text-gray-400 mt-3">High-quality custom jackets for global brands</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {jackets.map((item, i) => (
          <div key={i} className="bg-gray-900 rounded-xl overflow-hidden group hover:shadow-xl transition">
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold">{item.name}</h3>
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

      <div className="fixed bottom-6 right-6 bg-white text-black px-4 py-2 rounded-full shadow-lg">
        Cart: {cart.length}
      </div>
    </div>
  );
};

export default Page;