import Link from "next/link";
import ProductImage from "./ProductImage";
import { formatCurrency } from "../../utils/currency";
import AddToWishlistButton from "../wishlist/AddToWishlistButton";

export default function ProductCard({ product }) {
    const price = product.priceRange?.minVariantPrice?.amount ?? product.price;
    const imageUrl = product.featuredImage?.url ?? product.featuredImage ?? product.image;

    return (
        <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Link href={`/products/${product.handle}`} className="relative block aspect-[4/5] overflow-hidden bg-gray-50">
                <ProductImage
                    src={imageUrl}
                    title={product.title}
                    imgClassName="transition-transform duration-500 group-hover:scale-105"
                />
            </Link>

            <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                    <Link href={`/products/${product.handle}`}>
                        <h2 className="text-base font-semibold text-gray-900 line-clamp-2 hover:text-indigo-600 transition-colors">
                            {product.title}
                        </h2>
                    </Link>
                    <AddToWishlistButton product={product} className="flex-shrink-0" />
                </div>

                <div className="mt-auto pt-4">
                    <p className="text-lg font-bold text-gray-900">
                        {formatCurrency(price)}
                    </p>
                </div>
            </div>
        </div>
    );
}