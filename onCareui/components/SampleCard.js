import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Card from '../components/Card';

const SampleCard = props => {
  return (
    <View>
      <Card style={styles.med}>
        <View style={{flexDirection: 'row', paddingTop: 10}}>
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
            <Text style={{fontFamily: 'Montserrat-Medium', color: '#757575'}}>
              {props.medtitle}
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            paddingTop: 22,
            paddingRight: 18,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  med: {
    marginTop: 20,
    marginLeft: 10,
    height: 90,
    padding: 10,
    paddingLeft: 0,
    flexDirection: 'row',
    borderRadius: 20,
  },
  vw: {
    backgroundColor: 'yellow',
    height: 50,
    width: 50,
    borderBottomEndRadius: 25,
    borderTopEndRadius: 25,
  },
});

export default SampleCard;
