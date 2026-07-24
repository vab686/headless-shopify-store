"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthLayout from "@/components/auth/AuthLayout";
import SignupForm from "@/components/auth/SignupForm";
import useAuth from "@/hooks/useAuth";

export default function SignupPage() {
    const { signup } = useAuth();
    const router = useRouter();

    const [loading, setLoading] =
        useState(false);

    const handleSignup = async (data) => {
        try {
            setLoading(true);
            await signup(data);
            router.push("/products");
        } catch (error) {
            alert(
                error.response?.data?.message ||
                error.message ||
                "Signup failed."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout
            title="Create Account"
            footer={
                <p>
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="font-semibold"
                    >
                        Login
                    </Link>
                </p>
            }
        >
            <SignupForm
                loading={loading}
                onSubmit={handleSignup}
            />
        </AuthLayout>
    );
}