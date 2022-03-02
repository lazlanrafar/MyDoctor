import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import {DummyHospital1, ILCoverHospital} from '../../assets';
import {colors, fonts} from '../../utils';

export default function Hospitals() {
  const ListHospital = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 16,
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
          alignItems: 'center',
        }}>
        <Image
          source={DummyHospital1}
          style={{width: 80, height: 60, borderRadius: 10, marginRight: 16}}
        />
        <View>
          <Text
            style={{
              fontFamily: fonts.primary.regular,
              fontSize: 16,
              color: colors.text.black,
              maxWidth: 160,
              marginBottom: 6,
            }}>
            Rumah Sakit Citra Bunga Merdeka
          </Text>
          <Text
            style={{
              fontFamily: fonts.primary.light,
              fontSize: 12,
              color: colors.text.gray,
            }}>
            Jln. Surya Sejahtera 20
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={ILCoverHospital}
        style={{height: 240, alignItems: 'center', padding: 30}}>
        <Text
          style={{
            fontFamily: fonts.primary.semiBold,
            color: colors.text.white,
            fontSize: 20,
          }}>
          Nearby Hospitals
        </Text>
        <Text
          style={{
            fontFamily: fonts.primary.light,
            color: colors.text.white,
            fontSize: 14,
          }}>
          3 tersedia
        </Text>
      </ImageBackground>
      <View
        style={{
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
          marginTop: -30,
          flex: 1,
          backgroundColor: colors.white,
          paddingTop: 30,
        }}>
        <ListHospital />
        <ListHospital />
        <ListHospital />
        <ListHospital />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
