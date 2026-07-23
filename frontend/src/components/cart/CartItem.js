"use client";

import { useRemoveCart, useUpdateCart } from "../../queries/cart.query";
import { formatCurrency } from "../../utils/currency";

export default function CartItem({ item }) {
    const updateCart = useUpdateCart();
    const removeCart = useRemoveCart();

    return (
        <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
                <h2 className="font-semibold">
                    {item.title}
                </h2>
                <p>
                    {formatCurrency(item.price)}
                </p>
            </div>

            <div className="flex items-center gap-3">
                <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={event =>
                        updateCart.mutate({
                            variantId: item.variantId,
                            quantity: Number(event.target.value)
                        })
                    }
                    className="w-20 rounded border p-2"
                />

                <button
                    onClick={() =>
                        removeCart.mutate(item.variantId)
                    }
                    className="text-red-600"
                >
                    Remove
                </button>
            </div>
        </div>
    );
}