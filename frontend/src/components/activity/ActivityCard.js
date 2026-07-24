"use client";

import { formatCurrency } from "../../utils/currency";

export default function ActivityCard({ activity }) {
    const actionTitles = {
        LOGIN: "Account Login",
        LOGOUT: "Account Logout",
        PRODUCT_VIEW: "Viewed Product",
        PRODUCT_SEARCH: "Searched Products",
        ADD_TO_CART: "Added to Cart",
        REMOVE_FROM_CART: "Removed from Cart",
        CHECKOUT_INITIATED: "Initiated Checkout",
        ORDER_COMPLETED: "Order Placed"
    };

    const actionIcons = {
        LOGIN: "🔑",
        LOGOUT: "🚪",
        PRODUCT_VIEW: "👁️",
        PRODUCT_SEARCH: "🔍",
        ADD_TO_CART: "🛒",
        REMOVE_FROM_CART: "🗑️",
        CHECKOUT_INITIATED: "💳",
        ORDER_COMPLETED: "🎉"
    };

    const title = actionTitles[activity.type] || activity.type || "User Activity";
    const icon = actionIcons[activity.type] || "📌";

    const formattedDate = activity.createdAt
        ? new Date(activity.createdAt).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        })
        : "Just now";

    let description = "";
    if (activity.metadata) {
        if (activity.metadata.total) {
            description = `Total: ${formatCurrency(activity.metadata.total)}`;
        } else if (activity.metadata.query) {
            description = `Search query: "${activity.metadata.query}"`;
        } else if (activity.metadata.productTitle) {
            description = `Product: ${activity.metadata.productTitle}`;
        }
    }

    return (
        <div className="flex items-center justify-between rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
                <span className="text-2xl p-2 rounded-lg bg-gray-50 border">{icon}</span>
                <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                        {title}
                    </h3>
                    {description && (
                        <p className="text-xs text-gray-500 mt-0.5">
                            {description}
                        </p>
                    )}
                </div>
            </div>

            <span className="text-xs font-medium text-gray-400">
                {formattedDate}
            </span>
        </div>
    );
}