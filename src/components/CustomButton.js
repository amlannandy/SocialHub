import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import Fonts from '../utils/Fonts';
import Colors from '../utils/Colors';

const CustomButton = ({ text, onPress, color = Colors.blue }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.buttonStyle, backgroundColor: color }}
      onPress={onPress}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonStyle: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    margin: 8,
    borderRadius: 35,
    alignItems: 'center',
  },
  textStyle: {
    color: Colors.white,
    fontFamily: Fonts.MontserratBold,
    fontSize: 16,
  },
});
