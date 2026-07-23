"use client";

import Image from "next/image";
import Link from "next/link";
import { HeartOff } from "lucide-react";
import { formatCurrency } from "../../utils/currency";
import { useRemoveWishlist } from "../../queries/wishlist.query";

export default function WishlistCard({ item }) {
    const { mutate } = useRemoveWishlist();

    return (
        <div className="rounded-lg border bg-white p-4 shadow">
            <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width:768px) 100vw,25vw"
                className="object-cover"
            />

            <h2 className="mt-4 text-lg font-semibold">
                {item.title}
            </h2>

            <p className="mt-2 font-bold text-blue-600">
                {formatCurrency(item.price)}
            </p>

            <div className="mt-4 flex justify-between">
                <Link
                    href={`/products/${item.handle}`}
                    className="rounded bg-blue-600 px-4 py-2 text-white"
                >
                    View
                </Link>

                <button
                    onClick={() => mutate(item.productId)}
                    className="rounded bg-red-500 px-4 py-2 text-white"
                >
                    <HeartOff className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}