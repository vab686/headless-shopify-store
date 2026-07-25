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

    const inputClass = "w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 sm:text-sm transition-all";
    const labelClass = "block text-sm font-medium text-gray-700 mb-1";

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl space-y-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Details</h2>

            {error && (
                <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600 border border-red-200">
                    {error}
                </div>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label className={labelClass}>Full Name</label>
                    <input name="fullName" value={form.fullName} onChange={handleChange} required placeholder="John Doe" className={inputClass} />
                </div>
                <div>
                    <label className={labelClass}>Email Address</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" className={inputClass} />
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label className={labelClass}>Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 9876543210" className={inputClass} />
                </div>
                <div>
                    <label className={labelClass}>Country</label>
                    <input name="country" value={form.country} onChange={handleChange} required placeholder="India" className={inputClass} />
                </div>
            </div>

            <div>
                <label className={labelClass}>Street Address</label>
                <textarea name="address" value={form.address} onChange={handleChange} required rows={2} placeholder="123 Main Street, Apt 4B" className={inputClass} />
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
                <div>
                    <label className={labelClass}>City</label>
                    <input name="city" value={form.city} onChange={handleChange} required placeholder="Mumbai" className={inputClass} />
                </div>
                <div>
                    <label className={labelClass}>State</label>
                    <input name="state" value={form.state} onChange={handleChange} required placeholder="Maharashtra" className={inputClass} />
                </div>
                <div>
                    <label className={labelClass}>Postal Code</label>
                    <input name="postalCode" value={form.postalCode} onChange={handleChange} required placeholder="400001" className={inputClass} />
                </div>
            </div>

            <button type="submit" disabled={isPending} className="mt-8 w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-all duration-200">
                {isPending ? "Placing Order..." : "Confirm & Place Order"}
            </button>
        </form>
    );
}