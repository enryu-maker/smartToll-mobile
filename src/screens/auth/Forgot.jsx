import { View, Text, ImageBackground, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native'
import React from 'react'
import { IMAGE } from '../../assets/image'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch } from 'react-redux';
import { resetPassword, sendCode, verifyCode } from '../../../store/Actions/AuthAction';
import Toast from 'react-native-toast-message';

export default function Forgot({
    navigation
}) {
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState('');
    const [code, setCode] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [currentStep, setCurrentStep] = React.useState(1);
    return (
        <ImageBackground
            source={IMAGE.bg}
            resizeMode='cover'
            className='flex-1 w-full  bg-primary justify-between'
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
                    <Text className='text-white text-4xl font-Bold'>
                        Forgot Password{'\n'}
                        <Text className='text-white text-2xl font-Regular'>
                            Enter your email to Reset!
                        </Text>
                    </Text>
                </View>

                {/* Form Section */}
                <View className='w-full px-4 bg-white h-[65%] '>
                    <Image
                        source={IMAGE.logo}
                        className='h-[80px] w-[250px] '
                        resizeMode='contain'
                    />
                    {/* Email Input */}
                    {
                        currentStep === 1 && (
                            <View className="mt-4 justify-center items-center">
                                <Text className='text-black text-lg self-start font-SemiBold'>Email</Text>
                                <TextInput
                                    placeholder='Enter your email'
                                    placeholderTextColor='#666'
                                    className='border-b border-primary w-full text-black text-base font-Regular mt-2'
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    value={email}
                                    onChangeText={(text) => setEmail(text)}
                                />
                                <TouchableOpacity
                                    onPress={() => {
                                        if (email === '') {
                                            Toast.show({
                                                type: 'error',
                                                text1: 'Please enter your email',
                                                visibilityTime: 2000,
                                                autoHide: true,
                                                topOffset: 50,
                                                bottomOffset: 40,
                                            });
                                        }
                                        else {
                                            dispatch(sendCode(email, setLoading, setCurrentStep))
                                        }
                                    }}
                                    disabled={loading}
                                    className='bg-primary px-6 py-2 mt-6 rounded-md  w-full'>
                                    {
                                        loading ?
                                            <ActivityIndicator size="small" color="#fff" />
                                            :
                                            <Text className='text-white font-SemiBold text-xl text-center'>Send Code</Text>
                                    }
                                </TouchableOpacity>
                            </View>
                        )
                    }
                    {
                        currentStep === 2 && (
                            <View className="mt-4 justify-center items-center">
                                <Text className='text-black text-lg self-start font-SemiBold'>Code</Text>
                                <TextInput
                                    placeholder='Enter your code'
                                    placeholderTextColor='#666'
                                    className='border-b border-primary w-full text-black text-base font-Regular mt-2'
                                    keyboardType="numeric"
                                    autoCapitalize="none"
                                    value={code}
                                    onChangeText={(text) => setCode(text)}
                                />
                                <View className='flex-row justify-between w-full items-center mt-6'>
                                    <TouchableOpacity
                                        onPress={() => setCurrentStep(1)}
                                        className='bg-primary px-6 py-2  rounded-md '>
                                        <Text className='text-white font-SemiBold text-xl text-center'>Back</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            if (code === '') {
                                                Toast.show({
                                                    type: 'error',
                                                    text1: 'Please enter your code',
                                                    visibilityTime: 2000,
                                                    autoHide: true,
                                                    topOffset: 50,
                                                    bottomOffset: 40,
                                                });
                                            }
                                            else {
                                                dispatch(verifyCode(code, setLoading, setCurrentStep))
                                            }
                                        }}
                                        className='bg-primary px-6 py-2  rounded-md '>
                                        {
                                            loading ?
                                                <ActivityIndicator size="small" color="#fff" />
                                                :
                                                <Text className='text-white font-SemiBold text-xl text-center'>Verify Code </Text>
                                        }
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }

                    {
                        currentStep === 3 && (
                            <View className="mt-4 justify-center items-center">
                                <Text className='text-black text-lg self-start font-SemiBold'>New Password</Text>
                                <TextInput
                                    placeholder='Enter your new Password'
                                    placeholderTextColor='#666'
                                    className='border-b border-primary w-full text-black text-base font-Regular mt-2'
                                    keyboardType="ascii-capable"
                                    autoCapitalize="none"
                                    value={password}
                                    onChangeText={(text) => setPassword(text)}
                                />
                                <View className='flex-row justify-between w-full items-center mt-6'>
                                    <TouchableOpacity
                                        onPress={() => setCurrentStep(2)}
                                        className='bg-primary px-6 py-2  rounded-md '>
                                        <Text className='text-white font-SemiBold text-xl text-center'>Back</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            if (password === '') {
                                                Toast.show({
                                                    type: 'error',
                                                    text1: 'Please enter your password',
                                                    visibilityTime: 2000,
                                                    autoHide: true,
                                                    topOffset: 50,
                                                    bottomOffset: 40,
                                                });
                                            }
                                            else {
                                                dispatch(resetPassword(password, code, setLoading))
                                            }
                                        }}
                                        className='bg-primary px-6 py-2  rounded-md '>
                                        {
                                            loading ?
                                                <ActivityIndicator size="small" color="#fff" />
                                                :
                                                <Text className='text-white font-SemiBold text-xl text-center'>Update</Text>
                                        }
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }

                </View>
            </KeyboardAwareScrollView>
        </ImageBackground>
    )
}