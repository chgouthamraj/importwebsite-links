import React from 'react';
import {View, StyleSheet} from 'react-native';
import Pillblue from '../assets/icons/pill-blue.svg';
import Pillgray from '../assets/icons/pill-gray.svg';
import Pillgreen from '../assets/icons/pill-green.svg';
import Sunmorning from '../assets/icons/sun-morning.svg';
import Sunafternoon from '../assets/icons/sun-afternoon.svg';
import Night from '../assets/icons/night.svg';
import Tick from '../assets/icons/active-tick.svg';
import Cross from '../assets/icons/active-cross.svg';
import {ScrollView} from 'react-native-gesture-handler';
import Date from '../components/Date';
import Header from '../components/Header';
import SampleCard from '../components/SampleCard';
import Floating from '../components/Floating';
const MedsScreen = props => {
  return (
    <View style={styles.container}>
      <Header screenName="Meds Tracker" />
      <ScrollView>
        <Date />
        <SampleCard
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

        <SampleCard
          iconName={<Pillblue />}
          medtitle="Calqence"
          bgmColor="#EFFBFC"
          sunafternoontime="2:00"
          sunafternoonIcon={<Sunafternoon />}
          sunafternoonRightIcon={<Tick />}
        />

        <SampleCard
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

        <View style={styles.empty} />
      </ScrollView>
      <Floating />
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    height: 40,
    padding: 5,
  },
  topcard: {
    marginTop: 20,
    marginLeft: 10,
  },
  med: {
    marginTop: 25,
    marginLeft: 10,
    height: 95,
    padding: 0,
  },
  container: {backgroundColor: '#DADEE5', flex: 1},
  empty: {marginTop: 90},
});

export default MedsScreen;
