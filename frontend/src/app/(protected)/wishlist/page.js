"use client";

import PageContainer from "../../../components/layout/PageContainer";
import WishlistGrid from "../../../components/wishlist/WishlistGrid";
import EmptyWishlist from "../../../components/wishlist/EmptyWishlist";
import { useWishlist } from "../../../queries/wishlist.query";

export default function WishlistPage() {
    const { data, isLoading } = useWishlist();

    if (isLoading) {
        return (
            <PageContainer>
                Loading...
            </PageContainer>
        );
    }

    // Backend may return array or object with items array
    const items = Array.isArray(data)
        ? data
        : (data?.items ?? []);

    if (!items.length) {
        return (
            <PageContainer>
                <EmptyWishlist />
            </PageContainer>
        );
    }

    return (
        <PageContainer>
            <WishlistGrid items={items} />
        </PageContainer>
    );
}