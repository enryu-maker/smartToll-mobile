import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { IMAGE } from '../../../assets/image';

export default function Wallet({
    navigation
}) {
    const wallet = useSelector((state) => state.reducer.wallet);
    console.log(wallet)
    return (
        <SafeAreaView className='flex-1 bg-white mt-5'>
            <StatusBar backgroundColor={"#fff"} />
            <TouchableOpacity
                onPress={() => navigation.goBack()}

                className=" p-2 h-10 w-10 rounded-full"
            >
                <Image source={IMAGE.back} tintColor={"#000"} className=' text-blue-500 h-8 w-8' />
            </TouchableOpacity>
            <View className='flex-1 h-full w-full  justify-start items-start px-4'>
                <Text className="text-blue-500 text-2xl py-3 text-start w-[88%] font-PBold">
                    Wallet
                </Text>
                <View className='w-full bg-blue-500 p-4  self-center rounded-xl'>
                    <Text className=' text-white text-xl font-PRegular'>
                        Wallet ID : {wallet?.wallet_number}
                    </Text>
                    <Text className=' text-white text-xl font-PRegular'>
                        Available Balance : {wallet?.balance}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Topup')
                        }}
                        className=' bg-white w-[100px] mt-3 rounded-lg flex justify-center items-center'>
                        <Text className=' text-blue-500 text-lg font-PRegular'>
                            + Top-Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}