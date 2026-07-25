"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton({ label = "Back" }) {
    const router = useRouter();

    return (
        <button 
            onClick={() => router.back()} 
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors mb-6"
        >
            <ArrowLeft className="h-4 w-4" />
            {label}
        </button>
    );
}
