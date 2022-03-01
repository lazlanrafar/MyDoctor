import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Button({type = true, title, onPress}) {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type ? '#0BCAD4' : 'white',
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    color: type ? '#fff' : '#112340',
  }),
});
