export default function ActivitySummary({ summary }) {
    return (
        <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-lg border bg-white p-5 shadow">
                <h3 className="text-sm text-gray-500">
                    Product Views
                </h3>
                <p className="mt-2 text-3xl font-bold">
                    {summary?.productViews ?? summary?.PRODUCT_VIEWED ?? 0}
                </p>
            </div>

            <div className="rounded-lg border bg-white p-5 shadow">
                <h3 className="text-sm text-gray-500">
                    Cart Actions
                </h3>
                <p className="mt-2 text-3xl font-bold">
                    {summary?.cartActions ?? summary?.CART_ADD ?? 0}
                </p>
            </div>

            <div className="rounded-lg border bg-white p-5 shadow">
                <h3 className="text-sm text-gray-500">
                    Wishlist Actions
                </h3>
                <p className="mt-2 text-3xl font-bold">
                    {summary?.wishlistActions ?? summary?.WISHLIST_ADD ?? 0}
                </p>
            </div>

            <div className="rounded-lg border bg-white p-5 shadow">
                <h3 className="text-sm text-gray-500">
                    Orders
                </h3>
                <p className="mt-2 text-3xl font-bold">
                    {summary?.orders ?? summary?.ORDER_COMPLETED ?? 0}
                </p>
            </div>
        </div>
    );
}