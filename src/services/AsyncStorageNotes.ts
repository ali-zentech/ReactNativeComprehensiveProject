import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export async function getNote(title: string) {
  try {
    const noteToEdit = await AsyncStorage.getItem(title);
    if (noteToEdit) {
      return noteToEdit;
    }
  } catch (error) {
    Alert.alert('Un Expected Error occured');
  }
}

export async function getAllNotes() {
  const res: string[][] = [];
  try {
    await AsyncStorage.getAllKeys().then(async keys => {
      await AsyncStorage.multiGet(keys).then(list => {
        list.forEach(ele => {
          if (ele) {
            res.push([ele[0], ele[1] || '']);
          }
        });
      });
    });
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
  return res;
}

export async function deleteNote(noteId: string) {
  console.log(noteId);
  await AsyncStorage.removeItem(noteId);
}

export async function saveNote(note: string) {
  await AsyncStorage.setItem(Date.now().toString(), note);
}

export async function editNote(noteId: string, note: string) {
  await AsyncStorage.setItem(noteId, note);
}
