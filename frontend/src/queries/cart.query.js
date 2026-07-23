import {
    useMutation,
    useQuery,
    useQueryClient
} from "@tanstack/react-query";

import {
    getCart,
    addToCart,
    updateCart,
    removeCartItem,
    clearCart
} from "../services/cart.service";

export function useCart() {
    return useQuery({
        queryKey: ["cart"],
        queryFn: getCart
    });
}

export function useAddToCart() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addToCart,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart"]
            });
        }
    });
}

export function useUpdateCart() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ variantId, quantity }) =>
            updateCart(variantId, quantity),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart"]
            });
        }
    });
}

export function useRemoveCart() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: removeCartItem,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart"]
            });
        }
    });
}

export function useClearCart() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: clearCart,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart"]
            });
        }
    });
}