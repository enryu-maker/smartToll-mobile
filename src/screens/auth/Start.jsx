import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import React from 'react';
import { IMAGE } from '../../assets/image';

export default function Start({
    navigation
}) {
    return (
        <View

            className='flex-1 items-start px-4 py-2 bg-white justify-between'>
            <Image
                source={IMAGE.toll}
                className='w-full'
                resizeMode='contain'
            // tintColor={'#fff'}
            />
            {/* Content Container */}
            <View className='w-full pb-5   justify-center items-start'>
                <Text className='text-black text-3xl font-PSemiBold text-start'>
                    smartToll
                </Text>
                <Text className='text-black text-xl font-PSemiBold text-start'>
                    Toll Management App
                </Text>

                {/* Buttons */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    className='bg-blue-500 px-6 py-3 mt-6 rounded-md w-full'>
                    <Text className='text-white font-PSemiBold text-xl text-center'>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
                    className='border-blue-500 border px-6 py-3 mt-4 rounded-md w-full'>
                    <Text className='text-black font-PSemiBold text-xl text-center'>Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
