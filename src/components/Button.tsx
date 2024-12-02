import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Button = ({func, text}: {func: () => void; text: string}) => {
  function pressed() {
    func();
  }
  // const navigator = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity style={styles.container} onPress={() => pressed()}>
      <Text style={styles.textStyle}> {text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#e4421b',
    padding: '5%',
    borderRadius: 10,
    marginVertical: '1%',
  },
  textStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
});
