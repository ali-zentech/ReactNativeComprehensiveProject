import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ParamListBase, useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Button from '../components/Button';
import ShowTaskList from './ShowTaskList';
import {RootStackParamList} from '../../types';
import InlineButton from '../components/InlineButton';

const HomePage = () => {
  const colors = useTheme().colors;
  const navigator =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  function navigateToAddNote() {
    navigator.push('TakeNote', {noteId: undefined});
  }
  useEffect(() => {
    navigator.setOptions({
      headerRight: () => (
        <InlineButton text={'Add Note'} func={() => navigateToAddNote()} />
      ),
    });
  }, []);
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <ShowTaskList />
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
