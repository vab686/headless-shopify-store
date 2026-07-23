import ProductImage from "./ProductImage";
import { formatCurrency } from "../../utils/currency";
import AddToCartButton from "../cart/AddToCartButton";

export default function ProductDetails({ product }) {
    return (
        <div className="grid gap-10 lg:grid-cols-2">
            <ProductImage
                src={product.image}
                title={product.title}
            />
            <div>
                <h1 className="text-4xl font-bold">
                    {product.title}
                </h1>
                <p className="mt-4 text-2xl font-semibold text-blue-600">
                    {formatCurrency(product.price)}
                </p>
                <div
                    className="prose mt-6"
                    dangerouslySetInnerHTML={{
                        __html: product.description
                    }}
                />
                <AddToCartButton product={product} />
            </div>
        </div>
    );
}