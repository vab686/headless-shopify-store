import axios from "axios";
import { toast } from "react-hot-toast";
import { storage } from "../utils/storage";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use(config => {
    const token = storage.getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use(
    response => response,
    error => {
        const message =
            error.response?.data?.message ||
            "Something went wrong";

        toast.error(message);

        if (error.response?.status === 401) {
            storage.removeToken();

            if (typeof window !== "undefined") {
                window.location.href = "/login";
            }
        }

        return Promise.reject(error);
    }
);

export default api;