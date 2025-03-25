import { View, Text, Image, Platform, Alert } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IMAGE } from '../assets/image';
import Settings from '../screens/home/main/Settings';
import Home from '../screens/home/main/Home';
import Vehicle from '../screens/home/main/Vehicle';

const BottomTab = createBottomTabNavigator();

export default function Tab() {
    return (
        <BottomTab.Navigator
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = IMAGE.home
                    }
                    else if (route.name === 'Vehicle') {
                        iconName = IMAGE.scooter
                    }
                    else if (route.name === 'Settings') {
                        iconName = IMAGE.slider
                    }

                    return (
                        <View className="justify-center items-center mt-12 self-center w-[90px]">
                            <View
                                className={`rounded-full h-[50px] items-center  font-Regular justify-center w-[50px] ${focused ? 'bg-white' : 'bg-transparent'}`}
                            >
                                <Image
                                    source={iconName}
                                    resizeMode="contain"
                                    className="h-[30px] w-[30px]"
                                    style={{
                                        tintColor: focused ? '#3b82f6' : '#000',
                                    }}
                                    accessible
                                    accessibilityLabel={`${route.name} tab`}
                                />
                            </View>
                        </View>
                    );
                },
                tabBarStyle: {
                    backgroundColor: '#3b82f6',
                    height: Platform.OS === 'ios' ? 100 : 100,
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    width: "100%"
                },
            })}
        >
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{ tabBarAccessibilityLabel: 'Herd Tab' }}
            />
            <BottomTab.Screen
                name="Vehicle"
                component={Vehicle}
                options={{ tabBarAccessibilityLabel: 'Herd Tab' }}
            />
            <BottomTab.Screen
                name="Settings"
                component={Settings}
                options={{ tabBarAccessibilityLabel: 'Herd Tab' }}
            />
        </BottomTab.Navigator>
    );
}
