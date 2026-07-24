"use client";

import Link from "next/link";
import { HeartOff } from "lucide-react";
import { formatCurrency } from "../../utils/currency";
import { useRemoveWishlist } from "../../queries/wishlist.query";

export default function WishlistCard({ item }) {
    const { mutate, isPending } = useRemoveWishlist();

    const productHandle = item.handle
        || item.title?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
        || "";

    return (
        <div className="rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
            {item.image ? (
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-3">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            ) : (
                <div className="aspect-square flex items-center justify-center rounded-lg bg-gray-100 text-2xl font-bold text-gray-400 mb-3">
                    {item.title?.charAt(0) ?? "P"}
                </div>
            )}

            <h2 className="text-base font-semibold text-gray-800 line-clamp-1">
                {item.title}
            </h2>

            <p className="mt-1 text-lg font-bold text-blue-600">
                {formatCurrency(item.price)}
            </p>

            <div className="mt-4 flex items-center justify-between gap-2">
                <Link
                    href={`/products/${productHandle}`}
                    className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                >
                    View
                </Link>

                <button
                    onClick={() => mutate(item.productId)}
                    disabled={isPending}
                    className="rounded-lg border border-red-200 bg-red-50 p-2 text-red-600 hover:bg-red-100 disabled:opacity-40 transition-colors"
                    title="Remove from wishlist"
                >
                    <HeartOff className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
}