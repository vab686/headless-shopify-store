import api from "../lib/axios";
import { API_ENDPOINTS } from "../lib/constants";

export const getProducts = async (params = {}) => {
    const response = await api.get(API_ENDPOINTS.PRODUCTS, {
        params
    });

    return response.data.data;
};

export const getProduct = async (handle) => {
    const response = await api.get(
        `${API_ENDPOINTS.PRODUCTS}/${handle}`
    );

    return response.data.data;
};