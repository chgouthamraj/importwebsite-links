import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import VitalCard from '../components/VitalCard';
import Heart from '../assets/icons/heart-rate.svg';
import Spo2 from '../assets/icons/spo2.svg';
import Temperature from '../assets/icons/high-temperature.svg';
import Blood from '../assets/icons/blood-icon.svg';
import {ScrollView} from 'react-native-gesture-handler';
import Date from '../components/Date';
import Header from '../components/Header';
import Floating from '../components/Floating';
const Data = [
  {
    id: 1,
    name: 'Heart Rate',
    pic: <Heart />,
    value: '93bpm',
    color: '#FCEBEC',
  },
  {id: 2, name: 'Spo2', pic: <Spo2 />, value: '95%', color: '#FDF7E5'},
  {
    id: 3,
    name: 'Temperature',
    pic: <Temperature />,
    value: '97.8f',
    color: '#EFFBFC',
  },
  {
    id: 4,
    name: 'Blood Pressure',
    pic: <Blood />,
    value: '130/80 mmHg ',
    color: '#FDF1EE',
  },
];

const VitalsScreen = props => {
  const list = () => {
    return Data.map(element => {
      return (
        <VitalCard
          medtitle={element.name}
          iconName={element.pic}
          value={element.value}
          bgmColor={element.color}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <Header screenName="Vitals Tracker" />
      <ScrollView>
        <Date />
        <View>{list()}</View>
        <View style={styles.empty} />
      </ScrollView>
      <Floating />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DADEE5',
    flex: 1,
  },
  empty: {marginTop: 90},
});
export default VitalsScreen;
