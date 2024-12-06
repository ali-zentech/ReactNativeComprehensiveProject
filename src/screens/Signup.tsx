import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import {ParamListBase, useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';

const Signup = () => {
  const colors = useTheme().colors;
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const navigator =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  function navigate() {
    navigator.popTo('HomePage');
  }
  return (
    <View style={styles.container}>
      <View style={styles.headingCmponent}>
        <Text style={[styles.heading1, {color: colors.text}]}>Sign Up</Text>
        <Text style={[styles.subHeading, {color: colors.text}]}>
          Create your Account
        </Text>
      </View>

      <View style={styles.bodyCmponent}>
        <View style={{width: '100%'}}>
          <Input
            placeHolder="Username"
            value={username}
            setValue={setUsername}
            secure={false}
          />
          <Input
            placeHolder="Email"
            value={email}
            setValue={setEmail}
            secure={false}
          />
          <Input
            placeHolder="Password"
            value={password}
            setValue={setPassword}
            secure={true}
          />
          <Input
            placeHolder="Confirm Password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            secure={true}
          />
          <Button func={navigate} text="Signup Now"></Button>
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
          {'Already Have an Account ? '}
        </Text>
        <TouchableOpacity onPress={() => navigator.popToTop()}>
          <Text
            style={[styles.textNavigate, {textDecorationLine: 'underline'}]}>
            Login Up.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    padding: '10%',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingCmponent: {
    // flex: 2,
    textAlign: 'center',
    height: '30%',
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
    // flex: 4,
    height: 'auto',
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
    // flex: 2,
    height: '30%',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
