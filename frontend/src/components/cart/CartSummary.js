"use client";

import Link from "next/link";
import { formatCurrency } from "../../utils/currency";
import { useClearCart } from "../../queries/cart.query";

export default function CartSummary({ items }) {
    const { mutate: clearCart, isPending } = useClearCart();

    const subtotal = items.reduce(
        (sum, item) => sum + (Number(item.price) * item.quantity),
        0
    );

    return (
        <div className="rounded-lg border bg-white p-6 shadow h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-2">
                {items.map((item, index) => (
                    <div key={item.variantId ?? index} className="flex justify-between text-sm text-gray-600">
                        <span>{item.title} × {item.quantity}</span>
                        <span>{formatCurrency(Number(item.price) * item.quantity)}</span>
                    </div>
                ))}
            </div>

            <div className="mt-4 border-t pt-4">
                <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>{formatCurrency(subtotal)}</span>
                </div>
            </div>

            <Link
                href="/checkout"
                className="mt-6 block w-full rounded-lg bg-blue-600 py-3 text-center text-white font-semibold hover:bg-blue-700 transition-colors"
            >
                Place Order
            </Link>

            <button
                onClick={() => clearCart()}
                disabled={isPending}
                className="mt-3 block w-full rounded-lg border border-red-500 py-2 text-center text-red-500 hover:bg-red-50 transition-colors text-sm disabled:opacity-50"
            >
                {isPending ? "Clearing..." : "Clear Cart"}
            </button>
        </div>
    );
}