"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { auth } from "../Components/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null);

  // Cart count
  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCart();
    window.addEventListener("storage", updateCart);

    return () => window.removeEventListener("storage", updateCart);
  }, []);

  // Firebase user listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Logout
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-xl font-semibold text-white">
          CMT Lifestyle
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">

          <Link href="/" className="relative group hover:text-white transition">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
          </Link>

          <Link href="/Shirt" className="relative group hover:text-white transition">
            Shirts
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
          </Link>

          <Link href="/Jackets" className="relative group hover:text-white transition">
            Jackets
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
          </Link>

          <Link href="/T-shirt" className="relative group hover:text-white transition">
            T-Shirts
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
          </Link>

          <Link href="/Polo" className="relative group hover:text-white transition">
            Polo
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
          </Link>

          <Link href="/Trousers" className="relative group hover:text-white transition">
            Trousers
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
          </Link>

          <Link href="/Shorts" className="relative group hover:text-white transition">
            Shorts
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
          </Link>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {user ? (
            <>
              {/* User Name */}
              <span className="text-sm text-gray-300">
                👋 {user.displayName || user.email}
              </span>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="bg-white text-black px-3 py-1 rounded-full text-sm hover:opacity-80"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/Login"
                className="text-sm text-gray-400 hover:text-white"
              >
                Login
              </Link>

              <Link
                href="/Signup"
                className="border border-white px-3 py-1 rounded-full text-sm hover:bg-white hover:text-black"
              >
                Sign Up
              </Link>
            </>
          )}

          {/* Cart */}
          <Link href="/Cart" className="relative text-white text-2xl">
            <FiShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Header;