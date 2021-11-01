import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import Card from '../components/Card';
import Pillblue from '../assets/icons/pill-blue.svg';
import {FlatList} from 'react-native-gesture-handler';
const Data = [
  {
    id: 1,
    bgm: '#8DDEE7',
    icon: <Pillblue />,
    time: '6:30 pm',
    message: 'Vitamin D',
  },
  {
    id: 2,
    bgm: '#8DDEE7',
    icon: <Pillblue />,
    time: '6:39 pm',
    message: 'Omega 3',
  },
  {
    id: 3,
    bgm: '#8DDEE7',
    icon: <Pillblue />,
    time: '2:05 pm',
    message: 'Calquence',
  },
  {
    id: 4,
    bgm: '#8DDEE7',
    icon: <Pillblue />,
    time: '2:09pm',
    message: 'Omega 3',
  },
];

const NotifyCard = ({icon, time, message, bgm}) => {
  return (
    <View>
      <View style={{padding: 5}}>
        <View style={{alignItems: 'flex-end'}}>
          <Text
            style={{
              fontFamily: 'Montserrat-Light',
              color: '#757575',
              fontSize: 9,
            }}>
            {time}
          </Text>
        </View>
        <View style={[styles.top]}>
          <View style={[styles.main, {backgroundColor: bgm}]}>
            <View>{icon}</View>
          </View>
          <Text
            style={{
              padding: 5,
              fontFamily: 'Montserrat-Light',
              color: '#757575',
              fontSize: 12.5,
            }}>
            Have you taken <Text style={{color: bgm}}>{message}</Text> post
            Lunch?
          </Text>
        </View>
      </View>
    </View>
  );
};

const NotificationsScreen = props => {
  const list = () => {
    return Data.map((element, i) => {
      return (
        <View>
          <NotifyCard
            bgm={element.bgm}
            icon={element.icon}
            time={element.time}
            message={element.message}
          />
          <View
            style={i === Data.length - 1 ? styles.noBorder : styles.Empty}
            key={i}></View>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Card style={styles.crd}>
        <View style={styles.mark}>
          <Text style={styles.txt}>Mark all as read</Text>
        </View>

        <View style={styles.Empty} />
        <View>{list()}</View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DADEE5',
    alignItems: 'center',
  },
  mark: {
    alignItems: 'flex-end',
    padding: 5,
  },
  txt: {
    fontSize: 13.5,
    color: '#A23F7C',
    fontFamily: 'Montserrat-Medium',
  },
  main: {
    width: 45,
    height: 45,
    backgroundColor: '#EFFCF8',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 22.5,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginTop: -20,
  },
  Empty: {
    borderWidth: 1,
    borderColor: '#f1f1f1',
  },
  crd: {
    padding: 3,
  },
});

export default NotificationsScreen;
