import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Exercise from '../assets/icons/exercise.svg';

const MenuUtil = ({iconName, title, onSelect}) => {
  return (
    <View>
      <TouchableOpacity onPress={onSelect}>
        <View style={styles.container}>
          <View style={styles.icon}>{iconName}</View>
          <Text style={{paddingLeft: 25, fontFamily: 'Montserrat-medium'}}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{marginTop: 0.75}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingLeft: 20,
  },
  icon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#F4F5F8',
  },
});

export default MenuUtil;
