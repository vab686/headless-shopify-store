"use client";

import { useRemoveCart, useUpdateCart } from "../../queries/cart.query";
import { formatCurrency } from "../../utils/currency";

export default function CartItem({ item }) {
    const updateCart = useUpdateCart();
    const removeCart = useRemoveCart();

    const handleQuantityChange = (newQty) => {
        if (newQty < 1) return;
        updateCart.mutate({
            variantId: item.variantId,
            quantity: newQty
        });
    };

    return (
        <div className="flex items-center justify-between rounded-lg border bg-white p-4 shadow-sm gap-4">
            <div className="flex items-center gap-4 flex-1 min-w-0">
                {item.image && (
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-16 w-16 rounded-lg object-cover flex-shrink-0"
                    />
                )}
                <div className="min-w-0">
                    <h2 className="font-semibold truncate">{item.title}</h2>
                    <p className="text-blue-600 font-bold">{formatCurrency(item.price)}</p>
                </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
                <button
                    onClick={() => handleQuantityChange(item.quantity - 1)}
                    disabled={item.quantity <= 1 || updateCart.isPending}
                    className="w-8 h-8 rounded-full border flex items-center justify-center font-bold hover:bg-gray-100 disabled:opacity-40"
                >
                    −
                </button>

                <span className="w-8 text-center font-semibold">{item.quantity}</span>

                <button
                    onClick={() => handleQuantityChange(item.quantity + 1)}
                    disabled={updateCart.isPending}
                    className="w-8 h-8 rounded-full border flex items-center justify-center font-bold hover:bg-gray-100 disabled:opacity-40"
                >
                    +
                </button>

                <button
                    onClick={() => removeCart.mutate(item.variantId)}
                    disabled={removeCart.isPending}
                    className="ml-2 text-sm text-red-500 hover:text-red-700 font-medium disabled:opacity-40"
                >
                    Remove
                </button>
            </div>
        </div>
    );
}