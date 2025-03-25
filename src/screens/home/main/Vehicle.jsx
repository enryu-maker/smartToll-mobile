import { View, Text, StatusBar, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import { useSelector } from 'react-redux'

export default function Vehicle({
    navigation
}) {
    const vehicle_data = useSelector(state => state.reducer.vehicle)
    return (
        <SafeAreaView className="flex-1 bg-white items-center">
            <StatusBar barStyle="dark-content" />
            <Header title="Vehicle" show={true} titleButt={"Add +"}
                onPress={() => navigation.navigate('AddVehicle')}
            />
            <FlatList
                data={vehicle_data}
                renderItem={({ item }) => (
                    <View className="w-full flex-row justify-between bg-gray-100 my-2 h-[80px] items-center px-4 py-2">
                        <Text className="text-lg font-PSemiBold text-black">{item?.id}.</Text>
                        <View className="flex-col items-start">
                            <Text className="text-lg font-PSemiBold text-black">{item?.vehicle_make}</Text>
                            <Text className="text-lg font-PSemiBold text-black">{item?.vehicle_model}</Text>
                        </View>
                        <Text className="text-lg font-PSemiBold text-black">{item?.vehicle_number}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}