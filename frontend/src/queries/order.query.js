import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { checkout, getOrders, getOrder } from "../services/checkout.service";

export function useOrders() {
    return useQuery({
        queryKey: ["orders"],
        queryFn: getOrders
    });
}

export function useOrder(id) {
    return useQuery({
        queryKey: ["order", id],
        queryFn: () => getOrder(id),
        enabled: !!id
    });
}

export function useCheckout() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: checkout,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
            queryClient.invalidateQueries({ queryKey: ["orders"] });
        }
    });
}