"use client";

import { useState } from "react";

export default function ProductImage({ src, title, className = "" }) {
    const [error, setError] = useState(false);

    const imageUrl = typeof src === "string" 
        ? src 
        : (src?.url || "");

    if (!imageUrl || error) {
        return (
            <div className={`aspect-square flex items-center justify-center rounded-lg bg-gray-100 font-bold text-gray-400 text-2xl ${className}`}>
                <span>{title ? title.charAt(0) : "P"}</span>
            </div>
        );
    }

    return (
        <div className={`aspect-square overflow-hidden rounded-lg bg-gray-100 ${className}`}>
            <img
                src={imageUrl}
                alt={title || "Product image"}
                onError={() => setError(true)}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
        </div>
    );
}