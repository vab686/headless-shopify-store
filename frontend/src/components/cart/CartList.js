"use client";

import CartItem from "./CartItem";

export default function CartList({ items }) {
    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <CartItem
                    key={item.variantId ?? item._id ?? index}
                    item={item}
                />
            ))}
        </div>
    );
}