"use client";

import { Search } from "lucide-react";

export default function ProductSearch({ value, onChange }) {
    return (
        <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
                type="text"
                value={value}
                onChange={event => onChange(event.target.value)}
                placeholder="Search products..."
                className="w-full rounded-xl border bg-white py-3 pl-10 pr-4 text-sm shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
            />
        </div>
    );
}