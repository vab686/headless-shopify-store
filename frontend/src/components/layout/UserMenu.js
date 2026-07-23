"use client";

import useAuth from "../../hooks/useAuth";

export default function UserMenu() {
    const { user, logout } = useAuth();

    return (
        <div className="flex items-center gap-4">
            <span className="text-sm font-medium">
                {user?.name}
            </span>
            <button
                onClick={logout}
                className="rounded bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600"
            >
                Logout
            </button>
        </div>
    );
}