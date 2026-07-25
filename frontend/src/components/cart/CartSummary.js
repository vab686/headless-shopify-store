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
        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm h-fit">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

            <div className="space-y-4">
                {items.map((item, index) => (
                    <div key={item.variantId ?? index} className="flex justify-between text-sm text-gray-600 border-b border-gray-200 pb-2 last:border-0">
                        <span className="truncate pr-4">{item.title} <span className="text-gray-400">× {item.quantity}</span></span>
                        <span className="font-medium text-gray-900 whitespace-nowrap">{formatCurrency(Number(item.price) * item.quantity)}</span>
                    </div>
                ))}
            </div>

            <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="flex justify-between font-bold text-lg text-gray-900">
                    <span>Total</span>
                    <span>{formatCurrency(subtotal)}</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">Shipping and taxes calculated at checkout.</p>
            </div>

            <Link
                href="/checkout"
                className="mt-8 flex items-center justify-center gap-2 w-full rounded-xl bg-indigo-600 py-3.5 text-center text-white font-bold hover:bg-indigo-700 hover:shadow-md transition-all duration-200"
            >
                Proceed to Checkout →
            </Link>

            <Link
                href="/orders"
                className="mt-2 flex items-center justify-center gap-2 w-full rounded-xl border border-gray-200 py-3 text-center text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200"
            >
                View My Orders
            </Link>

            <button
                onClick={() => clearCart()}
                disabled={isPending}
                className="mt-3 block w-full rounded-xl border border-red-200 py-2.5 text-center text-sm font-medium text-red-600 hover:bg-red-50 hover:border-red-300 transition-all duration-200 disabled:opacity-50"
            >
                {isPending ? "Clearing..." : "Clear Cart"}
            </button>
        </div>
    );
}