import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { GET_ORDERS } from '../graphql/queries'

function useCustomerOrders(userId: String) {
    const { loading, error, data } = useQuery(GET_ORDERS)
    const [orders, setOrders] = useState<Order[]>([])

    useEffect(() => {
        if (!data) return;

        const orders: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
            carrier: value.carrier,
            createdAt: value.createdAt,
            shippingCost: value.shippingCost,
            trackingId: value.trackingId,
            Address: value.Address,
            Lng: value.Lng,
            Lat: value.Lat,
            City: value.City
        }));

        const customerOrders = orders.filter(order => order.trackingItems.customer_id === userId);

        setOrders(customerOrders);
    }, [data, userId])

    return {loading, error, orders};
}

export default useCustomerOrders