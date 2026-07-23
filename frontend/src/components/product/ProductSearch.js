"use client";

export default function ProductSearch({ value, onChange }) {
    return (
        <input
            type="text"
            value={value}
            onChange={event => onChange(event.target.value)}
            placeholder="Search products..."
            className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}