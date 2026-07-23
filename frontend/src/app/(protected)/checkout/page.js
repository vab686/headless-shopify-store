import PageContainer from "../../../components/layout/PageContainer";
import CheckoutForm from "../../../components/checkout/CheckoutForm";

export default function CheckoutPage() {
    return (
        <PageContainer>
            <h1 className="mb-6 text-3xl font-bold">
                Checkout
            </h1>
            <CheckoutForm />
        </PageContainer>
    );
}