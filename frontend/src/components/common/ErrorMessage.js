"use client";

export default function ErrorMessage({ message, retry }) {
    return (
        <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
            <h2 className="text-xl font-semibold text-red-600">
                Something went wrong
            </h2>

            <p className="mt-3 text-gray-600">
                {message}
            </p>

            {retry && (
                <button
                    onClick={retry}
                    className="mt-6 rounded bg-red-600 px-5 py-2 text-white"
                >
                    Retry
                </button>
            )}
        </div>
    );
}