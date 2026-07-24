"use client";

import { useState } from "react";

export default function LoginForm({
    onSubmit,
    loading
}) {

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        setForm((previous) => ({
            ...previous,
            [event.target.name]:
                event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({
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
                placeholder="Password"
                autoComplete="current-password"
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
                    ? "Signing In..."
                    : "Login"}
            </button>
        </form>
    );

}