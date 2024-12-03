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
import {getAllNotes} from '../services/AsyncStorageNotes';

const ShowTaskList = () => {
  const colors = useTheme().colors;
  const [taskList, setTaskList] = useState<string[][]>([]);
  const navigator = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useFocusEffect(() => {
    const fetchTasks = async () => {
      const list = await getAllNotes();
      setTaskList([...list]);
    };
    fetchTasks();
  });
  return (
    <View style={styles.container}>
      <ScrollView>
        {taskList.map((val, index) => (
          <TouchableOpacity
            key={val[0] + index}
            onPress={() => {
              navigator.push('TakeNote', {noteId: val[0]});
            }}
            style={[
              styles.listitem,
              {backgroundColor: colors.border, borderColor: colors.border},
            ]}>
            <Text style={[styles.itemTitle, {color: colors.text}]}>
              {val[1]}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    fontSize: 20,
  },
});
function async(): void {
  throw new Error('Function not implemented.');
}
function useCallback(
  arg0: () => void,
  arg1: string[][],
): () => undefined | void | (() => void) {
  throw new Error('Function not implemented.');
}
