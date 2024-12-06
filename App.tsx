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
import NoteTakingApp from './src/screens/NoteTakingApp';
import {Counter} from './src/screens/Counter';
import {Provider, useSelector} from 'react-redux';
import store, {persistor, RootState} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {createDrawerNavigator} from '@react-navigation/drawer';

function Navigate() {
  const {userData} = useSelector((state: RootState) => state.auth);
  const theme = useColorScheme();
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  const Drawer = createDrawerNavigator();

  function DrawerNavigation() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="HomePage"
          component={HomePage}
          options={{
            headerShown: true,
          }}
        />
        <Drawer.Screen
          name="NoteTakingApp"
          component={NoteTakingApp}
          options={{
            headerShown: true,
          }}
        />
        <Drawer.Screen
          name="Counter"
          component={Counter}
          options={{
            headerShown: true,
          }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootStack.Navigator>
        {userData ? (
          <RootStack.Group>
            <RootStack.Screen
              name="DrawerNavigation"
              component={DrawerNavigation}
              options={{headerShown: false}}
            />
            <RootStack.Screen
              name="TakeNote"
              component={TakeNote}
              options={{
                headerShown: true,
                headerTitleAlign: 'center',
              }}
            />
          </RootStack.Group>
        ) : (
          <RootStack.Group>
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
          </RootStack.Group>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
function App(): React.JSX.Element {
  const isLoggedIn = false;

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigate />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
