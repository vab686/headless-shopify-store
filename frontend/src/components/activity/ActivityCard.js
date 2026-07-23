export default function ActivityCard({ activity }) {
    return (
        <div className="rounded-lg border bg-white p-5 shadow">
            <div className="flex items-center justify-between">
                <h2 className="font-semibold">
                    {activity.action}
                </h2>

                <span className="text-sm text-gray-500">
                    {new Date(activity.createdAt).toLocaleString()}
                </span>
            </div>

            <p className="mt-3 text-gray-600">
                {activity.description}
            </p>
        </div>
    );
}