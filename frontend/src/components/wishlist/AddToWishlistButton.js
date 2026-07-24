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
                    handle: product.handle ?? "",
                    image: product.featuredImage?.url ?? product.image ?? "",
                    price: typeof product.price === "number"
                        ? product.price
                        : parseFloat(product.priceRange?.minVariantPrice?.amount ?? product.price ?? 0)
                })
            }
            disabled={isPending}
            className="rounded-full border p-2 hover:bg-gray-100"
        >
            <Heart className="h-5 w-5" />
        </button>
    );
}