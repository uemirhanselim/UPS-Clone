import React, { useEffect, useState } from 'react'
import {useQuery} from '@apollo/client'
import { GET_ORDERS } from '../graphql/queries'

const useOrders = () => {
    const { loading, error, data } = useQuery(GET_ORDERS)
    const [orders, setOrders] = useState<Order[]>([])

    useEffect(() => {
        if (!data) return;

        const order: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
            carrier: value.carrier,
            createdAt: value.createdAt,
            shippingCost: value.shippingCost,
            trackingId: value.trackingId,
            Address: value.Address,
            Lng: value.Lng,
            Lat: value.Lat,
            City: value.City
        }));

        setOrders(order)
    })

    return { loading, error, orders };
}

export default useOrders