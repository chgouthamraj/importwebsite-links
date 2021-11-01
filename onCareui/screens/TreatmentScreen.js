import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import LearnCard from '../components/LearnCard';
import Treatment from '../assets/icons/learn/treatment.svg';
import Forward from '../assets/icons/forward-arrow.svg';
import {useNavigation} from '@react-navigation/core';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Floating from '../components/Floating';
const TreatmentScreen = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('leukemia');
          }}>
          <LearnCard
            bgmColor="#F0FCFC"
            iconName={<Treatment />}
            arrow={<Forward />}
            name="Leukeia-Treatment"
          />
        </TouchableOpacity>
        <LearnCard
          bgmColor="#F0FCFC"
          iconName={<Treatment />}
          arrow={<Forward />}
          name="Basal Cell cancer - Treatment"
        />
      </ScrollView>
      <Floating />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DADEE5',
  },
});

export default TreatmentScreen;
