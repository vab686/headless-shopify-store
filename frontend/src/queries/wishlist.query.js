import {
    useMutation,
    useQuery,
    useQueryClient
} from "@tanstack/react-query";

import {
    getWishlist,
    addToWishlist,
    removeWishlistItem
} from "../services/wishlist.service";

export function useWishlist() {
    return useQuery({
        queryKey: ["wishlist"],
        queryFn: getWishlist
    });
}

export function useAddWishlist() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addToWishlist,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["wishlist"]
            });
        }
    });
}

export function useRemoveWishlist() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: removeWishlistItem,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["wishlist"]
            });
        }
    });
}