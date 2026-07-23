import api from "../lib/axios";
import { API_ENDPOINTS } from "../lib/constants";

export const getActivityHistory = async () => {
    const response = await api.get(API_ENDPOINTS.ACTIVITY_HISTORY);
    return response.data.data;
};

export const getActivitySummary = async () => {
    const response = await api.get(API_ENDPOINTS.ACTIVITY_SUMMARY);
    return response.data.data;
};