import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, TextInput, ActivityIndicator, Alert } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { IMAGE } from '../../../assets/image';
import { getUserWallet, topupWallet } from '../../../../store/Actions/userActions';
import RazorpayCheckout from 'react-native-razorpay';

export default function Topup({ navigation }) {
    const dispatch = useDispatch();
    const [amount, setAmount] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleTopUp = () => {
        const numericAmount = parseFloat(amount);

        if (isNaN(numericAmount) || numericAmount < 100) {
            alert("Please enter a valid amount (minimum ₹100)");
            return;
        }

        const options = {
            description: 'Flexipass Wallet Top-Up',
            currency: 'INR',
            key: 'rzp_test_Iw3WYZmgXSADsj', // Replace with your Razorpay Test Key
            amount: numericAmount * 100, // in paise
            name: 'Flexipass',
            prefill: {
                email: 'demo@example.com',
                contact: '9999999999',
                name: 'Test User',
            },
            theme: { color: '#3B82F6' }, // Tailwind blue-500
        };
        console.log("Payment options: ", options);
        setLoading(true);
        RazorpayCheckout.open(options)
            .then((data) => {
                // Payment success
                alert(`Payment successful: ${data.razorpay_payment_id}`);
                dispatch(topupWallet(numericAmount, setLoading, navigation));
                dispatch(getUserWallet(setLoading));
            })
            .catch((error) => {
                // Payment failed or cancelled
                console.log('Payment Error:', error);
                Alert.alert("Payment Failed", error.description || "Transaction was not completed.");
                setLoading(false);
            });
    };

    return (
        <SafeAreaView className='flex-1 mt-5 bg-white'>
            <StatusBar backgroundColor={"#fff"} />
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="p-2 h-10 w-10 rounded-full"
            >
                <Image source={IMAGE.back} tintColor={"#000"} className='text-blue-500 h-8 w-8' />
            </TouchableOpacity>

            <View className='flex-1 w-full justify-start items-start px-4'>
                <Text className="text-blue-500 text-2xl py-3 text-start w-[88%] font-PBold">
                    Top Up Wallet
                </Text>

                <View className='w-full h-[88%] p-4 space-y-4 justify-center items-center rounded-xl'>
                    <Text className="text-black text-xl py-3 w-full font-PBold">
                        Add Money
                    </Text>

                    <TextInput
                        className='bg-white border text-lg h-[45px] font-PBold px-4 py-2 w-full'
                        placeholder="Enter amount"
                        value={amount}
                        onChangeText={setAmount}
                        keyboardType="numeric"
                        placeholderTextColor="#8b8b8b"
                    />

                    <TouchableOpacity
                        onPress={handleTopUp}
                        className='bg-blue-500 w-full h-[45px] justify-center items-center rounded-lg'
                        disabled={loading}
                    >
                        {
                            loading ? (
                                <ActivityIndicator size="small" color="#fff" />
                            ) : (
                                <Text className="text-white text-lg font-PBold py-2 text-center">
                                    Top Up
                                </Text>
                            )
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
