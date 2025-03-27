import { View, Text, TouchableOpacity, Image, ImageBackground, TextInput, ActivityIndicator } from 'react-native';
import React from 'react';
import { IMAGE } from '../../assets/image';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import { UserLogin, UserRegister } from '../../../store/Actions/AuthAction';

export default function Register({ navigation }) {
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
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
                        Getting Started{'\n'}
                        <Text className='text-white text-2xl font-PRegular'>
                            Create an account to continue!
                        </Text>
                    </Text>
                </View>

                {/* Form Section */}

                <View className='w-full px-4 bg-white h-[65%] self-end'>
                    {/* Email Input */}
                    <View className="mt-10">
                        <Text className='text-black text-lg font-PSemiBold'>Phone Number</Text>
                        <TextInput
                            placeholder='Enter your phone number'
                            placeholderTextColor='#666'
                            className='border-b border-blue-500 w-full text-black text-base font-PRegular mt-2'
                            keyboardType="number-pad"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                    <View className="mt-4">
                        <Text className='text-black text-lg font-PSemiBold'>Name</Text>
                        <TextInput
                            placeholder='Enter your Name'
                            placeholderTextColor='#666'
                            className='border-b border-blue-500 w-full text-black text-base font-PRegular mt-2'
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />
                    </View>

                    {/* Login Button */}
                    <TouchableOpacity
                        disabled={loading}
                        onPress={() => {
                            dispatch(UserRegister(name, email, setLoading, navigation));
                        }}
                        className='bg-blue-500 px-6 py-3 mt-6 rounded-md w-full'
                    >
                        {
                            loading ?
                                <ActivityIndicator className=' text-xl' size="small" color="#fff" />
                                :
                                <Text className='text-white font-PSemiBold text-xl text-center'>Register</Text>
                        }
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </ImageBackground>
    );
}
