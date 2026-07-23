export default function ActivitySummary({ summary }) {
    return (
        <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-lg border bg-white p-5 shadow">
                <h3 className="text-sm text-gray-500">
                    Product Views
                </h3>
                <p className="mt-2 text-3xl font-bold">
                    {summary.productViews}
                </p>
            </div>

            <div className="rounded-lg border bg-white p-5 shadow">
                <h3 className="text-sm text-gray-500">
                    Cart Actions
                </h3>
                <p className="mt-2 text-3xl font-bold">
                    {summary.cartActions}
                </p>
            </div>

            <div className="rounded-lg border bg-white p-5 shadow">
                <h3 className="text-sm text-gray-500">
                    Wishlist Actions
                </h3>
                <p className="mt-2 text-3xl font-bold">
                    {summary.wishlistActions}
                </p>
            </div>

            <div className="rounded-lg border bg-white p-5 shadow">
                <h3 className="text-sm text-gray-500">
                    Orders
                </h3>
                <p className="mt-2 text-3xl font-bold">
                    {summary.orders}
                </p>
            </div>
        </div>
    );
}