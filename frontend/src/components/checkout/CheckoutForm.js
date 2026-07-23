"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCheckout } from "../../queries/order.query";

export default function CheckoutForm() {
    const router = useRouter();
    const { mutate, isPending } = useCheckout();

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        postalCode: ""
    });

    const handleChange = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();

        mutate(form, {
            onSuccess: () => {
                router.push("/orders");
            }
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full Name" className="w-full rounded border p-3" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full rounded border p-3" />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full rounded border p-3" />
            <textarea name="address" value={form.address} onChange={handleChange} placeholder="Address" className="w-full rounded border p-3" />
            <input name="city" value={form.city} onChange={handleChange} placeholder="City" className="w-full rounded border p-3" />
            <input name="state" value={form.state} onChange={handleChange} placeholder="State" className="w-full rounded border p-3" />
            <input name="postalCode" value={form.postalCode} onChange={handleChange} placeholder="Postal Code" className="w-full rounded border p-3" />
            <button type="submit" disabled={isPending} className="rounded bg-green-600 px-6 py-3 text-white">
                {isPending ? "Placing Order..." : "Place Order"}
            </button>
        </form>
    );
}