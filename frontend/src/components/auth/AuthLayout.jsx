"use client";

export default function AuthLayout({
    title,
    children,
    footer
}) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
                <h1 className="mb-6 text-center text-3xl font-bold">
                    {title}
                </h1>

                {children}

                {footer && (
                    <div className="mt-6 text-center">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
}