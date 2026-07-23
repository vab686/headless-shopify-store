"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import PageContainer from "../../../../components/layout/PageContainer";
import ProductDetails from "../../../../components/product/ProductDetails";
import { getProduct } from "../../../../services/product.service";

export default function ProductPage() {
    const { handle } = useParams();

    const { data, isLoading } = useQuery({
        queryKey: ["product", handle],
        queryFn: () => getProduct(handle)
    });

    if (isLoading) {
        return (
            <PageContainer>
                Loading...
            </PageContainer>
        );
    }

    return (
        <PageContainer>
            <ProductDetails product={data} />
        </PageContainer>
    );
}