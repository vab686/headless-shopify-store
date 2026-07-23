export default function EmptyProducts() {
    return (
        <div className="rounded-lg border border-dashed p-12 text-center">
            <h2 className="text-2xl font-semibold">
                No Products Found
            </h2>

            <p className="mt-3 text-gray-500">
                Try another keyword.
            </p>
        </div>
    );
}