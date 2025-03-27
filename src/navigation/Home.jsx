import React, { Component } from 'react'
import { Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab from './Tabs';
import AddVehicle from '../screens/home/add/AddVehicle';
import { getVehicle } from '../../store/Actions/userActions';
import { useDispatch } from 'react-redux';
import Topup from '../screens/home/main/Topup';
import Wallet from '../screens/home/main/Wallet';
import Otp from '../screens/auth/Otp';
const Stack = createNativeStackNavigator()
export default class HomeNav extends Component {

    render() {

        return (
            <>
                <Stack.Navigator screenOptions={({ navigation }) => {
                    return {
                        detachPreviousScreen: !navigation.isFocused(),
                        headerShown: false,
                        animation: Platform.OS == "ios" ? "default" : "slide_from_right",
                        onTransitionStart: () => Keyboard.dismiss(),
                    }
                }}
                    initialRouteName={'Tab'} >
                    <Stack.Screen name='Tab' component={Tab} />
                    <Stack.Screen name='AddVehicle' component={AddVehicle} />
                    <Stack.Screen name='Wallet' component={Wallet} />
                    <Stack.Screen name='Topup' component={Topup} />
                </Stack.Navigator>
            </>
        )
    }
}
