"use client";

import ErrorMessage from "../components/common/ErrorMessage";

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body>
                <div className="mx-auto mt-20 max-w-xl">
                    <ErrorMessage
                        message={error.message}
                        retry={reset}
                    />
                </div>
            </body>
        </html>
    );
}