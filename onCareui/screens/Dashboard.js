import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import Header from '../components/Header';
import ActivityTargets from '../components/ActivityTargets';
import Date from '../components/Date';
import Floating from '../components/Floating';
import VitalTargets from '../components/VitalTargets';
import MedPrediction from '../components/MedPrediction';
const Dashboard = props => {
  const fab = require('../assets/icons/back-arrow.svg');

  return (
    <View style={styles.container}>
      <Header screenName="DashBoard" />

      <ScrollView>
        <Date />
        <View style={styles.alg}>
          <MedPrediction />
          <ActivityTargets name="Activity Tracker" style={styles.activity} />
          <VitalTargets name="Vitals Tracker" style={styles.activity} />
        </View>

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
  main: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    padding: 10,
    justifyContent: 'space-between',
  },
  main1: {
    flexDirection: 'row',
  },
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#842252',
  },
  activity: {
    width: 365,
  },
  alg: {alignItems: 'center'},
  empty: {marginTop: 90},
});

export default Dashboard;
