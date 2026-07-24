export const formatCurrency = (value) => {
    let num = 0;
    if (typeof value === "number") {
        num = value;
    } else if (typeof value === "string") {
        num = parseFloat(value);
    } else if (value?.amount) {
        num = parseFloat(value.amount);
    } else if (value?.minVariantPrice?.amount) {
        num = parseFloat(value.minVariantPrice.amount);
    }

    if (isNaN(num)) num = 0;

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(num);
};