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
        country: "India",
        postalCode: ""
    });

    const [error, setError] = useState("");

    const handleChange = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        setError("");

        mutate(form, {
            onSuccess: () => {
                router.push("/orders");
            },
            onError: (err) => {
                setError(err?.response?.data?.message || "Failed to place order. Please try again.");
            }
        });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl space-y-4 rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Shipping Details</h2>

            {error && (
                <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-200">
                    {error}
                </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Full Name</label>
                    <input name="fullName" value={form.fullName} onChange={handleChange} required placeholder="John Doe" className="w-full rounded-lg border p-3 text-sm focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" className="w-full rounded-lg border p-3 text-sm focus:border-blue-500 focus:outline-none" />
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 9876543210" className="w-full rounded-lg border p-3 text-sm focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Country</label>
                    <input name="country" value={form.country} onChange={handleChange} required placeholder="India" className="w-full rounded-lg border p-3 text-sm focus:border-blue-500 focus:outline-none" />
                </div>
            </div>

            <div>
                <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Street Address</label>
                <textarea name="address" value={form.address} onChange={handleChange} required rows={2} placeholder="123 Main Street, Apt 4B" className="w-full rounded-lg border p-3 text-sm focus:border-blue-500 focus:outline-none" />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
                <div>
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">City</label>
                    <input name="city" value={form.city} onChange={handleChange} required placeholder="Mumbai" className="w-full rounded-lg border p-3 text-sm focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">State</label>
                    <input name="state" value={form.state} onChange={handleChange} required placeholder="Maharashtra" className="w-full rounded-lg border p-3 text-sm focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Postal Code</label>
                    <input name="postalCode" value={form.postalCode} onChange={handleChange} required placeholder="400001" className="w-full rounded-lg border p-3 text-sm focus:border-blue-500 focus:outline-none" />
                </div>
            </div>

            <button type="submit" disabled={isPending} className="mt-6 w-full rounded-lg bg-green-600 py-3 text-center font-semibold text-white hover:bg-green-700 disabled:opacity-50 transition-colors">
                {isPending ? "Placing Order..." : "Confirm & Place Order"}
            </button>
        </form>
    );
}