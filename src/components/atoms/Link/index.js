import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Link({title, fontSize = 16, align = 'center'}) {
  return (
    <View>
      <Text style={styles.link(fontSize, align)}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  link: (fontSize, align) => ({
    fontFamily: 'Nunito-Regular',
    fontSize: fontSize,
    textDecorationLine: 'underline',
    color: '#7D8797',
    textAlign: align,
  }),
});
