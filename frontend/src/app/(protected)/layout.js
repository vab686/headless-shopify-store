"use client";

import ProtectedRoute from "../../components/auth/ProtectedRoute";
import Navbar from "../../components/layout/Navbar";

export default function ProtectedLayout({ children }) {
    return (
        <ProtectedRoute>
            <Navbar />
            {children}
        </ProtectedRoute>
    );
}