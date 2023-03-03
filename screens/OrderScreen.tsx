import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { RootStackParamList } from '../navigator/RootNavigator';
import DeliveryCard from '../components/DeliveryCard';

type OrderScreenRouteProp = RouteProp<RootStackParamList, "Order">;

export type OrderScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabStackParamList, "Orders">,
    NativeStackNavigationProp<RootStackParamList>
>

const OrderScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation<OrderScreenNavigationProp>();
    const { params: { order } } = useRoute<OrderScreenRouteProp>();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: order.trackingItems.customer.name,
            headerTitleStyle: { color: "black" },
            headerBackTitle: "Deliveries",
            headerTintColor: "#EB6A7C",
        })


    }, [order])
    return (
        <View style={tw('-mt-2')}>
            <DeliveryCard order={order} fullWidth/>
        </View>
    )
}

export default OrderScreen