import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import TakeNote from './src/screens/AddNote';
import {RouteProp} from '@react-navigation/native';
export type RootStackParamList = {
  HomePage: undefined;
  Login: undefined;
  Signup: undefined;
  TakeNote: {noteId: string | undefined};
};
export type NotePramsList = RouteProp<RootStackParamList, 'TakeNote'>;

export type NavigatorType = NativeStackNavigationProp<RootStackParamList>;
