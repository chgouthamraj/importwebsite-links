import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
const img = '../assets/backgrounds/AuthBackground.png';
import {useNavigation} from '@react-navigation/core';
const ForgotScreen = () => {
  const navigation = useNavigation();

  const toReset = () => {
    navigation.navigate('ResetPassword');
  };

  const toLogin = () => {
    navigation.navigate('LoginScreen');
  };
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
        <View style={{marginBottom: 90}}>
          <View style={{marginBottom: 15, alignItems: 'center'}}>
            <View style={{padding: 5}}>
              <Text style={{color: '#757678', fontSize: 18}}>
                Forgot Password?
              </Text>
            </View>
            <Text style={{color: '#4F4F4F'}}>
              Enter your registered email below
              {'\n'}
              to receive password reset instructions
            </Text>
          </View>
          <TextInput style={styles.input} placeholder="Email Address" />
          <View style={styles.main}>
            <View
              style={{
                margin: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={toLogin}>
                <Text style={{color: '#4F4F4F'}}>Remember Password?</Text>
              </TouchableOpacity>
              <View style={{paddingLeft: 5}}>
                <TouchableOpacity onPress={toLogin}>
                  <Text style={{fontSize: 18, color: '#842252'}}>login</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.login}>
              <TouchableOpacity onPress={toReset}>
                <Text style={{color: 'white'}}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ForgotScreen;

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
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#842252',
    borderRadius: 20,
  },
});
