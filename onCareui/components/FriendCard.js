import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import Card from '../components/Card';
const FriendCard = props => {
  return (
    <Card style={{...styles.med, ...props.style}}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 20,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={[styles.vw, {backgroundColor: props.bgmColor}]}>
            <View style={{marginTop: 10, paddingLeft: 18}}>
              {props.iconName}
            </View>
          </View>
          <View
            style={{
              paddingTop: 16,
              paddingLeft: 10,
              fontfamily: 'Montserrat-Medium',
            }}>
            <Text
              style={{
                fontFamily: 'Montserrat-Light',
                fontSize: 14,
                color: '#333333',
              }}>
              {props.name}
            </Text>
          </View>
        </View>
        <View style={{paddingTop: 10, paddingRight: 18}}>
          <Text>{props.arrow}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  med: {
    marginTop: 25,
    marginLeft: 10,
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

export default FriendCard;
