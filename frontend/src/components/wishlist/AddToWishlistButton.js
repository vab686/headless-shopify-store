"use client";

import { Heart } from "lucide-react";
import { useAddWishlist } from "../../queries/wishlist.query";

export default function AddToWishlistButton({ product }) {
    const { mutate, isPending } = useAddWishlist();

    return (
        <button
            onClick={() =>
                mutate({
                    productId: product.id,
                    title: product.title,
                    image: product.featuredImage,
                    price: product.price
                })
            }
            disabled={isPending}
            className="rounded-full border p-2 hover:bg-gray-100"
        >
            <Heart className="h-5 w-5" />
        </button>
    );
}