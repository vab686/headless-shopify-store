import api from "../lib/axios";
import { API_ENDPOINTS } from "../lib/constants";

export const getWishlist = async () => {
    const response = await api.get(API_ENDPOINTS.WISHLIST);
    return response.data.data;
};

export const addToWishlist = async (payload) => {
    const response = await api.post(API_ENDPOINTS.WISHLIST, payload);
    return response.data.data;
};

export const removeWishlistItem = async (productId) => {
    await api.delete(`${API_ENDPOINTS.WISHLIST}/${encodeURIComponent(productId)}`);
};