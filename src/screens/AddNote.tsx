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
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NotePramsList, RootStackParamList} from '../../types';
import {
  deleteNote,
  editNote,
  getNote,
  saveNote,
} from '../services/AsyncStorageNotes';
import InlineButton from '../components/InlineButton';

const AddNote = () => {
  const route = useRoute<NotePramsList>();
  const noteId = route.params.noteId;
  const colors = useTheme().colors;
  const [note, setNote] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const navigator =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function DeleteAndNavigate() {
    if (noteId) {
      deleteNote(noteId).then(() => navigator.goBack());
    }
  }
  function NavigateBack() {
    if (navigator.canGoBack()) {
      navigator.goBack();
    }
  }

  useEffect(() => {
    if (noteId) {
      try {
        getNote(noteId).then(note_attributes => {
          if (note_attributes) {
            setNote(note_attributes);
          }
          navigator.setOptions({
            headerRight: () =>
              noteId ? (
                <InlineButton
                  text={'Delete'}
                  func={() => DeleteAndNavigate()}
                />
              ) : (
                <></>
              ),
          });
        });
      } catch (error) {}
    }
  }, []);

  async function edit(note: string) {
    try {
      if (errorMsg == '' && noteId) {
        editNote(noteId, note);
        navigator.pop();
      }
    } catch (error) {
      Alert.alert('Un Expected Error occured');
    }
  }

  async function save(note: string) {
    try {
      if (errorMsg == '' && noteId != '') {
        saveNote(note);
        navigator.pop();
      }
    } catch (error) {
      Alert.alert('Un Expected Error occured');
    }
  }
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.headingCmponent}>
        <Text style={[styles.heading1, {color: colors.text}]}>TakeNote</Text>
      </View>

      <View style={styles.bodyComponent}>
        <MultiLineInput
          value={note}
          setValue={setNote}
          placeHolder="Text Input here"></MultiLineInput>
      </View>
      <View style={styles.footerCmponent}>
        {noteId ? (
          <Button func={() => edit(note)} text="Edit note"></Button>
        ) : (
          <Button func={() => save(note)} text="save note"></Button>
        )}
      </View>
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  headingCmponent: {
    height: '25%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading1: {
    fontWeight: 'bold',
    fontSize: 46,
  },
  bodyComponent: {
    height: '50%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
  },
  footerCmponent: {
    height: '25%',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
