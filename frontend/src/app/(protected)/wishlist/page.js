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

    if (!data?.length) {
        return (
            <PageContainer>
                <EmptyWishlist />
            </PageContainer>
        );
    }

    return (
        <PageContainer>
            <WishlistGrid items={data} />
        </PageContainer>
    );
}