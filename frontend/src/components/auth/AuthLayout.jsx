"use client";

import Link from "next/link";
import { X } from "lucide-react";

export default function AuthLayout({
    title,
    children,
    footer
}) {
    return (
        <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-y-0 -left-1/2 w-full bg-gradient-to-tr from-indigo-100 to-indigo-50 opacity-40 blur-3xl" />
            <div className="absolute inset-y-0 -right-1/2 w-full bg-gradient-to-bl from-blue-100 to-indigo-50 opacity-40 blur-3xl" />
            
            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <Link href="/" className="flex justify-center text-4xl font-extrabold text-indigo-600 mb-2 hover:text-indigo-500 transition-colors">
                    S
                </Link>
                <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-gray-900">
                    {title}
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <div className="relative bg-white py-8 px-4 shadow-xl shadow-indigo-100/50 sm:rounded-2xl sm:px-10 border border-gray-100">
                    <Link
                        href="/products"
                        className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-all"
                        aria-label="Close and go to products"
                    >
                        <X className="h-5 w-5" />
                    </Link>

                    {children}

                    {footer && (
                        <div className="mt-6 text-center text-sm text-gray-600">
                            {footer}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}