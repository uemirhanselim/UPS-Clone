import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist'

const CustomersScreen = () => {
    const tw = useTailwind();

    return (
        <SafeAreaView style={{ padding: 30 }}>
            <Text style={tw("text-yellow-600")}>Customers Screen</Text>
        </SafeAreaView>
    )
}

export default CustomersScreen