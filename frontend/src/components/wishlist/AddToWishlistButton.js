"use client";

import { Heart } from "lucide-react";
import { useAddWishlist, useRemoveWishlist, useWishlist } from "../../queries/wishlist.query";
import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/navigation";

export default function AddToWishlistButton({ product, className = "" }) {
    const { authenticated } = useAuth();
    const router = useRouter();
    const { data: wishlist = [] } = useWishlist(authenticated);
    const addMutation = useAddWishlist();
    const removeMutation = useRemoveWishlist();

    const isInWishlist = wishlist.some(item => item.productId === product.id);
    const isPending = addMutation.isPending || removeMutation.isPending;

    const handleToggle = (e) => {
        e.preventDefault(); // Prevent navigating if this button is inside a Link
        
        if (!authenticated) {
            router.push("/login");
            return;
        }

        if (isInWishlist) {
            removeMutation.mutate(product.id);
        } else {
            addMutation.mutate({
                productId: product.id,
                title: product.title,
                handle: product.handle ?? "",
                image: product.featuredImage?.url ?? product.image ?? "",
                price: typeof product.price === "number"
                    ? product.price
                    : parseFloat(product.priceRange?.minVariantPrice?.amount ?? product.price ?? 0)
            });
        }
    };

    return (
        <button
            onClick={handleToggle}
            disabled={isPending}
            className={`flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-sm transition-all hover:scale-105 disabled:opacity-50 ${
                isInWishlist ? 'border-red-100 bg-red-50' : 'border-gray-200 hover:border-gray-300'
            } ${className}`}
            aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
            <Heart 
                className={`h-5 w-5 transition-colors ${
                    isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-400'
                }`} 
            />
        </button>
    );
}