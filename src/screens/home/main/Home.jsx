import { View, Text, StatusBar, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import { useDispatch, useSelector } from 'react-redux';
import { getTolls, getUserWallet, getVehicle } from '../../../../store/Actions/userActions';
import { getProfile } from '../../../../store/Actions/AuthAction';

export default function Home() {
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        dispatch(getProfile(setLoading))
        dispatch(getUserWallet(setLoading))
        dispatch(getTolls(setLoading))
        dispatch(getVehicle(setLoading))
    }, [dispatch])
    const tolls = useSelector(state => state.reducer.tolls)
    console.log(tolls)
    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle="dark-content" />
            <Header title="Home" />
            {/* Dashboard to show details */}
            <View className="w-full bg-gray-100 h-1/4 justify-around py-4 items-center">
                <View className="w-full flex-row justify-around items-center">
                    <View className="flex-col justify-center items-center">
                        <Text className="text-2xl font-PBold text-blue-500 py-2 bg-white rounded-full px-3">
                            0
                        </Text>
                        <Text className="text-lg font-PBold text-black py-2">Paid Tolls</Text>
                    </View>
                    <View className="flex-col justify-center items-center">
                        <Text className="text-2xl font-PBold text-blue-500 py-2 bg-white rounded-full px-4">
                            {tolls?.length}
                        </Text>
                        <Text className="text-lg  font-PBold text-black py-2">Unpaid Tolls</Text>
                    </View>
                </View>
                <View className="w-11/12 border-dashed border-white my-2" />
                <View className="w-4/5 flex-row justify-between items-center">
                    <Text className="text-xl font-PBold text-black py-2">Total Tolls</Text>
                    <Text className="text-2xl font-PBold text-blue-500 py-2 bg-white rounded-full px-3">{tolls.length}</Text>
                </View>
            </View>
            <Text className="px-4 text-2xl text-left font-PBold  text-black py-3">
                Recent Tolls
            </Text>
            <FlatList
                data={tolls}
                renderItem={({ item }) => (
                    <View className="w-full flex-row justify-between items-center px-4 py-2">
                        <Text className="text-lg font-PBold text-black">
                            {new Date(item?.time).toLocaleDateString()}
                        </Text>
                        <Text className="text-lg font-PBold text-black">{item?.vehicle_number}</Text>
                        <Text className="text-lg font-PBold text-black">Rs. {item?.amount}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}