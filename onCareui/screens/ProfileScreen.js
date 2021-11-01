import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import ProfileCard from '../components/ProfileCard';
import VitalTargets from '../components/VitalTargets';
import ActivityTargets from '../components/ActivityTargets';
import MedPrediction from '../components/MedPrediction';
import Card from '../components/Card';
import Logout from '../assets/icons/profile/logout.svg';
const ProfileScreen = props => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            marginTop: 55,
            alignItems: 'center',
          }}>
          <ProfileCard />
          <VitalTargets name="Vital Targets" />
          <ActivityTargets name="Activity Targets" />
          <View style={{width: '95%', alignItems: 'center'}}>
            <Card style={styles.main}>
              <View style={styles.out}>
                <Logout />
              </View>
              <Text style={styles.outtxt}>Logout</Text>
            </Card>
          </View>
          <View style={{marginTop: 50}}></View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    margin: 20,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
  out: {
    paddingRight: 12.5,
  },
  outtxt: {
    fontSize: 14,
    color: '#842252',
    fontFamily: 'Montserrat-Medium',
  },
  container: {
    backgroundColor: '#DADEE5',
  },
});

export default ProfileScreen;
