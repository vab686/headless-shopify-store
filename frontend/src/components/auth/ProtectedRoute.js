"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

export default function ProtectedRoute({
    children
}) {
    const router = useRouter();
    const {
        authenticated,
        loading
    } = useAuth();

    useEffect(() => {
        if (
            !loading &&
            !authenticated
        ) {
            router.replace("/login");
        }

    }, [
        authenticated,
        loading,
        router
    ]);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                Loading...
            </div>
        );
    }
    if (!authenticated) {
        return null;
    }
    return children;
}