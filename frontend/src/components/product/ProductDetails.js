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
        <div className="grid gap-10 lg:grid-cols-2">
            <ProductImage
                src={imageUrl}
                title={product.title}
            />
            <div>
                <h1 className="text-4xl font-bold">
                    {product.title}
                </h1>
                <p className="mt-4 text-2xl font-semibold text-blue-600">
                    {formatCurrency(price)}
                </p>
                <div
                    className="prose mt-6"
                    dangerouslySetInnerHTML={{
                        __html: product.description
                    }}
                />
                <AddToCartButton product={normalizedProduct} />
            </div>
        </div>
    );
}