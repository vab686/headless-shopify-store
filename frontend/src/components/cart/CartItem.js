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
        <div className="flex flex-col sm:flex-row sm:items-center justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm gap-4 transition-all hover:shadow-md">
            <div className="flex items-center gap-4 flex-1 min-w-0">
                {item.image && (
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-gray-50 border border-gray-100">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover"
                        />
                    </div>
                )}
                <div className="min-w-0 flex flex-col justify-center">
                    <h2 className="text-base font-bold text-gray-900 truncate">{item.title}</h2>
                    <p className="mt-1 text-lg font-bold text-indigo-600">{formatCurrency(item.price)}</p>
                </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 flex-shrink-0 mt-4 sm:mt-0 border-t sm:border-0 pt-4 sm:pt-0">
                <div className="flex items-center gap-1 rounded-lg border border-gray-200 bg-gray-50 p-1">
                    <button
                        onClick={() => handleQuantityChange(item.quantity - 1)}
                        disabled={item.quantity <= 1 || updateCart.isPending}
                        className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-gray-600 shadow-sm hover:bg-gray-100 disabled:opacity-40 transition-colors"
                    >
                        −
                    </button>

                    <span className="w-10 text-center font-semibold text-gray-900">{item.quantity}</span>

                    <button
                        onClick={() => handleQuantityChange(item.quantity + 1)}
                        disabled={updateCart.isPending}
                        className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-gray-600 shadow-sm hover:bg-gray-100 disabled:opacity-40 transition-colors"
                    >
                        +
                    </button>
                </div>

                <button
                    onClick={() => removeCart.mutate(item.variantId)}
                    disabled={removeCart.isPending}
                    className="text-sm font-medium text-red-500 hover:text-red-700 disabled:opacity-40 transition-colors"
                >
                    Remove
                </button>
            </div>
        </div>
    );
}