import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {DummyDoctor1} from '../../../assets';

export default function ListChat() {
  return (
    <View
      style={{
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        source={DummyDoctor1}
        style={{width: 46, height: 46, borderRadius: 46 / 2, marginRight: 12}}
      />
      <View>
        <Text
          style={{
            fontFamily: fonts.primary.regular,
            color: colors.text.black,
            fontSize: 16,
          }}>
          Alexander Jannie
        </Text>
        <Text
          style={{
            fontFamily: fonts.primary.light,
            color: colors.text.gray,
            fontSize: 12,
          }}>
          Baik ibu, terima kasih banyak atas wakt...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
