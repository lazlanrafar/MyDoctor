import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function Input({label}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: '#7D8797',
    fontFamily: 'Nunito-Regular',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 10,
    padding: 12,
  },
});
