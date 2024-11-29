import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ParamListBase, useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Dashboard = () => {
  const colors = useTheme().colors;
  const navigator = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return <View style={{backgroundColor: colors.background}}></View>;
};

export default Dashboard;

const styles = StyleSheet.create({});
