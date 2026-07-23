import Link from "next/link";

export default function EmptyOrders() {
    return (
        <div className="rounded-lg border border-dashed p-10 text-center">
            <h2 className="text-2xl font-semibold">
                No Orders Found
            </h2>

            <Link
                href="/products"
                className="mt-5 inline-block rounded bg-blue-600 px-6 py-3 text-white"
            >
                Start Shopping
            </Link>
        </div>
    );
}