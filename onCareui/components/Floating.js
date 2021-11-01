/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Aefab from '../assets/icons/ae-screen/ae-fab.svg';
import {useNavigation} from '@react-navigation/core';
const Floating = props => {
  const navigation = useNavigation();

  const advEvent = () => {
    navigation.navigate('adverseevents');
  };
  return (
    <View>
      <TouchableOpacity style={styles.main} onPress={advEvent}>
        <Aefab size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: '#842252',
    borderRadius: 100,
  },
});
export default Floating;
