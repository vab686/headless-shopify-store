export default function ProductSkeleton() {
    return (
        <div className="animate-pulse rounded-lg bg-white p-4 shadow">
            <div className="aspect-square rounded bg-slate-200" />
            <div className="mt-4 h-5 rounded bg-slate-200" />
            <div className="mt-2 h-5 w-24 rounded bg-slate-200" />
        </div>
    );
}