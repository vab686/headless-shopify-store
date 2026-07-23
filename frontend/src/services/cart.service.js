import api from "../lib/axios";
import { API_ENDPOINTS } from "../lib/constants";

export const getCart = async () => {
    const response = await api.get(API_ENDPOINTS.CART);
    return response.data.data;
};

export const addToCart = async (payload) => {
    const response = await api.post(API_ENDPOINTS.CART, payload);
    return response.data.data;
};

export const updateCart = async (variantId, quantity) => {
    const response = await api.put(
        `${API_ENDPOINTS.CART}/${variantId}`,
        {
            quantity
        }
    );

    return response.data.data;
};

export const removeCartItem = async (variantId) => {
    await api.delete(
        `${API_ENDPOINTS.CART}/${variantId}`
    );
};

export const clearCart = async () => {
    await api.delete(API_ENDPOINTS.CART);
};