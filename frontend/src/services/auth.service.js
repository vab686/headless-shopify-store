import api from "../lib/axios";
import { API_ENDPOINTS } from "../lib/constants";

export const loginWithGoogle = async (token) => {
    const response = await api.post(
        API_ENDPOINTS.LOGIN,
        {
            token
        }
    );
    return response.data.data;
};

export const getProfile = async () => {
    const response = await api.get(
        API_ENDPOINTS.PROFILE
    );
    return response.data.data;
};