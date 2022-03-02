import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DummyDoctor1, IconStar} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function RatedDoctor() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={DummyDoctor1} style={styles.avatar} />
        <View style={{width: 16}} />
        <View>
          <Text style={styles.name}>Alexa Rachel</Text>
          <Text style={styles.job}>Pediatrician</Text>
        </View>
      </View>
      <View style={styles.star}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
  name: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 16,
    color: colors.text.black,
  },
  job: {
    fontFamily: fonts.primary.regular,
    fontSize: 12,
    color: colors.text.gray,
  },
  star: {
    flexDirection: 'row',
  },
});
