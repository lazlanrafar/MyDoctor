import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ChatItem, Header, InputChat} from '../../components';
import {DummyDoctor1} from '../../assets';

export default function Chatting({navigation}) {
  return (
    <View>
      <Header
        text={'Nairobi Putri Hayza'}
        sub={'Dokter Anak'}
        onPress={() => navigation.goBack()}
        dark={true}>
        <Image
          source={DummyDoctor1}
          style={{width: 46, height: 46, borderRadius: 100}}
        />
      </Header>
      <Text>Senin, 21 Maret, 2020</Text>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <InputChat />
    </View>
  );
}

const styles = StyleSheet.create({});
