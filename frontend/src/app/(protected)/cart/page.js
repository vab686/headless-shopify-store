"use client";

import PageContainer from "../../../components/layout/PageContainer";
import CartList from "../../../components/cart/CartList";
import CartSummary from "../../../components/cart/CartSummary";
import EmptyCart from "../../../components/cart/EmptyCart";
import { useCart } from "../../../queries/cart.query";

export default function CartPage() {
    const { data, isLoading } = useCart();

    if (isLoading) {
        return (
            <PageContainer>
                Loading...
            </PageContainer>
        );
    }

    if (!data?.items?.length) {
        return (
            <PageContainer>
                <EmptyCart />
            </PageContainer>
        );
    }

    return (
        <PageContainer>
            <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
                <CartList items={data.items} />
                <CartSummary items={data.items} />
            </div>
        </PageContainer>
    );
}