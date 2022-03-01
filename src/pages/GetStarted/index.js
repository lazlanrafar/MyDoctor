import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {Button} from '../../components';
import {ILGetStarted, ILLogo} from '../../assets';

export default function GetStarted() {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button title={'Get Started'} />
        <View style={{height: 16}} />
        <Button title={'Sign In'} type={false} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    color: 'white',
    marginTop: 91,
    fontFamily: 'Nunito-SemiBold',
  },
});
