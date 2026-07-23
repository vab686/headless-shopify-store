import { formatCurrency } from "../../utils/currency";

export default function OrderCard({ order }) {
    return (
        <div className="rounded-lg border p-5">
            <h2 className="text-lg font-semibold">
                Order #{order.orderNumber}
            </h2>

            <p className="mt-2">
                {order.items.length} Item(s)
            </p>

            <p className="mt-2 font-semibold text-blue-600">
                {formatCurrency(order.total)}
            </p>

            <p className="mt-2">
                {order.status}
            </p>
        </div>
    );
}