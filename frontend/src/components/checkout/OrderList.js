import OrderCard from "./OrderCard";

export default function OrderList({ orders }) {
    return (
        <div className="space-y-4">
            {orders.map(order => (
                <OrderCard
                    key={order._id}
                    order={order}
                />
            ))}
        </div>
    );
}