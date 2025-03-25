import { StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/helper/toastConfig';
import Index from './src/navigation/Index';
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <Index />
      </Provider>
      <Toast config={toastConfig} />
    </SafeAreaView>
  )
}
