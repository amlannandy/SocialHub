import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Text>Login</Text>
      <Button title='Register' onPress={() => navigation.replace('register')} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
