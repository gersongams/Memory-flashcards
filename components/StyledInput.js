import React from 'react';
import Colors from '../constants/Colors';
import {StyleSheet, TextInput, View} from "react-native";

const StyledInput = ({onFocus, onBlur, placeholder = 'Placeholder', ...otherProps}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        placeholderTextColor={Colors.disabled}
        placeholder={placeholder}
        {...otherProps}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'transparent',
    borderColor: Colors.white,
    borderWidth: 2,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    marginBottom: 16,
    minWidth: 240,
  },
  inputText: {
    color: Colors.white,
    fontSize: 18,
  }
})

export default StyledInput;