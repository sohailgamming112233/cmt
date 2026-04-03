"use client";

import { useEffect, useState } from "react";

// Type definition for a cart item
interface CartItem {
  name: string;
  price: string;
  img: string;
  quantity?: number;
}

interface Order {
  name: string;
  phone: string;
  location: string;
  payment: string;
}

const Cart: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Form state
  const [order, setOrder] = useState<Order>({
    name: "",
    phone: "",
    location: "",
    payment: "EasyPaisa",
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const data: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const cartWithQty = data.map(item => ({ ...item, quantity: item.quantity || 1 }));
    setCart(cartWithQty);
  }, []);

  const updateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (index: number) => {
    const updated = cart.filter((_, i) => i !== index);
    updateCart(updated);
  };

  const increaseQty = (index: number) => {
    const updated = cart.map((item, i) =>
      i === index ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    updateCart(updated);
  };

  const decreaseQty = (index: number) => {
    const updated = cart.map((item, i) => {
      if (i === index) {
        const newQty = (item.quantity || 1) - 1;
        return { ...item, quantity: newQty > 0 ? newQty : 1 };
      }
      return item;
    });
    updateCart(updated);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }
    console.log("Order Submitted:", { order, cart });
    alert("Order placed successfully!");
    setCart([]);
    localStorage.removeItem("cart");
    setOrder({ name: "", phone: "", location: "", payment: "EasyPaisa" });
  };

  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.price.replace("$", "")) * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-16">

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        🛒 Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">
          Your cart is empty 😔
        </p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {cart.map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center justify-between bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              {/* Left */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <img
                  src={item.img}
                  className="w-20 h-20 object-cover rounded-xl border border-white/10"
                  alt={item.name}
                />

                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-green-400 text-sm mt-1">
                    {item.price} × {item.quantity} = $
                    {(parseFloat(item.price.replace("$", "")) * (item.quantity || 1)).toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="flex items-center gap-3 mt-4 md:mt-0">
                <button
                  onClick={() => decreaseQty(i)}
                  className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-lg"
                >
                  −
                </button>

                <span className="px-3">{item.quantity}</span>

                <button
                  onClick={() => increaseQty(i)}
                  className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-lg"
                >
                  +
                </button>

                <button
                  onClick={() => removeItem(i)}
                  className="ml-2 text-red-400 hover:text-red-300 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="text-right text-2xl font-bold mt-6">
            Total: <span className="text-green-400">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      )}

      {/* Order Form */}
      {cart.length > 0 && (
        <form
          onSubmit={handleOrderSubmit}
          className="max-w-4xl mx-auto mt-12 bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg space-y-5"
        >
          <h2 className="text-2xl font-semibold mb-4">
            📦 Place Your Order
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={order.name}
            onChange={handleInputChange}
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={order.phone}
            onChange={handleInputChange}
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
          />

          <input
            type="text"
            name="location"
            placeholder="Delivery Location"
            value={order.location}
            onChange={handleInputChange}
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
          />

          <select
            name="payment"
            value={order.payment}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
          >
            <option value="EasyPaisa">EasyPaisa</option>
            <option value="Cash">Cash on Delivery</option>
            <option value="JazzCash">JazzCash</option>
            <option value="Bank">Bank Transfer</option>
            <option value="Other">Other</option>
          </select>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-3 rounded-lg transition"
          >
            🚀 Place Order
          </button>
        </form>
      )}
    </div>
  );
};

export default Cart;