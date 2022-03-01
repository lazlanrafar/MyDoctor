import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button, Header, Link} from '../../components';
import {colors} from '../../utils/Colors/inde';
import {ILNullPhoto} from '../../assets';

export default function UploadPhoto({navigation}) {
  return (
    <View style={styles.page}>
      <Header text={'Upload Photo'} onPress={() => navigation.goBack()} />
      <View>
        <Image source={ILNullPhoto} />
        <Text>Shayna Melinda</Text>
        <Text>Product Designer</Text>
      </View>
      <Button title={'Upload and Continue'} />
      <Link title={'Skip for this'} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
