import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Card from './Card';
import Backarrow from '../assets/icons/backward-arrow.svg';
// import Forward from '../assets/icons/foward-arrow.svg';
import Forward from '../assets/icons/forward-arrow.svg';

const Date = props => {
  return (
    <View>
      <View>
        <Card style={styles.topcard}>
          <TouchableOpacity>
            <View style={{paddingRight: 75}}>
              <Text
                style={{fontFamily: 'Montserrat-SemiBold', color: '#842252'}}>
                Day
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View>
              <Text
                style={{fontFamily: 'Montserrat-SemiBold', color: '#842252'}}>
                Week
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{paddingLeft: 75}}>
              <Text
                style={{fontFamily: 'Montserrat-SemiBold', color: '#842252'}}>
                Month
              </Text>
            </View>
          </TouchableOpacity>
        </Card>
      </View>

      <Card style={styles.sndcard}>
        <View>{<Backarrow />}</View>
        <View>
          <Text style={{fontFamily: 'Montserrat-Medium', color: '#333333'}}>
            Monday,January 15
          </Text>
        </View>
        <View>{<Forward />}</View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  topcard: {
    marginTop: 10,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 60,
    borderRadius: 2,
  },
  sndcard: {
    width: '80%',
    height: 50,
    backgroundColor: '#FAFBFC',
    marginLeft: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default Date;
