import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import ListChat from '../../components/molecules/ListChat';

export default function Messages() {
  return (
    <ScrollView style={{flex: 1, backgroundColor: colors.white}}>
      <View>
        <Text
          style={{
            fontFamily: fonts.primary.semiBold,
            fontSize: 20,
            color: colors.text.black,
            marginTop: 30,
            marginLeft: 16,
            marginBottom: 16,
          }}>
          Messages
        </Text>
        <ListChat />
        <ListChat />
        <ListChat />
        <ListChat />
        <ListChat />
        <ListChat />
        <ListChat />
        <ListChat />
        <ListChat />
        <ListChat />
        <ListChat />
        <ListChat />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
