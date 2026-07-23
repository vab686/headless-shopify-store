"use client";

import { useRouter } from "next/navigation";

import {
    useEffect
} from "react";

import useAuth from "../../hooks/useAuth";

export default function ProtectedRoute({ children }) {

    const router = useRouter();

    const {
        authenticated,
        loading
    } = useAuth();

    useEffect(() => {

        if (!loading && !authenticated) {

            router.replace("/login");

        }

    }, [
        authenticated,
        loading,
        router
    ]);

    if (loading) {

        return (
            <p>
                Loading...
            </p>
        );

    }

    if (!authenticated) {

        return null;

    }

    return children;

}