"use client";

import { useState } from "react";

export default function ProductImage({ src, title, className = "", imgClassName = "" }) {
    const [error, setError] = useState(false);

    const imageUrl = typeof src === "string" 
        ? src 
        : (src?.url || "");

    if (!imageUrl || error) {
        return (
            <div className={`flex h-full w-full items-center justify-center bg-gray-100 font-bold text-gray-400 text-2xl ${className}`}>
                <span>{title ? title.charAt(0) : "P"}</span>
            </div>
        );
    }

    return (
        <div className={`h-full w-full overflow-hidden ${className}`}>
            <img
                src={imageUrl}
                alt={title || "Product image"}
                onError={() => setError(true)}
                className={`h-full w-full object-cover ${imgClassName || "transition-transform duration-300 hover:scale-105"}`}
            />
        </div>
    );
}