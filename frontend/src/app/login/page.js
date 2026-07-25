"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";
import useAuth from "@/hooks/useAuth";
import { addToCart } from "@/services/cart.service";
import toast from "react-hot-toast";

export default function LoginPage() {

    const router = useRouter();

    const {
        login
    } = useAuth();

    const [loading, setLoading] =
        useState(false);

    const handleLogin = async (data) => {

        try {

            setLoading(true);

            await login(data);

            // Check for a pending cart item saved before login redirect
            const pendingItem = localStorage.getItem("pendingCartItem");

            if (pendingItem) {
                try {
                    const product = JSON.parse(pendingItem);
                    await addToCart(product);
                    localStorage.removeItem("pendingCartItem");
                    toast.success(`${product.title} added to cart!`, {
                        duration: 3000,
                        icon: "🛒",
                        style: {
                            borderRadius: "12px",
                            background: "#fff",
                            color: "#0f172a",
                            boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                            fontWeight: 500
                        }
                    });
                    router.push("/cart");
                } catch {
                    localStorage.removeItem("pendingCartItem");
                    router.push("/products");
                }
            } else {
                router.push("/products");
            }

        } catch (error) {

            alert(
                error.response?.data?.message ||
                error.message ||
                "Login failed."
            );

        } finally {

            setLoading(false);

        }

    };

    return (
        <AuthLayout
            title="Welcome Back"
            footer={
                <p>
                    Don't have an account?{" "}
                    <Link
                        href="/signup"
                        className="font-semibold"
                    >
                        Sign Up
                    </Link>
                </p>
            }
        >
            <LoginForm
                loading={loading}
                onSubmit={handleLogin}
            />
        </AuthLayout>
    );

}