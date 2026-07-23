import { useQuery } from "@tanstack/react-query";
import {
    getActivityHistory,
    getActivitySummary
} from "../services/activity.service";

export function useActivityHistory() {
    return useQuery({
        queryKey: ["activity-history"],
        queryFn: getActivityHistory
    });
}

export function useActivitySummary() {
    return useQuery({
        queryKey: ["activity-summary"],
        queryFn: getActivitySummary
    });
}