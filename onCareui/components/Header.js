import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Oncare from '../assets/icons/oncare360.svg';
import Alert from '../assets/icons/ae-screen/alert.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Notify from '../assets/icons/notification-active.svg';
const Header = ({screenName}) => {
  const navigation = useNavigation();
  const toProf = () => {
    navigation.navigate('profile');
  };
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Oncare />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 2,
            paddingRight: 24,
          }}>
          <View style={{paddingRight: 25}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('notification')}>
              <Notify />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={toProf}>
            <View style={styles.img}>
              <Image
                style={styles.imglr}
                source={require('../assets/images/profile.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.title}>{screenName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '15%',
    marginTop: 10,
    padding: 2,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  logo: {
    width: 150,
    height: 35.66,
    paddingLeft: 9,
  },
  img: {
    width: 36,
    height: 36,
    borderRadius: 25,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Montserrat-Light',
    fontSize: 24,
    fontWeight: '300',
    color: '#333333',
    paddingLeft: 9,
    paddingTop: 11.5,
  },
  imglr: {
    width: 36,
    height: 36,
  },
});

export default Header;
