import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
const img = '../assets/backgrounds/AuthBackground.png';
import {useNavigation} from '@react-navigation/core';
const ResetPassword = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require(img)} style={styles.image}>
      <View
        style={{
          flex: 1,
          width: '100%',
          paddingLeft: 20,
          justifyContent: 'center',
        }}>
        <View style={styles.logo}>
          <Image source={require('../assets/backgrounds/splash_logo.png')} />
        </View>
        <View style={styles.reset}>
          <Text style={{color: '#989A9B', fontSize: 18}}>Reset Password</Text>
        </View>
        <View style={{marginBottom: 90}}>
          <TextInput style={styles.input} placeholder="New Password" />
          <TextInput
            style={styles.input}
            placeholder="Re-enter New Password"
            secureTextEntry
          />
          <View style={styles.main}>
            <View style={{margin: 10}}></View>
            <View style={styles.login}>
              <Text style={{color: 'white'}}>Update password</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    paddingLeft: 30,
    margin: 10,
    borderRadius: 30,
    height: 45,
  },
  main: {
    alignItems: 'center',
  },
  logo: {
    marginBottom: 60,
    alignItems: 'center',
  },
  login: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#842252',
    borderRadius: 20,
  },
  reset: {
    alignItems: 'center',
    paddingBottom: 10,
  },
});
