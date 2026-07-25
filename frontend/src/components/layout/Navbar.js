"use client";

import Link from "next/link";
import UserMenu from "./UserMenu";
import useAuth from "../../hooks/useAuth";

export default function Navbar() {
    const { authenticated } = useAuth();

    const navLinkClass = "text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors duration-200";

    return (
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                <div className="flex flex-1 items-center justify-start">
                    <Link href="/products" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold text-xl leading-none">
                            S
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900">
                            Shopify
                        </span>
                    </Link>
                </div>

                <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
                    <Link href="/products" className={navLinkClass}>Products</Link>
                    {authenticated && (
                        <>
                            <Link href="/cart" className={navLinkClass}>Cart</Link>
                            <Link href="/wishlist" className={navLinkClass}>Wishlist</Link>
                            <Link href="/orders" className={navLinkClass}>Orders</Link>
                            <Link href="/activity" className={navLinkClass}>Activity</Link>
                        </>
                    )}
                </nav>

                <div className="flex flex-1 items-center justify-end">
                    <UserMenu />
                </div>
            </div>
        </header>
    );
}