"use client";

import { Filter } from "lucide-react";

export default function CategoryFilter({
    value,
    categories,
    onChange
}) {
    return (
        <div className="relative min-w-[200px]">
            <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <select
                value={value}
                onChange={event => onChange(event.target.value)}
                className="w-full appearance-none rounded-xl border bg-white py-3 pl-9 pr-8 text-sm shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer"
            >
                <option value="">
                    All Categories
                </option>

                {categories.map(category => (
                    <option
                        key={category.handle || category.id}
                        value={category.handle}
                    >
                        {category.title}
                    </option>
                ))}
            </select>
        </div>
    );
}