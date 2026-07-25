"use client";

import Loader from "../../../../components/layout/Loader";
import PageContainer from "../../../../components/layout/PageContainer";
import ActivitySummary from "../../../../components/activity/ActivitySummary";
import ActivityList from "../../../../components/activity/ActivityList";
import EmptyActivity from "../../../../components/activity/EmptyActivity";
import {
    useActivityHistory,
    useActivitySummary
} from "../../../../queries/activity.query";

export default function ActivityPage() {
    const history = useActivityHistory();
    const summary = useActivitySummary();

    if (history.isLoading || summary.isLoading) {
        return <Loader />;
    }

    return (
        <PageContainer>
            <h1 className="mb-8 text-3xl font-bold">
                Activity Dashboard
            </h1>

            <ActivitySummary summary={summary.data} />

            <div className="mt-8">
                {!history.data?.length ? (
                    <EmptyActivity />
                ) : (
                    <ActivityList activities={history.data} />
                )}
            </div>
        </PageContainer>
    );
}
