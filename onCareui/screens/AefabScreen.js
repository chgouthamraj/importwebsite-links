/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Aefab from '../assets/icons/ae-screen/ae-fab.svg';

function AefabScreen() {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: 'hidden',
        alignItems: 'flex-end',
      }}>
      <View>
        <Aefab />
      </View>
    </View>
  );
}

export default AefabScreen;
