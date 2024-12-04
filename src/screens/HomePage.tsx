import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ParamListBase, useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Button from '../components/Button';
import {RootStackParamList} from '../../types';

const HomePage = () => {
  const colors = useTheme().colors;
  const navigator =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Button
        text="Counter App"
        func={() => {
          navigator.navigate('Counter');
        }}></Button>
      <Button
        text={'Note Taking App'}
        func={() => {
          navigator.navigate('NoteTakingApp');
        }}></Button>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
