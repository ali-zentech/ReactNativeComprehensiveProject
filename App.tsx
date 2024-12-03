/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
  useNavigation,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import HomePage from './src/screens/HomePage';
import TakeNote from './src/screens/AddNote';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './types';

function App(): React.JSX.Element {
  const theme = useColorScheme();
  // const Stack = createNativeStackNavigator();
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  const isLoggedIn = false;

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootStack.Navigator initialRouteName="Login">
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            headerShown: true,
          }}
        />
        <RootStack.Screen
          name="TakeNote"
          component={TakeNote}
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
