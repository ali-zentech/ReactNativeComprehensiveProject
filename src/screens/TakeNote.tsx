import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  ParamListBase,
  useNavigation,
  useTheme,
  useRoute,
} from '@react-navigation/native';
import MultiLineInput from '../components/MultiLineInput';
import Button from '../components/Button';
import Input from '../components/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NotePramsList, RootStackParamList} from '../../types';

const TakeNote = () => {
  const route = useRoute<NotePramsList>();
  const noteId = route.params.noteId;
  const colors = useTheme().colors;
  const [noteTitle, setNoteTitle] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const navigator =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (noteId) {
      try {
        getNote(noteId);
      } catch (error) {}
    }
  }, []);

  async function getNote(title: string) {
    try {
      const noteToEdit = await AsyncStorage.getItem(title);
      if (noteToEdit) {
        setNote(noteToEdit);
        setNoteTitle(title);
      }
    } catch (error) {
      Alert.alert('Un Expected Error occured');
    }
  }

  async function saveNote(note: string, title: string) {
    try {
      if (errorMsg == '' && noteTitle != '' && noteId == '') {
        await AsyncStorage.setItem(title + '||' + Date.now().toString(), note);
        navigator.pop();
      } else if (noteId != '') {
      }
    } catch (error) {
      Alert.alert('Un Expected Error occured');
    }
  }
  // const navigator = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.headingCmponent}>
        <Text style={[styles.heading1, {color: colors.text}]}>TakeNote</Text>
      </View>

      <View style={styles.bodyComponent}>
        <Input
          placeHolder="Title Here"
          value={noteTitle}
          setValue={setNoteTitle}
          secure={false}
          regex={new RegExp(/^[a-zA-Z0-9]{3,}$/)}
          errorMsg={'Title must be 3 characters long'}
        />
        <MultiLineInput
          value={note}
          setValue={setNote}
          placeHolder="Text Input here"></MultiLineInput>
      </View>
      <View style={styles.footerCmponent}>
        <Button
          func={() => saveNote(note, noteTitle)}
          text="save note"></Button>
      </View>
    </View>
  );
};

export default TakeNote;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  headingCmponent: {
    flex: 2,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading1: {
    fontWeight: 'bold',
    fontSize: 46,
  },
  bodyComponent: {
    flex: 4,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
  },
  footerCmponent: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
