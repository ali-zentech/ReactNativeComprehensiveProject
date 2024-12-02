import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  ParamListBase,
  useFocusEffect,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Button from './Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ShowTaskList = () => {
  const colors = useTheme().colors;
  const [taskList, setTaskList] = useState<string[]>([]);
  const navigator = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function navigateToTakeNote() {
    navigator.push('TakeNote', {noteId: ''});
  }

  useFocusEffect(() => {
    // Fetch all keys and update the task list
    const fetchTasks = async () => {
      try {
        const list = await AsyncStorage.getAllKeys();
        if (list) {
          setTaskList([...list]);
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks(); // Empty dependency array ensures this effect runs only once on focus
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        {taskList.map((val, index) => (
          <TouchableOpacity
            key={val}
            onPress={() => {
              navigator.push('TakeNote', {noteId: val});
            }}
            style={[
              styles.listitem,
              {backgroundColor: colors.border, borderColor: colors.border},
            ]}>
            <Text style={[styles.itemTitle, {color: colors.text}]}>
              {val.split('||')[0]}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Button func={navigateToTakeNote} text="Note Taking App" />
    </View>
  );
};

export default ShowTaskList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  listitem: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
function async(): void {
  throw new Error('Function not implemented.');
}
