import React from 'react';
import type {RootState} from '../redux/store';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../redux/features/components/counterSlice';
import {Text, TouchableOpacity, View} from 'react-native';
import Button from '../components/Button';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useTheme} from '@react-navigation/native';

export function Counter() {
  const colors = useTheme().colors;
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <View
        style={{
          //   flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
          backgroundColor: colors.background,
        }}>
        <Button func={() => dispatch(increment())} text={'Increment'} />
        <Text
          style={{
            fontSize: 60,
            textAlign: 'center',
            color: colors.text,
          }}>
          {count}
        </Text>
        <Button func={() => dispatch(decrement())} text={'Decrement'} />
      </View>
    </View>
  );
}
