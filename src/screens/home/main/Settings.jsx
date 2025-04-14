import { View, Text, StatusBar, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import { IMAGE } from '../../../assets/image';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, LogoutAction } from '../../../../store/Actions/AuthAction';
import { getUserWallet } from '../../../../store/Actions/userActions';

export default function Settings({
    navigation
}) {
    const dispatch = useDispatch();
    const [loading, setLoading] = React.useState(false)
    const profile = useSelector(state => state.reducer.profile);
    console.log(profile)
    React.useEffect(() => {
        dispatch(getProfile(setLoading))
        dispatch(getUserWallet(setLoading))
    }, [dispatch])
    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle="dark-content" />
            <Header title="Settings" />

            <ScrollView className="p-4">
                {/* Profile Section */}
                <View className="flex-row items-center p-4 border-b border-gray-300">
                    <Image
                        source={IMAGE.user}
                        className="w-16 h-16 rounded-full"
                    />
                    <View className="ml-4">
                        <Text className="text-black text-lg font-PSemiBold">{profile?.name}</Text>
                        <Text className="text-gray-500 text-base">
                            {profile?.phone_number}
                        </Text>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Wallet')}
                    className="p-4 border-b border-gray-300">
                    <Text className="text-black text-lg font-PSemiBold">Wallet</Text>
                </TouchableOpacity>
                {/* button to open phone app and call number */}
                <TouchableOpacity
                    onPress={() => Linking.openURL(`tel:${profile?.phone_number}`)}
                    className="p-4 border-b border-gray-300 bg bg-red-500">
                    <Text className="text-white text-lg font-PSemiBold">Emergency</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        dispatch(LogoutAction())
                    }}
                    className="p-4 border-b border-gray-300">
                    <Text className="text-red-500 text-lg font-PSemiBold">Logout</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}
