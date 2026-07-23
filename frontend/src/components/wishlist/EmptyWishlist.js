import Link from "next/link";

export default function EmptyWishlist() {
    return (
        <div className="rounded-lg border border-dashed p-12 text-center">
            <h2 className="text-2xl font-semibold">
                Wishlist Is Empty
            </h2>

            <Link
                href="/products"
                className="mt-6 inline-block rounded bg-blue-600 px-6 py-3 text-white"
            >
                Browse Products
            </Link>
        </div>
    );
}