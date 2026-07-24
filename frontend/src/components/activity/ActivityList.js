import ActivityCard from "./ActivityCard";

export default function ActivityList({ activities }) {
    return (
        <div className="space-y-4">
            {activities.map((activity, index) => (
                <ActivityCard
                    key={activity._id ?? activity.id ?? index}
                    activity={activity}
                />
            ))}
        </div>
    );
}
