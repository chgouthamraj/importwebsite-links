import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import MenuUtil from '../components/MenuUtil';
import Journal from '../assets/icons/more/journal.svg';
import Questionnaire from '../assets/icons/more/questionnaire.svg';
import Medfriend from '../assets/icons/more/med-friend.svg';
import Learn from '../assets/icons/more/Learn.svg';
import Messages from '../assets/icons/more/messages.svg';
import AE from '../assets/icons/more/AE.svg';
import Header from '../components/Header';
import LoginScreen from './LoginScreen';
import {ScrollView} from 'react-native-gesture-handler';
const MoreScreen = ({navigation}) => {
  const toMove = () => {
    navigation.navigate('journal');
  };

  const toQuestion = () => {
    navigation.navigate('questionnaire');
  };

  const toMessage = () => {
    navigation.navigate('messages');
  };

  const toAdverse = () => {
    navigation.navigate('adverseevents');
  };

  const toLearn = () => {
    navigation.navigate('learn');
  };

  const toMed = () => {
    navigation.navigate('medfriend');
  };

  const toLogin = () => {
    navigation.navigate('LoginScreen');
  };
  

  return (
    <ScrollView>
      <Header screenName="Jenny Doe" />
      <View Style={styles.container}>
        <View style={styles.main}></View>
        <MenuUtil iconName={<Journal />} title="Journal" onSelect={toMove} />
        <MenuUtil
          iconName={<Questionnaire />}
          title="Questionnaire"
          onSelect={toQuestion}
        />
        <MenuUtil
          iconName={<Messages />}
          title="Messages"
          onSelect={toMessage}
        />
        <MenuUtil
          iconName={<AE />}
          title="Adverse Events"
          onSelect={toAdverse}
        />
        <MenuUtil iconName={<Learn />} title="Learn" onSelect={toLearn} />
        <MenuUtil
          iconName={<Medfriend />}
          title="Med Friend"
          onSelect={toMed}
        />

        <MenuUtil title="LoginScreen" onSelect={toLogin} />

        <View style={{marginTop:40}}></View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  main: {marginBottom: 20},
});

export default MoreScreen;
