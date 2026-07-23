"use client";

export default function CategoryFilter({
    value,
    categories,
    onChange
}) {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
            className="rounded-lg border p-3"
        >
            <option value="">
                All Categories
            </option>

            {categories.map(category => (
                <option
                    key={category.handle}
                    value={category.handle}
                >
                    {category.title}
                </option>
            ))}
        </select>
    );
}