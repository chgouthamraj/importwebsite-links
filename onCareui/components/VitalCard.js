import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import Pillblue from '../assets/icons/pill-blue.svg';
import Pillgray from '../assets/icons/pill-gray.svg';
import Pillgreen from '../assets/icons/pill-green.svg';
import Sunmorning from '../assets/icons/sun-morning.svg';
import Sunafternoon from '../assets/icons/sun-afternoon.svg';
import Night from '../assets/icons/night.svg';
import Tick from '../assets/icons/active-tick.svg';
import Cross from '../assets/icons/active-cross.svg';
import Card from '../components/Card';
const MedCard = props => {
  return (
    <View>
      <Card style={styles.med}>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 21,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={[styles.vw, {backgroundColor: props.bgmColor}]}>
              <View style={{marginTop: 15, paddingRight: 18, paddingLeft: 20}}>
                {props.iconName}
              </View>
            </View>
            <View
              style={{
                paddingTop: 16,
                paddingLeft: 10,
              }}>
              <Text style={styles.title}>{props.medtitle}</Text>
            </View>
          </View>
          <View style={{paddingTop: 16, paddingRight: 18}}>
            <Text style={styles.title}>{props.value}</Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  med: {
    marginTop: 20,
    marginLeft: 10,
    height: 90,
    padding: 0,
    borderRadius: 20,
  },
  vw: {
    backgroundColor: 'yellow',
    height: 50,
    width: 50,
    borderBottomEndRadius: 25,
    borderTopEndRadius: 25,
  },
  title: {
    fontFamily: 'Montserrat-Medium',
    color: '#757575',
  },
});

export default MedCard;
