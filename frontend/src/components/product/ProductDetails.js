import ProductImage from "./ProductImage";
import { formatCurrency } from "../../utils/currency";
import AddToCartButton from "../cart/AddToCartButton";

export default function ProductDetails({ product }) {
    if (!product) return null;

    // Normalize Shopify GraphQL response fields
    const imageUrl = product.featuredImage?.url ?? product.image ?? "";
    const firstVariant = product.variants?.edges?.[0]?.node;
    const price = firstVariant?.price?.amount
        ?? product.priceRange?.minVariantPrice?.amount
        ?? product.price
        ?? 0;
    const variantId = firstVariant?.id ?? product.variantId ?? "";

    // Build a normalized product to pass to AddToCartButton
    const normalizedProduct = {
        ...product,
        image: imageUrl,
        price: parseFloat(price),
        variantId
    };

    return (
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-2xl bg-gray-50 shadow-sm ring-1 ring-gray-100 lg:sticky lg:top-24 h-fit">
                <ProductImage
                    src={imageUrl}
                    title={product.title}
                    imgClassName="w-full object-cover transition-transform duration-700 hover:scale-105"
                />
            </div>
            <div className="flex flex-col py-6">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {product.title}
                </h1>
                <p className="mt-4 text-3xl font-semibold text-gray-900">
                    {formatCurrency(price)}
                </p>
                <div className="mt-8 border-t border-gray-100 pt-8">
                    <h3 className="text-sm font-medium text-gray-900">Description</h3>
                    <div
                        className="prose prose-sm mt-4 max-w-none text-gray-600 prose-a:text-indigo-600 hover:prose-a:text-indigo-500"
                        dangerouslySetInnerHTML={{
                            __html: product.description || "<p>No description available.</p>"
                        }}
                    />
                </div>
                <div className="mt-10 flex">
                    <AddToCartButton product={normalizedProduct} className="flex-1" />
                </div>
            </div>
        </div>
    );
}