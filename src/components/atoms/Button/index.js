import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Button({type = true, title}) {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.text(type)}>{title}</Text>
    </View>
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
