"use client";

import Link from "next/link";
import UserMenu from "./UserMenu";

export default function Navbar() {
    return (
        <header className="border-b bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Link href="/products" className="text-2xl font-bold">
                    Shopify Store
                </Link>
                <nav className="flex items-center gap-6">
                    <Link href="/products">Products</Link>
                    <Link href="/cart">Cart</Link>
                    <Link href="/wishlist">Wishlist</Link>
                    <Link href="/orders">Orders</Link>
                    <Link href="/activity">Activity</Link>
                </nav>
                <UserMenu />
            </div>
        </header>
    );
}