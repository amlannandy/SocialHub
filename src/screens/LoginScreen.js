import React, { useReducer } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import Colors from '../utils/Colors';
import formReducer from '../utils/FormReducer';
import CustomButton from '../components/CustomButton';
import CustomTextField from '../components/CustomTextField';
import CustomText from '../components/CustomText';

const initialLoginData = {
  email: '',
  password: '',
};

const LoginScreen = ({ navigation }) => {
  const [loginData, setLoginData] = useReducer(formReducer, initialLoginData);

  const loginHandler = () => {
    console.log(loginData);
  };

  const goToRegister = () => {
    navigation.replace('register');
  };

  const forgotPasswordHandler = () => {
    console.log('Forgot Password');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.upperContainer}>
        <View style={styles.title}>
          <CustomText text='Log in to SocialHub' isBold={true} size={24} />
        </View>
        <CustomTextField
          hint='Enter your email'
          onChangeText={text => setLoginData({ type: 'email', payload: text })}
        />
        <CustomTextField
          hint='Enter your password'
          onChangeText={text =>
            setLoginData({ type: 'password', payload: text })
          }
        />
        <TouchableOpacity
          style={styles.clickText}
          onPress={forgotPasswordHandler}>
          <CustomText text='Forgot Password?' />
        </TouchableOpacity>
      </View>
      <View style={styles.lowerContainer}>
        <CustomButton text='Login' onPress={loginHandler} />
        <CustomButton text='Register Instead' onPress={goToRegister} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  upperContainer: {
    width: '100%',
    alignItems: 'center',
  },
  lowerContainer: {
    padding: 10,
    borderTopColor: Colors.darkGrey,
    borderTopWidth: 1,
    width: '100%',
  },
  title: {
    alignSelf: 'flex-start',
  },
});
