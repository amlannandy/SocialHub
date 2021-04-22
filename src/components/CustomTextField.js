import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';

const CustomTextField = ({
  value,
  onChangeText,
  hint,
  inputType = 'default',
  isPassword = false,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <TextInput
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      secureTextEntry={isPassword}
      style={
        isFocus
          ? { ...styles.inputStyle, borderBottomColor: Colors.darkGrey }
          : styles.inputStyle
      }
      value={value}
      placeholder={hint}
      onChangeText={onChangeText}
      keyboardType={inputType}
    />
  );
};

export default CustomTextField;

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 16,
    backgroundColor: 'white',
    padding: 15,
    width: '85%',
    margin: 10,
    borderRadius: 10,
    color: 'black',
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
    fontFamily: Fonts.Montserrat,
  },
});
