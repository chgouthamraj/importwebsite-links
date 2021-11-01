import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import MedCard from '../components/MedCard';
import VitalCard from '../components/VitalCard';
import Steps from '../assets/icons/steps.svg';
import Sleep from '../assets/icons/sleep.svg';
import Exercise from '../assets/icons/exercise.svg';
import Date from '../components/Date';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../components/Header';
import Floating from '../components/Floating';

const ActivityScreen = props => {
  return (
    <View style={styles.main}>
      <Header screenName="Activity Tracker" />

      <ScrollView>
        <Date />
        <View style={styles.top} />
        <View>
          <VitalCard
            medtitle="Steps"
            iconName={<Steps />}
            value="3200(80%)"
            bgmColor={'#F9FBE5'}
          />
          <VitalCard
            medtitle="Exercise"
            iconName={<Exercise />}
            value="42min(136%)"
            bgmColor={'#F9FBE5'}
          />

          <VitalCard
            medtitle="Sleep"
            iconName={<Sleep />}
            value="8hrs (100%)"
            bgmColor={'#EFFBFC'}
          />
        </View>
      </ScrollView>
      <Floating />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  main: {backgroundColor: '#DADEE5', flex: 1},
  top: {marginBottom: 10},
});

export default ActivityScreen;
