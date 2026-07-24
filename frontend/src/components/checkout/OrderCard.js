"use client";

import { formatCurrency } from "../../utils/currency";

export default function OrderCard({ order }) {
    const formattedDate = order.createdAt
        ? new Date(order.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric"
        })
        : "Recent";

    const statusColors = {
        PLACED: "bg-blue-100 text-blue-800 border-blue-200",
        PROCESSING: "bg-yellow-100 text-yellow-800 border-yellow-200",
        SHIPPED: "bg-purple-100 text-purple-800 border-purple-200",
        DELIVERED: "bg-green-100 text-green-800 border-green-200"
    };

    const statusClass = statusColors[order.orderStatus] || "bg-gray-100 text-gray-800 border-gray-200";

    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-4">
                <div>
                    <span className="text-xs font-bold uppercase text-gray-400">Order ID</span>
                    <h2 className="text-lg font-bold text-gray-800">
                        #{order._id ? order._id.slice(-8).toUpperCase() : "N/A"}
                    </h2>
                    <p className="text-xs text-gray-500">{formattedDate}</p>
                </div>

                <div className="flex items-center gap-3">
                    <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClass}`}>
                        {order.orderStatus || "PLACED"}
                    </span>
                    <span className="rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 text-xs font-semibold">
                        {order.paymentStatus || "PAID"}
                    </span>
                </div>
            </div>

            {/* Order Items */}
            <div className="space-y-3">
                {order.items?.map((item, index) => (
                    <div key={item.variantId ?? index} className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 min-w-0">
                            {item.image ? (
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-12 w-12 rounded-lg object-cover border flex-shrink-0"
                                />
                            ) : (
                                <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-gray-400 flex-shrink-0">
                                    {item.title?.charAt(0) ?? "P"}
                                </div>
                            )}
                            <div className="min-w-0">
                                <p className="font-semibold text-sm text-gray-800 truncate">{item.title}</p>
                                <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                            </div>
                        </div>
                        <span className="text-sm font-semibold text-gray-700 flex-shrink-0">
                            {formatCurrency(Number(item.price) * item.quantity)}
                        </span>
                    </div>
                ))}
            </div>

            {/* Address & Total Summary */}
            <div className="flex flex-wrap items-end justify-between gap-4 border-t pt-4 text-sm">
                <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase">Shipping To</p>
                    <p className="font-medium text-gray-700">
                        {order.shippingAddress?.fullName} ({order.shippingAddress?.city}, {order.shippingAddress?.country})
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-xs font-semibold text-gray-500 uppercase">Total Amount</p>
                    <p className="text-xl font-extrabold text-blue-600">
                        {formatCurrency(order.total)}
                    </p>
                </div>
            </div>
        </div>
    );
}