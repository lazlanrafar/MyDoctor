import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button, Header, Link} from '../../components';
import {IconAddPhoto, ILNullPhoto} from '../../assets';
import {colors, fonts} from '../../utils';

export default function UploadPhoto({navigation}) {
  return (
    <View style={styles.page}>
      <Header text={'Upload Photo'} onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <IconAddPhoto style={styles.iconAction} />
          </View>
          <View style={{height: 26}} />
          <Text style={styles.name}>Shayna Melinda</Text>
          <View style={{height: 4}} />
          <Text style={styles.work}>Product Designer</Text>
        </View>
        <View>
          <Button title={'Upload and Continue'} />
          <View style={{height: 30}} />
          <Link title={'Skip for this'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    justifyContent: 'space-between',
    padding: 40,
    flex: 1,
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  iconAction: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  avatar: {
    width: 110,
    height: 110,
  },
  name: {
    fontSize: 24,
    color: colors.text.black,
    fontFamily: fonts.primary.semiBold,
  },
  work: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
});
