import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Forward from '../assets/icons/forward-arrow.svg';
import Disease from '../assets/icons/learn/disease.svg';
import Floating from '../components/Floating';
import LearnCard from '../components/LearnCard';
import Drug from '../assets/icons/learn/drugs.svg';
import Treatment from '../assets/icons/learn/treatment.svg';
import Newsfeed from '../assets/icons/learn/newsfeed.svg';
import Syringe from '../assets/icons/learn/syringe.svg';
import {useNavigation} from '@react-navigation/native';
const LearnScreen = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <TouchableOpacity onPress={() => navigation.navigate('drug')}>
          <LearnCard
            bgmColor="#F0FCFC"
            iconName={<Drug />}
            arrow={<Forward />}
            name="Drug"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('disease');
          }}>
          <LearnCard
            bgmColor="#FDF7E5"
            iconName={<Disease />}
            arrow={<Forward />}
            name="Disease"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('treatment');
          }}>
          <LearnCard
            bgmColor="#F0FCFC"
            iconName={<Syringe />}
            arrow={<Forward />}
            name="Treatment"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('newsfeed');
          }}>
          <LearnCard
            bgmColor="#FDF7E5"
            iconName={<Newsfeed />}
            arrow={<Forward />}
            name="NewsFeed"
          />
        </TouchableOpacity>
      </ScrollView>
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

export default LearnScreen;
