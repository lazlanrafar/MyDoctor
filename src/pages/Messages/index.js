import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import ListChat from '../../components/molecules/ListChat';

export default function Messages() {
  const [doctors] = React.useState([
    {
      id: 1,
      name: 'Alexander Jannie',
      avatar: require('../../assets/dummy/doctor1.png'),
      lastMessage: 'Baik ibu, terima kasih banyak atas waktumu',
    },
    {
      id: 2,
      name: 'Nairobi Putri Hayza',
      avatar: require('../../assets/dummy/doctor2.png'),
      lastMessage: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      name: 'John McParker Steve',
      avatar: require('../../assets/dummy/doctor3.png'),
      lastMessage: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);
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
        {doctors.map(doctor => {
          return (
            <ListChat
              id={doctor.id}
              name={doctor.name}
              avatar={doctor.avatar}
              lastMessage={doctor.lastMessage}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
