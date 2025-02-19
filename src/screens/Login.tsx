import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ParamListBase, useNavigation, useTheme} from '@react-navigation/native';
import Input from '../components/Input';
import Button from '../components/Button';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';

const Login = () => {
  const colors = useTheme().colors;
  const navigator =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showError, setShowError] = useState(null);
  function navigate() {
    navigator.popTo('HomePage');
  }
  return (
    <View style={styles.container}>
      <View style={styles.headingCmponent}>
        <Text style={[styles.heading1, {color: colors.text}]}>
          Welcome Back
        </Text>
        <Text style={[styles.subHeading, {color: colors.text}]}>
          Enter your credentials for login
        </Text>
      </View>

      <View style={styles.bodyCmponent}>
        {showError ? <Text style={styles.errorText}>{showError}</Text> : <></>}
        <View style={{width: '100%'}}>
          <Input
            placeHolder="Username"
            value={username}
            setValue={setUsername}
            secure={false}
            regex={new RegExp(/^[a-zA-Z0-9]{3,}$/)}
            errorMsg={'Username must be 3 characters long'}
          />
          <Input
            placeHolder="Password"
            value={password}
            setValue={setPassword}
            secure={true}
            regex={new RegExp(/^[a-zA-Z0-9]{6,}$/)}
            errorMsg={'Password must be alphanumeric 6 characters'}
          />
          <Button func={navigate} text="Login Now"></Button>
        </View>
        <TouchableOpacity>
          <Text style={styles.textNavigate}> Forgot Password ?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerCmponent}>
        <Text
          style={{
            fontSize: 14,
            color: colors.text,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
          }}>
          {'Dont Have an Account ? '}
        </Text>
        <TouchableOpacity onPress={() => navigator.navigate('Signup')}>
          <Text
            style={[styles.textNavigate, {textDecorationLine: 'underline'}]}>
            Sign Up.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '10%',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
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
  subHeading: {
    fontWeight: 'light',
    fontSize: 20,
  },
  bodyCmponent: {
    flex: 4,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
  },
  textNavigate: {
    fontSize: 16,
    color: '#e4421b',
    fontWeight: 'bold',
  },
  footerCmponent: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {},
});
