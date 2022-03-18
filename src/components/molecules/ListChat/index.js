import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

export default function ListChat({name, lastMessage, avatar, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={{
          borderBottomColor: colors.border,
          borderBottomWidth: 1,
          padding: 16,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={avatar}
          style={{width: 46, height: 46, borderRadius: 46 / 2, marginRight: 12}}
        />
        <View>
          <Text
            style={{
              fontFamily: fonts.primary.regular,
              color: colors.text.black,
              fontSize: 16,
            }}>
            {name}
          </Text>
          <Text
            style={{
              fontFamily: fonts.primary.light,
              color: colors.text.gray,
              fontSize: 12,
            }}>
            {lastMessage}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
