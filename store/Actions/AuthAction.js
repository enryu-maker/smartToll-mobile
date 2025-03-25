import axios from 'axios';
import axiosIns, { baseURL } from '../../src/helper/Helper';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Init = () => {
  return async dispatch => {
    try {
      let access = await AsyncStorage.getItem('access');
      console.log(access)
      dispatch({
        type: 'SET_ACCESS',
        payload: access,
      });
    } catch (error) {
      dispatch({
        type: 'SET_ACCESS',
        payload: null,
      });
    }
  };
};

export const UserRegister = (data, setLoading, navigation) => {
  return async dispatch => {
    setLoading(true);
    try {
      let response = await axios.post(`${baseURL}/v1/user/register/`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response.data);
      Toast.show({
        type: 'success',
        text1: response?.data?.msg || 'Registered successfully!',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 50,
        bottomOffset: 40,
      });
      setTimeout(() => {
        navigation.navigate('Login');
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error?.response?.data);
      Toast.show({
        type: 'error',
        text1: error?.response?.data?.msg || 'Registration failed!',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 50,
        bottomOffset: 40,
      });

      setLoading(false);
    }
  };
};

export const UserLogin = (email, password, setLoading, navigation) => {
  return async dispatch => {
    console.log(email, password);
    setLoading(true);
    try {
      await axios.post(baseURL + '/v1/user/login/', {
        "email": email,
        "password": password,
      },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((response) => {
        console.log(response)
        Toast.show({
          type: 'success',
          text1: response?.data?.message,
          visibilityTime: 2000,
          autoHide: true,
          topOffset: 50,
          bottomOffset: 40,
        });
        AsyncStorage.setItem('access', response?.data?.access_token);
        dispatch({
          type: 'SET_ACCESS',
          payload: response?.data?.access_token,
        });
      }).catch((error) => {
        console.log(error?.response)
        Toast.show({
          type: 'error',
          text1: error?.response?.data?.message,
          visibilityTime: 2000,
          autoHide: true,
          topOffset: 50,
          bottomOffset: 40,
        });
        setLoading(false);

      })

    } catch (error) {
      console.log(error?.response?.data?.msg)
      Toast.show({
        type: 'error',
        text1: error?.response?.data?.msg,
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 50,
        bottomOffset: 40,
      });
      setLoading(false);
    }
  };
};

export const sendCode = (email, setLoading, setCurrentStep) => {
  return async dispatch => {
    setLoading(true);
    try {
      let response = await axios.post(baseURL + '/reset-password', {
        "email": email,
      },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      Toast.show({
        type: 'success',
        text1: response?.data?.msg,
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 50,
        bottomOffset: 40,
      });
      setCurrentStep(2);
      setLoading(false);
    } catch (error) {
      console.log(error?.response?.data);
      Toast.show({
        type: 'error',
        text1: error?.response?.data?.msg,
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 50,
        bottomOffset: 40,
      });
      setLoading(false);
    }
  };
}

export const verifyCode = (token, setLoading, setCurrentStep) => {
  return async dispatch => {
    setLoading(true);
    try {
      let response = await axios.get(baseURL + `/reset-password/token-validation?token=${token}`);
      Toast.show({
        type: 'success',
        text1: response?.data?.msg,
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 50,
        bottomOffset: 40,
      });
      setCurrentStep(3);
      setLoading(false);
    } catch (error) {
      console.log(error?.response?.data);
      Toast.show({
        type: 'error',
        text1: error?.response?.data?.msg,
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 50,
        bottomOffset: 40,
      });
      setLoading(false);
    }
  };
}

export const resetPassword = (password, token, setLoading) => {
  return async dispatch => {
    setLoading(true);
    try {
      let response = await axios.post(baseURL + `/reset-password/submit?token=${token}`, {
        "password": password,
      },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      Toast.show({
        type: 'success',
        text1: response?.data?.msg,
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 50,
        bottomOffset: 40,
      });
      setLoading(false);
    } catch (error) {
      console.log(error?.response?.data);
      Toast.show({
        type: 'error',
        text1: error?.response?.data?.msg,
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 50,
        bottomOffset: 40,
      });
      setLoading(false);
    }
  };
}

export const updateProfile = (name, setLoading, navigation) => {
  return async dispatch => {
    setLoading(true);
    try {
      let response = await axiosIns.post(baseURL + '/complete-profile/', {
        name: name,
      });
      Toast.show({
        type: 'success',
        text1: 'Profile Updated Sucessfully',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 50,
        bottomOffset: 40,
      });
      dispatch({
        type: 'PROFILE',
        payload: response?.data,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: error?.response?.data?.msg,
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 50,
        bottomOffset: 40,
      });
      setLoading(false);
    }
  };
};

export const getProfile = (setLoading) => {
  return async dispatch => {
    setLoading(true);
    try {
      let response = await axiosIns.get(baseURL + '/v1/user/profile/');
      dispatch({
        type: 'SET_PROFILE',
        payload: response?.data,
      });
      console.log(response)
      setLoading(false);
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: error?.response?.data?.message,
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 50,
        bottomOffset: 40,
      });
      setLoading(false);
    }
  };
};

export const getStation = (location, setLoading, navigation) => {
  return async dispatch => {
    setLoading(true);
    try {
      let response = await axiosIns.get(baseURL + `/v1/user/nearby-station/?user_lat=${19.9975}&user_long=${73.7898}&range_km=10`);
      dispatch({
        type: "STATION",
        payload: response.data
      })
      setLoading(false);
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: error?.response?.data?.msg,
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 50,
        bottomOffset: 40,
      });
      setLoading(false);
    }
  };
};

export const LogoutAction = () => {
  return async dispatch => {
    await AsyncStorage.clear();
    dispatch({
      type: 'LOGOUT',
    });
  };
};
