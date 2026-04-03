"use client";

import { useState } from "react";
import { auth } from "../Components/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(
                auth,
                form.email,
                form.password
            );

            toast.success("Login Successful 🚀");

        } catch (error) {
            toast.error("Invalid Email or Password ❌");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4">

            <ToastContainer position="top-right" autoClose={3000} />

            <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">

                <h2 className="text-3xl font-bold text-center mb-2 tracking-wide">
                    Welcome Back 👋
                </h2>

                <p className="text-center text-gray-400 mb-6 text-sm">
                    Login to your account
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        className="p-3 rounded-xl bg-black/40 border border-white/10 focus:border-white focus:ring-1 focus:ring-white outline-none transition"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        className="p-3 rounded-xl bg-black/40 border border-white/10 focus:border-white focus:ring-1 focus:ring-white outline-none transition"
                        required
                    />

                    <button
                        type="submit"
                        className="bg-white text-black py-3 rounded-xl font-semibold tracking-wide hover:scale-105 hover:opacity-90 transition duration-200 shadow-lg"
                    >
                        Login
                    </button>

                </form>

                <p className="text-sm text-center mt-6 text-gray-400">
                    Don’t have an account?{" "}
                    <a href="/Signup" className="text-white font-medium hover:underline">
                        Sign Up
                    </a>
                </p>

            </div>

        </div>
    );
};

export default Login;