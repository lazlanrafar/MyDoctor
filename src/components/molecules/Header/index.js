import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconBack} from '../../../assets';
import {Button} from '../../atoms';
import {colors} from '../../../utils';

export default function Header({text, onPress, dark}) {
  return (
    <View style={styles.container(dark)}>
      <Button iconOnly={true} onPress={onPress} dark={dark} />
      <Text style={styles.title(dark)}>{text}</Text>
      <View style={{width: 24}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: dark => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 30,
    backgroundColor: dark ? colors.navbar : colors.white,
    paddingBottom: 40,
    borderBottomLeftRadius: dark ? 20 : 0,
    borderBottomRightRadius: dark ? 20 : 0,
  }),
  title: dark => ({
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: dark ? colors.text.white : '#112340',
  }),
});
