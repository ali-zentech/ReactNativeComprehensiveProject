import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import TakeNote from './src/screens/AddNote';
import {RouteProp} from '@react-navigation/native';
export type RootStackParamList = {
  DrawerNavigation: undefined;
  HomePage: undefined;
  Login: undefined;
  Signup: undefined;
  NoteTakingApp: undefined;
  Counter: undefined;
  TakeNote: {noteId: string | undefined};
};
export type NotePramsList = RouteProp<RootStackParamList, 'TakeNote'>;

export type NavigatorType = NativeStackNavigationProp<RootStackParamList>;
