"use client";

import { useState } from "react";

export default function SignupForm({
    onSubmit,
    loading
}) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        setForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({
            name: form.name.trim(),
            email: form.email.trim(),
            password: form.password
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4"
        >
            <input
                type="text"
                name="name"
                placeholder="Full Name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded border p-3"
                required
            />

            <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded border p-3"
                required
            />

            <input
                type="password"
                name="password"
                autoComplete="new-password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full rounded border p-3"
                required
            />

            <button
                type="submit"
                disabled={loading}
                className="w-full rounded bg-black p-3 text-white"
            >
                {loading
                    ? "Creating Account..."
                    : "Sign Up"}
            </button>
        </form>
    );
}