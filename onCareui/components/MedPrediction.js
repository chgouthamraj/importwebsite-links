import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import Card from './Card';
import Pillblue from '../assets/icons/pill-blue.svg';
import Pillgray from '../assets/icons/pill-gray.svg';
import Pillgreen from '../assets/icons/pill-green.svg';
import Sunmorning from '../assets/icons/sun-morning.svg';
import Sunafternoon from '../assets/icons/sun-afternoon.svg';
import Night from '../assets/icons/night.svg';
import Tick from '../assets/icons/active-tick.svg';
import Cross from '../assets/icons/active-cross.svg';
import MedCard from '../components/MedPredCard';
import MedPredCard from '../components/MedPredCard';

const MedPrediction = props => {
  return (
    <Card
      style={{
        padding: 5,
        paddingLeft: 0,
        marginTop: 20,
        borderRadius: 18,
      }}>
      <View style={{padding: 5}}>
        <Text
          style={{
            fontSize: 15,
            padding: 10,
            fontFamily: 'Montserrat-Medium',
            color: '#404040',
          }}>
          Meds Tracker
        </Text>
      </View>
      <MedPredCard
        iconName={<Pillgreen />}
        medtitle="Omega 3"
        bgmColor="#F9FBE5"
        sunmorningtime="8:00"
        sunmorningIcon={<Sunmorning />}
        SunmorningRightIcon={<Tick />}
        sunafternoontime="2:00"
        sunafternoonIcon={<Sunafternoon />}
        sunafternoonRightIcon={<Tick />}
        nightIcon={<Night />}
        nighttime="9:00"
        nightWrongIcon={<Cross />}
      />
      <View
        style={{
          margin: 5,
          borderWidth: 1,
          borderColor: '#ECECEC',
        }}></View>

      <MedPredCard
        iconName={<Pillblue />}
        medtitle="Calqence"
        bgmColor="#EFFBFC"
        sunafternoontime="2:00"
        sunafternoonIcon={<Sunafternoon />}
        sunafternoonRightIcon={<Tick />}
      />

      <View
        style={{
          margin: 5,
          borderWidth: 1,
          borderColor: '#ECECEC',
        }}></View>

      <MedPredCard
        medtitle="Vitamin D"
        iconName={<Pillgray />}
        bgmColor="#F5F7F7"
        sunmorningtime="8:00"
        sunmorningIcon={<Sunmorning />}
        SunmorningRightIcon={<Tick />}
        nightIcon={<Night />}
        nighttime="9:00"
        nightWrongIcon={<Cross />}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
});

export default MedPrediction;
