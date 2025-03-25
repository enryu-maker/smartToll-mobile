import { View, Text, StatusBar, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { use, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import { useDispatch } from 'react-redux';
import { postVehicle } from '../../../../store/Actions/userActions';

export default function AddVehicle() {
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [vehicleModel, setVehicleModel] = useState('');
    const [vehicleMake, setvehicleMake] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle="dark-content" />
            <Header title="Add Vehicle" />

            <ScrollView className="p-4">
                <View className="mt-4">
                    <Text className='text-black text-lg font-PSemiBold'>Vehicle Number</Text>
                    <TextInput
                        placeholder='Enter vehicle number'
                        placeholderTextColor='#666'
                        className='border-b border-blue-500 w-full uppercase text-black text-base font-PRegular mt-2'
                        autoCapitalize="characters"
                        value={vehicleNumber}

                        onChangeText={(text) => setVehicleNumber(text)}
                    />
                </View>
                <View className="mt-6">
                    <Text className='text-black text-lg font-PSemiBold'>Vehicle Make</Text>
                    <TextInput
                        placeholder='Enter vehicle model'
                        placeholderTextColor='#666'
                        className='border-b border-blue-500 w-full text-black text-base font-PRegular mt-2'
                        value={vehicleMake}
                        onChangeText={(text) => setvehicleMake(text)}
                    />
                </View>
                <View className="mt-6">
                    <Text className='text-black text-lg font-PSemiBold'>Vehicle Model</Text>
                    <TextInput
                        placeholder='Enter vehicle model'
                        placeholderTextColor='#666'
                        className='border-b border-blue-500 w-full text-black text-base font-PRegular mt-2'
                        value={vehicleModel}
                        onChangeText={(text) => setVehicleModel(text)}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        const data = {
                            "vehicle_number": vehicleNumber,
                            "vehicle_make": vehicleMake,
                            "vehicle_model": vehicleModel
                        }
                        dispatch(postVehicle(data, setLoading))
                    }}
                    className="bg-blue-500 p-4 rounded-lg mt-8 items-center">
                    <Text className="text-white text-lg font-PSemiBold">Add Vehicle</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}
