import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import LearnCard from '../components/LearnCard';
import Forward from '../assets/icons/forward-arrow.svg';
import Disease from '../assets/icons/learn/disease.svg';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import Floating from '../components/Floating';
const DiseaseScreen = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('leukemia');
          }}>
          <LearnCard
            bgmColor="#FDF7E5"
            iconName={<Disease />}
            arrow={<Forward />}
            name="Leukemia"
          />
        </TouchableOpacity>
        <LearnCard
          bgmColor="#FDF7E5"
          iconName={<Disease />}
          arrow={<Forward />}
          name="Basal cell Cancer"
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

export default DiseaseScreen;
