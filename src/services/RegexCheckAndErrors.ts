import {ToastAndroid} from 'react-native';

export function usernameMatch(username: string) {
  return username.match(new RegExp(/^[a-zA-Z0-9]{6,}$/));
}

export function passwordMatch(password: string) {
  return password.match(new RegExp(/^[a-zA-Z0-9]{6,}$/));
}

export function errorLogsToast(msg: string) {
  ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
}
