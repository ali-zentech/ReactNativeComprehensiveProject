import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ParamListBase, useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Button from '../components/Button';
import ShowTaskList from '../components/ShowTaskList';
import {RootStackParamList} from '../../types';

const Dashboard = () => {
  const colors = useTheme().colors;
  const navigator =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <ShowTaskList />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
