import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { IMAGE } from '../../../assets/image'
import { getUserWallet, topupWallet } from '../../../../store/Actions/userActions'
export default function Topup({
    navigation
}) {
    const dispatch = useDispatch()
    const [amount, setAmount] = React.useState(0)
    const [loading, setLoading] = React.useState(false)
    const handleTopUp = () => {
        if (amount < 100 || isNaN(amount)) {
            alert("Please enter a valid amount (minimum ₹100)");
            return;
        }
        dispatch(topupWallet(amount, setLoading, navigation));
        dispatch(getUserWallet(setLoading));
    };
    return (
        <SafeAreaView className='flex-1 mt-5 bg-white'>
            <StatusBar backgroundColor={"#fff"} />
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className=" p-2 h-10 w-10 rounded-full"
            >
                <Image source={IMAGE.back} tintColor={"#000"} className=' text-blue-500 h-8 w-8' />
            </TouchableOpacity>
            <View className='flex-1 h-full w-full  justify-start items-start px-4'>
                <Text className="text-blue-500 text-2xl py-3 text-start w-[88%] font-PBold">
                    Top Up Wallet
                </Text>
                <View className='w-full h-[88%]  p-4 space-y-4 justify-center items-center  self-center rounded-xl'>
                    <Text className="text-black text-xl py-3 text-start w-full font-PBold">
                        Add Money
                    </Text>
                    <TextInput
                        className={`bg-white border text-lg h-[45px] text-start font-PBold px-4 py-2 w-full `}
                        placeholder="1234"
                        value={amount}
                        onChangeText={(text) => setAmount(text)}
                        keyboardType="numeric"
                        placeholderTextColor="#8b8b8b"
                    />
                    <TouchableOpacity
                        onPress={handleTopUp}
                        className='bg-blue-500 w-full h-[45px] justify-center items-center'>
                        {
                            loading ? (
                                <ActivityIndicator size="small" color={"#fff"} />
                            ) : (
                                <Text className="text-white text-lg font-PBold py-2 text-center">
                                    Top Up
                                </Text>
                            )
                        }
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}