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

    // Backend returns cart object with items array
    const items = Array.isArray(data)
        ? data
        : (data?.items ?? []);

    if (!items.length) {
        return (
            <PageContainer>
                <EmptyCart />
            </PageContainer>
        );
    }

    return (
        <PageContainer>
            <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
                <CartList items={items} />
                <CartSummary items={items} />
            </div>
        </PageContainer>
    );
}