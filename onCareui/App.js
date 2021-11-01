import React from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Aefab from './assets/icons/ae-screen/ae-fab.svg';
import Tabnavigator from './navigation/Tabnavigator';
import MoreStack from './navigation/MoreStack';

export default function App(navigation) {
  return (
    <NavigationContainer>
      <MoreStack />
    </NavigationContainer>
  );
}
