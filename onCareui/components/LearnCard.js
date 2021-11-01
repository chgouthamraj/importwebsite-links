import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Card from '../components/Card';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {useNavigation} from '@react-navigation/native';
const LearnCard = props => {
  return (
    <View style={{alignItems: 'center'}}>
      <Card style={{...styles.med, ...props.style}}>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 20,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={[styles.vw, {backgroundColor: props.bgmColor}]}>
              <View style={{marginTop: 14, paddingLeft: 18}}>
                {props.iconName}
              </View>
            </View>
            <View
              style={{
                paddingTop: 12,
                paddingLeft: 10,
              }}>
              <Text style={{fontFamily: 'Montserrat-Medium', color: '#333333'}}>
                {props.name}
              </Text>
            </View>
          </View>
          <View style={{paddingTop: 10, paddingRight: 18}}>
            <Text>{props.arrow}</Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  med: {
    marginTop: 25,
    height: 90,
    padding: 0,
  },
  vw: {
    backgroundColor: 'yellow',
    height: 50,
    width: 50,
    borderBottomEndRadius: 25,
    borderTopEndRadius: 25,
  },
});

export default LearnCard;
