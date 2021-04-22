import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Fonts from '../utils/Fonts';
import Colors from '../utils/Colors';

const CustomText = ({
  text,
  color = Colors.black,
  size = 14,
  isBold = false,
}) => {
  const textStyles = { ...styles.text, color: color, fontSize: size };

  return (
    <View style={styles.container}>
      <Text
        style={
          isBold
            ? { ...textStyles, fontFamily: Fonts.MontserratBold }
            : textStyles
        }>
        {text}
      </Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  text: {
    fontFamily: Fonts.Montserrat,
  },
});
