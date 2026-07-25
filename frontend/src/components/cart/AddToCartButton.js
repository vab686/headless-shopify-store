"use client";

import { useState } from "react";
import { useAddToCart } from "../../queries/cart.query";
import { ShoppingCart, Check } from "lucide-react";
import toast from "react-hot-toast";

export default function AddToCartButton({ product, className = "" }) {
    const { mutate, isPending } = useAddToCart();
    const [justAdded, setJustAdded] = useState(false);

    const handleClick = () => {
        mutate({
            productId: product.id,
            variantId: product.variantId,
            title: product.title,
            image: product.image ?? product.featuredImage?.url ?? "",
            price: typeof product.price === "number"
                ? product.price
                : parseFloat(product.priceRange?.minVariantPrice?.amount ?? product.price ?? 0),
            quantity: 1
        }, {
            onSuccess: () => {
                toast.success(`${product.title} added to cart!`, {
                    duration: 3000,
                    icon: "🛒",
                    style: {
                        borderRadius: "12px",
                        background: "#fff",
                        color: "#0f172a",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                        fontWeight: 500
                    }
                });
                setJustAdded(true);
                setTimeout(() => setJustAdded(false), 2500);
            },
            onError: () => {
                toast.error("Failed to add item. Please try again.");
            }
        });
    };

    return (
        <button
            onClick={handleClick}
            disabled={isPending || justAdded}
            className={`flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-bold text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed transition-all duration-300 ${
                justAdded
                    ? "bg-green-500 hover:bg-green-600 focus:ring-green-400 scale-95"
                    : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-md focus:ring-indigo-500"
            } ${className}`}
        >
            {isPending ? (
                <>
                    <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Adding...
                </>
            ) : justAdded ? (
                <>
                    <Check className="h-5 w-5" />
                    Added to Cart!
                </>
            ) : (
                <>
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                </>
            )}
        </button>
    );
}