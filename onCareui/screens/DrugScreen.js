import React from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import LearnCard from '../components/LearnCard';
import Forward from '../assets/icons/forward-arrow.svg';
import Pillblue from '../assets/icons/pill-blue.svg';
import {useNavigation} from '@react-navigation/core';
import Floating from '../components/Floating';
import {ScrollView} from 'react-native-gesture-handler';
const Data = [
  {name: 'Omega 3', pic: <Pillblue />},
  {name: 'Calquence', pic: <Pillblue />},
  {name: 'Calquence', pic: <Pillblue />},
];

const DrugScreen = props => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <LearnCard
        bgmColor="#F0FCFC"
        iconName={item.pic}
        arrow={<Forward />}
        name={item.name}
      />
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('omega3');
        }}>
        <LearnCard
          bgmColor="#F0FCFC"
          iconName={<Pillblue />}
          arrow={<Forward />}
          name="Omega 3"
        />
      </TouchableOpacity>

      <FlatList data={Data} renderItem={renderItem} />
      <Floating />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DADEE5',
    flex: 1,
  },
});

export default DrugScreen;
