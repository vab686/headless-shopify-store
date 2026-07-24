"use client";

import { useAddToCart } from "../../queries/cart.query";

export default function AddToCartButton({ product }) {
    const { mutate, isPending } = useAddToCart();

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
        });
    };

    return (
        <button
            onClick={handleClick}
            disabled={isPending}
            className="mt-6 rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
        >
            {isPending ? "Adding..." : "Add To Cart"}
        </button>
    );
}