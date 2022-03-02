import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ILChatDokAnak,
  ILChatDokObat,
  ILChatDokPsikiater,
  ILChatDokUmum,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function DoctorCategory({title}) {
  const Icon = () => {
    if (title === 'Dokter Umum') {
      return <ILChatDokUmum />;
    }
    if (title === 'Psikiater') {
      return <ILChatDokPsikiater />;
    }
    if (title === 'Dokter Obat') {
      return <ILChatDokObat />;
    }
    if (title === 'Dokter Anak') {
      return <ILChatDokAnak />;
    }
    return <ILChatDokUmum />;
  };
  return (
    <View style={styles.container}>
      <Icon />
      <View style={{height: 28}} />
      <Text style={styles.label}>Saya Butuh</Text>
      <Text style={styles.value}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#EDFCFD',
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
  },
  label: {
    fontFamily: fonts.primary.light,
    fontSize: 12,
    color: colors.text.black,
  },
  value: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 12,
    color: colors.text.black,
  },
});
