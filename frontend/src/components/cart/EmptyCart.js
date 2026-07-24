import Link from "next/link";

export default function EmptyCart() {
    return (
        <div className="rounded-lg border border-dashed p-12 text-center col-span-full">
            <div className="text-5xl mb-4">🛒</div>
            <h2 className="text-2xl font-semibold text-gray-700">
                Your Cart is Empty
            </h2>
            <p className="mt-2 text-gray-500">
                Looks like you haven&apos;t added anything yet.
            </p>
            <Link
                href="/products"
                className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
                Browse Products
            </Link>
        </div>
    );
}
