import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {DoctorCategory, RatedDoctor} from '../../components';
import {DummyNews1, DummyNews2, DummyNews3, DummyUser} from '../../assets';
import {colors, fonts} from '../../utils';

export default function Doctor({navigation}) {
  let UserProfile = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Image
          source={DummyUser}
          style={{
            width: 46,
            height: 46,
            borderRadius: 46 / 2,
            marginRight: 12,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: fonts.primary.semiBold,
              color: colors.text.black,
            }}>
            Shayna Melinda
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: fonts.primary.regular,
              color: colors.text.gray,
            }}>
            Product Designer
          </Text>
        </View>
      </View>
    );
  };

  let NewsItem = ({title, date, Icon}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 16,
          alignItems: 'center',
        }}>
        <View>
          <Text
            style={{
              maxWidth: 200,
              fontFamily: fonts.primary.semiBold,
              fontSize: 16,
              color: colors.text.black,
              marginBottom: 4,
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontFamily: fonts.primary.regular,
              color: colors.text.gray,
              fontSize: 12,
            }}>
            {date}
          </Text>
        </View>
        <Image
          source={Icon}
          style={{width: 80, height: 60, borderRadius: 10}}
        />
      </View>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <UserProfile />

        <View style={{height: 30}} />
        <Text style={styles.h1}>Mau konsultasi dengan siapa hari ini?</Text>
        <View style={{height: 16}} />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            <DoctorCategory
              title={'Dokter Umum'}
              onPress={() => navigation.navigate('ChooseDoctor')}
            />
            <DoctorCategory
              title={'Psikiater'}
              onPress={() => navigation.navigate('ChooseDoctor')}
            />
            <DoctorCategory
              title={'Dokter Obat'}
              onPress={() => navigation.navigate('ChooseDoctor')}
            />
            <DoctorCategory
              title={'Dokter Anak'}
              onPress={() => navigation.navigate('ChooseDoctor')}
            />
          </View>
        </ScrollView>

        <Text style={styles.h2}>Top Rated Doctors</Text>
        <RatedDoctor />
        <RatedDoctor />
        <RatedDoctor />

        <Text style={styles.h2}>Good News</Text>
        <NewsItem
          title={'Is it safe to stay at home during coronavirus?'}
          date={'today'}
          Icon={DummyNews2}
        />
        <NewsItem
          title={'Consume yellow citrus helps you healthier'}
          date={'today'}
          Icon={DummyNews3}
        />
        <NewsItem
          title={'Learn how to make a proper orange juice at home'}
          date={'today'}
          Icon={DummyNews1}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
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
    marginTop: 30,
    marginBottom: 16,
  },
});
