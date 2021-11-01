import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  key,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import Card from '../components/Card';
import Happyactive from '../assets/icons/journal/happy-active.svg';
import Happy from '../assets/icons/journal/happy.svg';
import Fine from '../assets/icons/journal/fine.svg';
import Sad from '../assets/icons/journal/sad.svg';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Floating from '../components/Floating';
const JournalScreen = props => {
  return (
    <View>
      <ScrollView style={Styles.scrl}>
        <Card style={Styles.crd}>
          <View style={Styles.main}>
            <View style={{margin: 7}}>
              <Happyactive />
              <View style={{alignItems: 'center'}}>
                <Text>Happy</Text>
              </View>
            </View>
            <View style={{margin: 7}}>
              <Fine />
              <View style={{alignItems: 'center'}}>
                <Text>Fine</Text>
              </View>
            </View>
            <View style={{margin: 7}}>
              <Sad />
              <View>
                <Text style={{alignItems: 'center'}}>Unhappy</Text>
              </View>
            </View>
          </View>
          <View style={Styles.inpt}>
            <TextInput placeholder="Add Details Here..." style={Styles.input} />
            <TouchableOpacity>
              <View style={Styles.container}>
                <Text style={Styles.sbt}>SUBMIT</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Card>
        <View style={Styles.empty} />
        <Floating />
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  main: {
    alignItems: 'center',

  },

  input: {
    margin: 15,
    borderWidth: 1,
    borderColor: '#C1C1C2',
    borderRadius: 5,
    height: 150,
    width: 350,
    paddingBottom: 110,
    paddingLeft: 10,
    fontFamily: 'Montserrat-Regular',
    color: '#333333',
  },
  container: {
    backgroundColor: '#842252',
    width: 120,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  scrl: {backgroundColor: '#DADEE5', height: '100%'},
  crd: {margin: 10, marginTop: 25, padding: 20},
  
  inpt: {alignItems: 'center'},
  empty: {marginTop: 100},
  sbt: {color: 'white'},
});
export default JournalScreen;
