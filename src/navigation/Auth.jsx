import React, { Component } from 'react'
import { Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import Start from '../screens/auth/Start';
import Forgot from '../screens/auth/Forgot';
import Otp from '../screens/auth/Otp';
const Stack = createNativeStackNavigator()
export default class AuthNav extends Component {
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
                    initialRouteName={'Start'} >
                    <Stack.Screen name='Start' component={Start} />
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Register' component={Register} />
                    <Stack.Screen name='Otp' component={Otp} />
                    <Stack.Screen name='Forget' component={Forgot} />
                </Stack.Navigator>
            </>
        )
    }
}
