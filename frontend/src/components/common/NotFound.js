import Link from "next/link";

export default function NotFound() {
    return (
        <div className="py-20 text-center">
            <h1 className="text-6xl font-bold">
                404
            </h1>

            <p className="mt-4 text-lg text-gray-600">
                Page not found.
            </p>

            <Link
                href="/products"
                className="mt-6 inline-block rounded bg-blue-600 px-6 py-3 text-white"
            >
                Back to Products
            </Link>
        </div>
    );
}