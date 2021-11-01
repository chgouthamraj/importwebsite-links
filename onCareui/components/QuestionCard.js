import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Card from '../components/Card';
import {useNavigation} from '@react-navigation/native';
const QuestionCard = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('questionnairelabel')}>
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
                paddingTop: 8,
                paddingLeft: 10,
                fontfamily: 'Montserrat-Medium',
              }}>
              <Text style={styles.txt}>{props.question}</Text>
              <Text style={styles.dum}>{props.dummy}</Text>
            </View>
          </View>
          <View style={{paddingTop: 10, paddingRight: 18}}>
            <Text>{props.arrow}</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
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
  txt: {
    fontFamily: 'Montserrat-Medium',
    color: '#333333',
    fontSize:14
  },
  dum: {
    fontFamily: 'Montserrat-Medium',
    color: '#333333',
    fontSize:14
  },
});

export default QuestionCard;
