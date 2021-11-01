import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Floating from '../components/Floating';
import Card from '../components/Card';
const QuestionLabelScreen = props => {
  return (
    <View>
      <ScrollView style={styles.scrl}>
        <Card style={{margin: 10}}>
          <Text style={styles.pad}>1.Are you Experiencing hearturn?</Text>
          <Card style={styles.yes}>
            <View style={styles.cmd}>
              <Text style={[styles.ys, {color: '#ffff'}]}>yes</Text>
              <Text style={styles.no}>no</Text>
            </View>
          </Card>
          <Text style={styles.pad}>2.Are you Feeling dizzy?</Text>
          <Card style={styles.yes}>
            <View style={styles.cmd}>
              <Text style={[styles.no]}>yes</Text>
              <Text style={[styles.ys, {color: '#ffff'}]}>no</Text>
            </View>
          </Card>
          <Text style={styles.pad}>
            3.How best can you Describe your Condition
          </Text>
          <Card style={styles.crd}>
            <Text style={styles.ans}>No Pain</Text>
          </Card>
          <Card style={styles.crd}>
            <Text style={styles.ans}>Mid Pain</Text>
          </Card>
          <Card style={styles.crd}>
            <Text style={styles.ans} s>
              Moderate Pain
            </Text>
          </Card>
          <Card style={styles.pn}>
            <Text style={[styles.ans, {color: '#ffff'}]}>Severe Pain</Text>
          </Card>
          <Text style={styles.pad}>4.Choose the contions that apply</Text>
          <View style={styles.main}>
            <Card style={{...styles.container, backgroundColor: '#842252'}}>
              <Text style={{color: '#ffff', fontFamily: 'Montserrat-Medium'}}>
                Diarrhea
              </Text>
            </Card>
            <Card style={styles.container}>
              <Text style={{fontFamily: 'Montserrat-Medium', color: '#333333'}}>
                {' '}
                Fever
              </Text>
            </Card>
            <Card style={styles.container}>
              <Text style={{fontFamily: 'Montserrat-Medium', color: '#333333'}}>
                Constipation
              </Text>
            </Card>
          </View>
          <View style={styles.main}>
            <Card style={styles.container}>
              <Text style={{fontFamily: 'Montserrat-Medium', color: '#333333'}}>
                Headache
              </Text>
            </Card>
            <Card style={styles.container}>
              <Text style={{fontFamily: 'Montserrat-Medium', color: '#333333'}}>
                Body pains
              </Text>
            </Card>
            <Card style={{...styles.container, backgroundColor: '#842252'}}>
              <Text style={{color: '#ffff'}}>Shivering</Text>
            </Card>
          </View>
          <View style={styles.main}>
            <Card style={styles.container}>
              <Text style={{color: '#333333'}}>Shoulder Cramps</Text>
            </Card>
            <Card style={styles.container}>
              <Text style={{fontFamily: 'Montserrat-Medium', color: '#333333'}}>
                Shoulder Pain
              </Text>
            </Card>
          </View>
          <Text style={styles.pad}>5.Anything you would like to add?</Text>
          <TextInput
            placeholder="Type Your Comments Here"
            style={styles.inpt}
          />
          <View style={styles.subvw}>
            <TouchableOpacity>
              <View style={styles.submit}>
                <Text style={{color: 'white'}}>SUBMIT</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Card>
        <View style={{marginTop: 75}}></View>
      </ScrollView>
      <Floating />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 4,
    marginTop: 10,
    width: '30%',
    padding: 0,
    height: 30,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  yes: {
    elevation: 4,
    marginTop: 10,
    width: '20%',
    padding: 0,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  inpt: {
    borderWidth: 1,
    borderRadius: 5,
  },
  submit: {
    backgroundColor: '#842252',
    width: 120,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  ys: {flex: 1, backgroundColor: '#842252', padding: 5},
  crd: {
    elevation: 4,
    marginTop: 10,
  },
  cmd: {
    flexDirection: 'row',
    height: 35,
    justifyContent: 'center',
  },
  no: {flex: 1, padding: 5},
  subvw: {alignItems: 'center', padding: 10},
  pad: {paddingTop: 7},
  scrl: {backgroundColor: '#DADEE5'},
  pn: {backgroundColor: '#842252', elevation: 4, marginTop: 10},
  pad: {
    padding: 7,
    fontFamily: 'Montserrat-Medium',
    color: '#333333',
    fontSize: 12,
  },
  ans: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#333333',
  },
});

export default QuestionLabelScreen;
