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

const Signup = () => {
  const colors = useTheme().colors;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigator = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
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
          <Button navigateTo="HomePage" text="Signup Now"></Button>
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
    </KeyboardAvoidingView>
  );
};

export default Signup;

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
});
