import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Card from './Card';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
function ProfileCard(params) {
  return (
    <Card>
      <Image
        style={styles.avatar}
        source={require('../assets/images/profile.png')}
      />
      <Text style={styles.name}>Jenny Doe</Text>
      <View style={{padding: 10, paddingTop: 10}}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#C8C8C8',
            margin: 2,
            marginBottom: 10,
          }}></View>
        <Text style={styles.heading}>Date of Birth:</Text>
        <Text style={styles.bio}>01-May-1990</Text>
        <Text style={styles.heading}>Phone Number:</Text>
        <Text style={styles.bio}>+00-9876543210</Text>
        <Text style={styles.heading}>Alternate Phone Number:</Text>
        <Text style={styles.bio}>+00-9876543210</Text>
        <Text style={styles.heading}>Height:</Text>
        <Text style={styles.bio}>160cm</Text>
        <Text style={styles.heading}>Weight:</Text>
        <Text style={styles.bio}>78 lb</Text>
        <Text style={styles.heading}>Email Id:</Text>
        <Text style={styles.bio}>Jenny.doe@mail.com</Text>
      </View>
    </Card>
  );
}
export default ProfileCard;

const styles = StyleSheet.create({
  avatar: {
    width: 87,
    height: 81,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    position: 'absolute',
    marginTop: -40,
    borderColor: '#FFFFFF',
    borderWidth: 5,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  name: {
    paddingLeft: 130,
    fontSize: 18,
    color: '#842252',
    paddingTop: 10,
    fontFamily: 'Montserrat-Medium',
  },
  bio: {
    fontSize: 14,
    color: '#842252',
    padding: 2,
    fontFamily: 'Montserrat-Light',
  },
  heading: {
    fontSize: 12,
    padding: 2,
    fontFamily: 'Montserrat-Medium',
  },
});
