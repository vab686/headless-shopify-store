import ProductSearch from "./ProductSearch";
import CategoryFilter from "./CategoryFilter";

export default function ProductToolbar({
    search,
    category,
    categories,
    setSearch,
    setCategory
}) {
    return (
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ProductSearch
                value={search}
                onChange={setSearch}
            />

            <CategoryFilter
                value={category}
                categories={categories}
                onChange={setCategory}
            />
        </div>
    );
}