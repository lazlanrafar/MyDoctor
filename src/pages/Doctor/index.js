import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DoctorCategory, RatedDoctor} from '../../components';
import {DummyUser} from '../../assets';
import {colors, fonts} from '../../utils';

export default function Doctor() {
  let UserProfile = () => {
    return (
      <View style={UserProfileStyle.container}>
        <Image source={DummyUser} style={UserProfileStyle.avatar} />
        <View>
          <Text style={UserProfileStyle.name}>Shayna Melinda</Text>
          <Text style={UserProfileStyle.job}>Product Designer</Text>
        </View>
      </View>
    );
  };
  let NewsItem = () => {
    return (
      <View>
        <Text>NewsItem</Text>
      </View>
    );
  };

  return (
    <View style={styles.page}>
      <UserProfile />

      <View style={{height: 30}} />
      <Text style={styles.h1}>Mau konsultasi dengan siapa hari ini?</Text>
      <View style={{height: 16}} />

      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />

      <Text style={styles.h2}>Top Rated Doctors</Text>
      <RatedDoctor />
      <RatedDoctor />
      <RatedDoctor />

      <Text style={styles.h2}>Good News</Text>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingVertical: 30,
    paddingHorizontal: 16,
  },
  h1: {
    fontSize: 20,
    fontFamily: fonts.primary.semiBold,
    color: colors.text.black,
    maxWidth: 210,
  },
  h2: {
    fontSize: 16,
    fontFamily: fonts.primary.semiBold,
    color: colors.text.black,
  },
});

const UserProfileStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.semiBold,
    color: colors.text.black,
  },
  job: {
    fontSize: 12,
    fontFamily: fonts.primary.regular,
    color: colors.text.gray,
  },
});
