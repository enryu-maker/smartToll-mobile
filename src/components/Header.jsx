import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Header({
    title,
    show,
    titleButt,
    onPress
}) {
    return (
        <View className='w-full h-[50px] flex-row px-4 justify-between items-center '>
            <Text className=' text-2xl font-PBold'>{title}</Text>
            {
                show && (
                    <TouchableOpacity
                        onPress={onPress}
                        className='border-blue-500 border px-6  rounded-md'>
                        <Text className='text-black font-PSemiBold text-lg text-center'>{titleButt}</Text>
                    </TouchableOpacity>
                )
            }
        </View>
    )
}  