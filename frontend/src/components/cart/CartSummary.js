import CartItem from "./CartItem";

export default function CartList({ items }) {
    return (
        <div className="space-y-4">
            {items.map(item => (
                <CartItem
                    key={item.variantId}
                    item={item}
                />
            ))}
        </div>
    );
}