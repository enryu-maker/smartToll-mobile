import { View, Text, TouchableOpacity, Image, ImageBackground, TextInput, ActivityIndicator } from 'react-native';
import React from 'react';
import { IMAGE } from '../../assets/image';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import { UserLogin } from '../../../store/Actions/AuthAction';

export default function Login({ navigation }) {
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);


    return (
        <ImageBackground
            // source={IMAGE.bg}
            resizeMode='cover'
            tintColor={'#fff'}
            className='flex-1 w-full  bg-blue-500 justify-between'
        >
            <KeyboardAwareScrollView
                enableOnAndroid={true}
                enableAutomaticScroll
                keyboardShouldPersistTaps='handled'
                showsVerticalScrollIndicator={false}
                className='w-full '
                contentContainerStyle={{ flexGrow: 1 }}
            >
                {/* Header Section */}
                <View className='w-full px-4 py-5 h-[35%] justify-between items-start'>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="p-2 mt-5"
                    >
                        <Image
                            source={IMAGE.back}
                            className='w-8 h-8'
                            resizeMode='contain'
                            tintColor={'#fff'}
                        />
                    </TouchableOpacity>
                    <Text className='text-white text-4xl font-PBold'>
                        Let's Sign You In{'\n'}
                        <Text className='text-white text-2xl font-PRegular'>
                            Login to continue!
                        </Text>
                    </Text>
                </View>

                {/* Form Section */}

                <View className='w-full px-4 bg-white h-[65%] self-end'>
                    {/* Email Input */}
                    <View className="mt-10">
                        <Text className='text-black text-lg font-PSemiBold'>Email</Text>
                        <TextInput
                            placeholder='Enter your email'
                            placeholderTextColor='#666'
                            className='border-b border-blue-500 w-full text-black text-base font-PRegular mt-2'
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>

                    {/* Password Input */}
                    <View className="mt-4">
                        <Text className='text-black text-lg font-PSemiBold'>Password</Text>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor='#666'
                            className='border-b border-blue-500 w-full text-black text-base font-PRegular mt-2'
                            secureTextEntry
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>

                    {/* Login Button */}
                    <TouchableOpacity
                        disabled={loading}
                        onPress={() => {
                            dispatch(UserLogin(email, password, setLoading, navigation));
                        }}
                        className='bg-blue-500 px-6 py-3 mt-6 rounded-md w-full'
                    >
                        {
                            loading ?
                                <ActivityIndicator className=' text-xl' size="small" color="#fff" />
                                :
                                <Text className='text-white font-PSemiBold text-xl text-center'>Login</Text>
                        }
                    </TouchableOpacity>

                    {/* make ------or-------- */}
                    <View className='flex flex-row items-center justify-between mt-6'>
                        <View className='w-1/3 border-b border-gray-400'></View>
                        <Text className='text-gray-400 font-PBold text-xl mx-2'>or</Text>
                        <View className='w-1/3 border-b border-gray-400'></View>
                    </View>

                    {/* Signup */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}
                        className='bg-gray-200 px-6 py-3 mt-6 rounded-md w-full'
                    >
                        <Text className='text-black font-PSemiBold text-xl text-center'>Register</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </ImageBackground>
    );
}
