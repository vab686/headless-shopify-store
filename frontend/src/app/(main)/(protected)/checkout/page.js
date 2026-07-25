import PageContainer from "../../../../components/layout/PageContainer";
import CheckoutForm from "../../../../components/checkout/CheckoutForm";
import BackButton from "../../../../components/common/BackButton";

export default function CheckoutPage() {
    return (
        <PageContainer>
            <BackButton label="Back to Cart" />
            <h1 className="mb-6 text-3xl font-bold">
                Checkout
            </h1>
            <CheckoutForm />
        </PageContainer>
    );
}
