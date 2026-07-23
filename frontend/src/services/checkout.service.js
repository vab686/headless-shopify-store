import api from "../lib/axios";
import { API_ENDPOINTS } from "../lib/constants";

export const checkout = async (payload) => {
    const response = await api.post(API_ENDPOINTS.CHECKOUT, payload);
    return response.data.data;
};

export const getOrders = async () => {
    const response = await api.get(API_ENDPOINTS.ORDERS);
    return response.data.data;
};

export const getOrder = async (id) => {
    const response = await api.get(`${API_ENDPOINTS.ORDERS}/${id}`);
    return response.data.data;
};