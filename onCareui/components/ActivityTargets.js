import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import Steps from '../assets/icons/steps.svg';
import Sleep from '../assets/icons/sleep.svg';
import Exercise from '../assets/icons/exercise.svg';
import Card from './Card';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ActivityTargets = props => {
  return (
    <Card style={styles.main1}>
      <View style={{width: '99%'}}>
        <View>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              fontFamily: 'Montserrat-semibold',
              fontSize: 15,
              padding: 10,
              fontFamily: 'Montserrat-Medium',
              color: '#404040',
            }}>
            {props.name}
          </Text>
        </View>

        <View style={{...styles.main}}>
          <View style={{flexDirection: 'row', marginTop: 1}}>
            <View style={{paddingRight: 10, marginTop: 4}}>
              <Steps />
            </View>
            <View>
              <Text style={{fontFamily: 'Montserrat-Medium', color: '#757575'}}>
                {' '}
                Steps
              </Text>
            </View>
          </View>
          <View>
            <Text style={{fontFamily: 'Montserrat-Medium', color: '#656565'}}>
              {' '}
              3200(80%)
            </Text>
          </View>
        </View>
        <View
          style={{
            borderColor: '#ECECEC',
            borderWidth: 1,
          }}
        />

        <View style={{...styles.main}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingRight: 10, marginTop: 4}}>
              <Exercise />
            </View>
            <View>
              <Text style={{fontFamily: 'Montserrat-Medium', color: '#757575'}}>
                {' '}
                Exercise
              </Text>
            </View>
          </View>
          <View>
            <Text style={{fontFamily: 'Montserrat-Medium', color: '#656565'}}>
              {' '}
              42min(136%)
            </Text>
          </View>
        </View>

        <View
          style={{
            borderColor: '#ECECEC',
            borderWidth: 1,
          }}
        />

        <View style={{...styles.main}}>
          <View style={{flexDirection: 'row', marginTop: 1}}>
            <View style={{paddingRight: 10, marginTop: 4}}>
              <Sleep />
            </View>
            <View>
              <Text style={{fontFamily: 'Montserrat-Medium', color: '#757575'}}>
                {' '}
                Sleep
              </Text>
            </View>
          </View>
          <View>
            <Text style={{fontFamily: 'Montserrat-Medium', color: '#656565'}}>
              {' '}
              8hrs(100%)
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
    borderRadius: 18,
    marginTop: 20,
  },
});

export default ActivityTargets;
