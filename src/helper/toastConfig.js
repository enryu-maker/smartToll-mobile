import { BaseToast, ErrorToast } from 'react-native-toast-message';

export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: '0DB44C',
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 0,
        height: 70,
      }}
      text1Style={{
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
        color: '#1E8449',
      }}
      text2Style={{
        fontFamily: 'OpenSans Regular',
        fontSize: 14,
        color: '#2C3E50',
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: 'red',
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 0,
        height: 70,
      }}
      text1Style={{
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
        color: 'red',
      }}
      text2Style={{
        fontFamily: 'OpenSans Regular',
        fontSize: 14,
        color: 'red',
      }}
    />
  ),
};