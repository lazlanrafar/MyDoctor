import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo} from '../../assets';
import {Button, Input, Link} from '../../components';

export default function Login() {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label={'Email Address'} />
      <View style={{height: 24}} />
      <Input label={'Password'} />
      <View style={{height: 10}} />
      <Link title={'Forgot My Password'} fontSize={12} align={'left'} />
      <View style={{height: 40}} />
      <Button title={'Sign In'} />
      <View style={{height: 30}} />
      <Link title={'Create New Account'} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#112340',
    marginVertical: 40,
    maxWidth: 153,
  },
});
