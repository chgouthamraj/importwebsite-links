import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import Card from './Card';
import Heart from '../assets/icons/heart-rate.svg';
import Spo2 from '../assets/icons/spo2.svg';
import Temperature from '../assets/icons/high-temperature.svg';
import Blood from '../assets/icons/blood-icon.svg';
const VitalTargets = props => {
  return (
    <Card style={styles.main1}>
      <View style={{width: '99%'}}>
        <View>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              fontFamily: 'Montserrat-Medium',
              fontSize: 15,
              padding: 10,
              color: '#404040',
            }}>
            {props.name}
          </Text>
        </View>

        <View style={{...styles.main}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingRight: 10, marginTop: 4}}>
              <Heart />
            </View>
            <View>
              <Text style={{fontFamily: 'Montserrat-Medium', color: '#979797'}}>
                {' '}
                Heart Rate
              </Text>
            </View>
          </View>
          <View>
            <Text style={{fontFamily: 'Montserrat-Medium', color: '#656565'}}>
              {' '}
              79bpm
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#ECECEC',
            borderBottomWidth: 2,
          }}
        />

        <View style={{...styles.main}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingRight: 10, marginTop: 4}}>
              <Spo2 />
            </View>
            <View>
              <Text style={{fontFamily: 'Montserrat-Medium', color: '#979797'}}>
                {' '}
                Spo2
              </Text>
            </View>
          </View>
          <View>
            <Text style={{fontFamily: 'Montserrat-Medium', color: '#656565'}}>
              {' '}
              93%
            </Text>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: '#ECECEC',
            borderBottomWidth: 2,
          }}
        />
        <View style={{...styles.main}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingRight: 10, marginTop: 4}}>
              <Temperature />
            </View>
            <View>
              <Text style={{fontFamily: 'Montserrat-Medium', color: '#979797'}}>
                Temperature
              </Text>
            </View>
          </View>
          <View>
            <Text style={{fontFamily: 'Montserrat-Medium', color: '#656565'}}>
              {' '}
              98.9F
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#ECECEC',
            borderBottomWidth: 2,
          }}
        />

        <View style={{...styles.main}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingRight: 10, marginTop: 4}}>
              <Blood />
            </View>
            <View>
              <Text style={{fontFamily: 'Montserrat-Medium', color: '#979797'}}>
                Blood Pressure
              </Text>
            </View>
          </View>
          <View>
            <Text style={{fontFamily: 'Montserrat-Medium', color: '#656565'}}>
              {' '}
              132/84mmHg
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    paddingTop: 22,
    paddingBottom: 22,
  },
  main1: {
    flexDirection: 'row',
    borderRadius: 20,
    marginTop: 20,
  },
});

export default VitalTargets;
