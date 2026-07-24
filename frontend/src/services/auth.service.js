import api from "../lib/axios";
import { API_ENDPOINTS } from "../lib/constants";

export const signup = async (data) => {
    const response = await api.post(
        API_ENDPOINTS.SIGNUP,
        data
    );

    return response.data.data;
};

export const login = async (data) => {
    const response = await api.post(
        API_ENDPOINTS.LOGIN,
        data
    );
    return response.data.data;
};

export const getProfile = async () => {
    const response = await api.get(
        API_ENDPOINTS.PROFILE
    );
    return response.data.data;
};