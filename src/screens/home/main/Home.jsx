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
            <View className="w-full bg-gray-100 justify-around py-4 items-center">
                <View className="w-4/5 flex-row justify-between items-center">
                    <Text className="text-xl font-PBold text-black py-2">Total Tolls</Text>
                    <Text className="text-xl justify-center items-center text-center font-PBold text-blue-500  bg-white rounded-full p-4">{tolls?.length ? tolls?.length : 0}</Text>
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
                            {item?.time}
                        </Text>
                        <Text className="text-lg font-PBold text-black">{item?.vehicle_number}</Text>
                        <Text className="text-lg font-PBold text-black">Rs. {item?.amount}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}