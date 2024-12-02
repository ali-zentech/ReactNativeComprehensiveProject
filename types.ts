import TakeNote from './src/screens/TakeNote';
import {RouteProp} from '@react-navigation/native';
export type RootStackParamList = {
  HomePage: undefined;
  Login: undefined;
  Signup: undefined;
  TakeNote: {noteId: string | undefined};
};
export type NotePramsList = RouteProp<RootStackParamList, 'TakeNote'>;
