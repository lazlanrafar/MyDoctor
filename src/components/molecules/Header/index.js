import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconBack} from '../../../assets';

export default function Header({text}) {
  return (
    <View style={styles.container}>
      <IconBack />
      <Text style={styles.title}>{text}</Text>
      <View style={{width: 24}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 40,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#112340',
  },
});
