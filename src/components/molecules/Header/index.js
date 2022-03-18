import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconBack} from '../../../assets';
import {Button} from '../../atoms';
import {colors} from '../../../utils';

export default function Header({text, sub = '', onPress, dark, children = ''}) {
  return (
    <View style={styles.container(dark)}>
      <Button iconOnly={true} onPress={onPress} dark={dark} />
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title(dark)}>{text}</Text>
        {sub !== '' ? <Text style={styles.subtitle(dark)}>{sub}</Text> : null}
      </View>
      {children !== '' ? children : <View style={{width: 24}} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: dark => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: dark ? colors.navbar : colors.white,
    borderBottomLeftRadius: dark ? 20 : 0,
    borderBottomRightRadius: dark ? 20 : 0,
  }),
  title: dark => ({
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: dark ? colors.text.white : '#112340',
  }),
  subtitle: dark => ({
    fontSize: 14,
    fontFamily: 'Nunito-regular',
    color: dark ? '#8092AF' : '#8092AF',
  }),
});
