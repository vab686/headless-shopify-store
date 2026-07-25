"use client";

import useAuth from "../../hooks/useAuth";
import Link from "next/link";

export default function UserMenu() {
    const { user, authenticated, logout } = useAuth();

    if (!authenticated) {
        return (
            <div className="flex items-center gap-4">
                <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                    Log in
                </Link>
                <Link href="/signup" className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 hover:shadow transition-all duration-200">
                    Sign up
                </Link>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">
                Hi, {user?.name}
            </span>
            <div className="h-4 w-px bg-gray-200"></div>
            <button
                onClick={logout}
                className="text-sm font-medium text-gray-500 hover:text-red-600 transition-colors duration-200"
            >
                Log out
            </button>
        </div>
    );
}