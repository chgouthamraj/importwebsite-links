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
    <Card style={styles.med}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 35,
          justifyContent: 'space-evenly',
        }}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: props.bgmColor,
            height: 30,
            borderBottomEndRadius: 15,
            borderTopEndRadius: 15,
            borderWidth: 1,
          }}>
          <View style={{marginTop: 8, paddingRight: 15, paddingLeft: 10}}>
            {props.iconName}
          </View>
        </View>

        <View style={{margintop: 45, paddingLeft: 10, padding: 4}}>
          <Text style={{fontFamily: 'Montserrat-Medium'}}>
            {props.medtitle}
          </Text>
        </View>

        <View style={{paddingLeft: 45}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingRight: 10, paddingTop: 7.5}}>
              {props.sunmorningIcon}
            </View>
            <View>
              <Text>{props.sunmorningtime}</Text>
              <View style={{paddingLeft: 8, paddingTop: 7.5}}>
                {props.SunmorningRightIcon || props.sunmorningWrongIcon}
              </View>
            </View>
          </View>
        </View>

        <View style={{paddingLeft: 20}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingRight: 10, paddingTop: 7.5}}>
              {props.sunafternoonIcon}
            </View>
            <View>
              <Text>{props.sunafternoontime}</Text>
              <View style={{paddingLeft: 8, paddingTop: 7.5}}>
                {props.sunafternoonRightIcon || props.SunafternoonWrongIcon}
              </View>
            </View>
          </View>
        </View>

        <View style={{paddingLeft: 20}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingRight: 10, paddingTop: 7.5}}>
              {props.nightIcon}
            </View>
            <View>
              <Text>{props.nighttime}</Text>
              <View style={{paddingLeft: 8, paddingTop: 7.5}}>
                {props.nightRightIcon || props.nightWrongIcon}
              </View>
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  med: {
    marginTop: 25,
    marginLeft: 10,
    height: 95,
    padding: 0,
  },
});

export default MedCard;
