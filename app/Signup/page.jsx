"use client";

import { useState } from "react";
import { auth } from "../Components/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                form.email,
                form.password
            );

            await updateProfile(userCredential.user, {
                displayName: form.name,
            });

            toast.success("Signup Successful 🚀");
            setForm({ name: "", email: "", password: "" });

        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4">

            <ToastContainer position="top-right" autoClose={3000} />

            <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">

                <h2 className="text-3xl font-bold text-center mb-2 tracking-wide">
                    Create Account
                </h2>

                <p className="text-center text-gray-400 mb-6 text-sm">
                    Join CMT Lifestyle 🚀
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                        className="p-3 rounded-xl bg-black/40 border border-white/10 focus:border-white focus:ring-1 focus:ring-white outline-none transition"
                        required
                    />

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

                    <link href="/Login">
                        <button
                            type="submit"
                            className="bg-white text-black py-3 rounded-xl font-semibold tracking-wide hover:scale-105 hover:opacity-90 transition duration-200 shadow-lg"
                        >
                            Sign Up
                        </button>
                    </link>


                </form>

                <p className="text-sm text-center mt-6 text-gray-400">
                    Already have an account?{" "}
                    <a href="/Login" className="text-white font-medium hover:underline">
                        Login
                    </a>
                </p>

            </div>

        </div>
    );
};

export default Signup;