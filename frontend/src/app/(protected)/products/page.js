"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PageContainer from "../../../components/layout/PageContainer";
import ProductGrid from "../../../components/product/ProductGrid";
import ProductToolbar from "../../../components/product/ProductToolbar";
import ProductSkeleton from "../../../components/product/ProductSkeleton";
import EmptyProducts from "../../../components/product/EmptyProducts";
import useDebounce from "../../../hooks/useDebounce";
import { getProducts } from "../../../services/product.service";

export default function ProductsPage() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    const keyword = useDebounce(search);

    const { data, isLoading } = useQuery({
        queryKey: ["products", keyword, category],
        queryFn: () => getProducts({
            q: keyword,
            category
        })
    });

    if (isLoading) {
        return (
            <PageContainer>
                <ProductToolbar
                    search={search}
                    category={category}
                    categories={[]}
                    setSearch={setSearch}
                    setCategory={setCategory}
                />

                <div className="grid gap-6 md:grid-cols-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <ProductSkeleton key={index} />
                    ))}
                </div>
            </PageContainer>
        );
    }

    return (
        <PageContainer>
            <ProductToolbar
                search={search}
                category={category}
                categories={data.categories ?? []}
                setSearch={setSearch}
                setCategory={setCategory}
            />

            {data.products.length === 0 ? (
                <EmptyProducts />
            ) : (
                <ProductGrid
                    products={data.products}
                />
            )}
        </PageContainer>
    );
}