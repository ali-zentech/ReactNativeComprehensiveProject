import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const MultiLineInput = ({
  value,
  setValue,
  placeHolder,
}: {
  value: string;
  setValue: (value: string) => void;
  placeHolder: string;
}) => {
  return (
    <View style={[styles.container]}>
      <TextInput
        multiline={true}
        value={value}
        placeholder={placeHolder}
        placeholderTextColor="#000"
        onChangeText={setValue}
        style={[styles.textInput, {color: '#000'}]}
      />
    </View>
  );
};

export default MultiLineInput;

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
    height: '100%',
    textAlignVertical: 'top',
    fontSize: 16,
  },
});
