import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Forward from '../assets/icons/forward-arrow.svg';
import QuestionCard from '../components/QuestionCard';
import Ques from '../assets/icons/questionnaire/questionnaire.svg';
import Floating from '../components/Floating';

import {useNavigation} from '@react-navigation/native';
const QuestionnaireScree = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <QuestionCard
          bgmColor="#F5F7F7"
          iconName={<Ques />}
          arrow={<Forward />}
          question="Questionnaire1 label Text Here"
          dummy="dummy Text here"
        />
        <QuestionCard
          bgmColor="#F5F7F7"
          iconName={<Ques />}
          arrow={<Forward />}
          question="Questionnaire1 label Text Here"
          dummy="dummy Text here"
        />
        <QuestionCard
          bgmColor="#F5F7F7"
          iconName={<Ques />}
          arrow={<Forward />}
          question="Questionnaire1 label Text Here"
          dummy="dummy Text here"
        />
        <QuestionCard
          bgmColor="#F5F7F7"
          iconName={<Ques />}
          arrow={<Forward />}
          question="Questionnaire1 label Text Here"
          dummy="dummy Text here"
        />

        <View style={{height: 100}}></View>
      </ScrollView>
      <Floating />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DADEE5',
  },
});

export default QuestionnaireScree;
