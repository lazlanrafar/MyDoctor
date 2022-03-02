import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';
import ListChat from '../../components/molecules/ListChat';
import {DummyDoctor1} from '../../assets';
import {colors} from '../../utils';

export default function ChooseDoctor({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <Header
        text={'Pilih Dokter Anak'}
        onPress={() => navigation.goBack()}
        dark={true}
      />
      <ListChat
        avatar={DummyDoctor1}
        name={'Alexander Jannie'}
        lastMessage={'Wanita'}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
