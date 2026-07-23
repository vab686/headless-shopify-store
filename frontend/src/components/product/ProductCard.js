import Link from "next/link";
import ProductImage from "./ProductImage";
import { formatCurrency } from "../../utils/currency";
import AddToWishlistButton from "../wishlist/AddToWishlistButton";

export default function ProductCard({ product }) {
    return (
        <div className="rounded-lg bg-white p-4 shadow transition hover:shadow-lg">
            <Link href={`/products/${product.handle}`}>
                <ProductImage
                    src={product.featuredImage}
                    title={product.title}
                />
            </Link>

            <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                    <h2 className="text-lg font-semibold">
                        {product.title}
                    </h2>

                    <p className="mt-2 text-xl font-bold text-blue-600">
                        {formatCurrency(product.price)}
                    </p>
                </div>

                <AddToWishlistButton product={product} />
            </div>
        </div>
    );
}