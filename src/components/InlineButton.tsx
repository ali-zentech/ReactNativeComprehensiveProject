import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const InlineButton = ({func, text}: {func: () => void; text: string}) => {
  return (
    <View>
      <TouchableOpacity onPress={func}>
        <Text style={[styles.textNavigate]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InlineButton;

const styles = StyleSheet.create({
  textNavigate: {
    fontSize: 16,
    color: '#e4421b',
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
});
