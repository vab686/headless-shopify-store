export default function PageContainer({ children, className = "" }) {
    return (
        <main className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 ${className}`}>
            {children}
        </main>
    );
}