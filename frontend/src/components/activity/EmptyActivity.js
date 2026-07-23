export default function EmptyActivity() {
    return (
        <div className="rounded-lg border border-dashed p-10 text-center">
            <h2 className="text-2xl font-semibold">
                No Activity Found
            </h2>

            <p className="mt-3 text-gray-500">
                Your recent actions will appear here.
            </p>
        </div>
    );
}