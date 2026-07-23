"use client";

import GoogleLoginButton from "../../components/auth/GoogleLoginButton";

export default function LoginPage() {

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-100">
            <div className="w-96 rounded-lg bg-white p-8 shadow">
                <h1 className="mb-6 text-center text-3xl font-bold">
                    Shopify Store
                </h1>
                <GoogleLoginButton />
            </div>
        </main>
    );
}