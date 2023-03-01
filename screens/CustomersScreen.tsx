import { View, Text, SafeAreaView, ScrollView, Image, ActivityIndicator} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabStackParamList } from '../navigator/TabNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigator/RootNavigator'
import { Input } from '@rneui/base'

export type CustomerScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabStackParamList, "Customers">,
    NativeStackNavigationProp<RootStackParamList>
    > 

const CustomersScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation<CustomerScreenNavigationProp>()
    const [input, setInput] = useState<string>("")

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false
        })
    }, [])

    return (
        <ScrollView style={{backgroundColor: "#59C1CC"}}>
            <Image source={{ uri: "https://links.papareact.com/3jc" }} style={tw("w-full h-64")} />
            <Input placeholder='Search by Customer' value={input} onChangeText={setInput} containerStyle={tw("bg-white pt-5 pb-o px-10")} />
        </ScrollView>
    )
}

export default CustomersScreen