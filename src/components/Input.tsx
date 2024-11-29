import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

const Input = ({
  value,
  setValue,
  placeHolder,
  secure,
}: {
  value: string;
  setValue: (value: string) => void;
  placeHolder: string;
  secure: boolean;
}) => {
  const colors = useTheme().colors;

  return (
    <View style={[styles.container]}>
      <TextInput
        value={value}
        placeholder={placeHolder}
        placeholderTextColor="#000"
        onChangeText={setValue}
        style={{color: '#000'}}
        secureTextEntry={secure}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#f7c4ab',
    padding: '2%',
    borderRadius: 10,
    marginVertical: '1%',
  },
  textInput: {
    color: 'black',
  },
});
