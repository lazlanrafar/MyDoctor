import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, Input} from '../../components';
import {colors} from '../../utils';

export default function Register({navigation}) {
  return (
    <View style={styles.page}>
      <Header text={'Daftar Akun'} onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Input label="Full Name" />
        <View style={{height: 24}} />
        <Input label="Pekerjaan" />
        <View style={{height: 24}} />
        <Input label="Email Address" />
        <View style={{height: 24}} />
        <Input label="Password" />
        <View style={{height: 40}} />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
  },
});
