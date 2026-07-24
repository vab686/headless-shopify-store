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

    const products = Array.isArray(data)
        ? data
        : (data?.products ?? []);

    const categories = Array.isArray(data?.categories)
        ? data.categories
        : [];

    return (
        <PageContainer>
            <ProductToolbar
                search={search}
                category={category}
                categories={categories}
                setSearch={setSearch}
                setCategory={setCategory}
            />

            {products.length === 0 ? (
                <EmptyProducts />
            ) : (
                <ProductGrid
                    products={products}
                />
            )}
        </PageContainer>
    );
}