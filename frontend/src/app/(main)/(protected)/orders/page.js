"use client";

import PageContainer from "../../../../components/layout/PageContainer";
import EmptyOrders from "../../../../components/checkout/EmptyOrders";
import OrderList from "../../../../components/checkout/OrderList";
import { useOrders } from "../../../../queries/order.query";

export default function OrdersPage() {
    const { data, isLoading } = useOrders();

    if (isLoading) {
        return (
            <PageContainer>
                Loading...
            </PageContainer>
        );
    }

    if (!data?.length) {
        return (
            <PageContainer>
                <EmptyOrders />
            </PageContainer>
        );
    }

    return (
        <PageContainer>
            <h1 className="mb-6 text-3xl font-bold">
                My Orders
            </h1>

            <OrderList orders={data} />
        </PageContainer>
    );
}
