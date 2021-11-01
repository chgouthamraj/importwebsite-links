import React from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import JournalScreen from '../screens/JournalScreen';
import QuestionnaireScree from '../screens/QuestionnaireScree';
import MessagesScreen from '../screens/MessagesScreen';
import AdverseEventsScreen from '../screens/AdverseEventsScreen';
import LearnScreen from '../screens/LearnScreen';
import MedfriendScreen from '../screens/MedfriendScreen';
import MoreScreen from '../screens/MoreScreen';
import Tabnavigator from './Tabnavigator';
import ProfileScreen from '../screens/ProfileScreen';
import Leukemia from '../screens/Leukemia';
import QuestionLabelScreen from '../screens/QuestionLabelScreen';
import ReportEventsScreen from '../screens/ReportEventsScreen';
import DrugScreen from '../screens/DrugScreen';
import DiseaseScreen from '../screens/DiseaseScreen';
import TreatmentScreen from '../screens/TreatmentScreen';
import NewsfeedScreen from '../screens/NewsfeedScreen';
import Omega from '../screens/Omega';
import Backarrow from '../assets/icons/backward-arrow.svg';
import NotificationsScreen from '../screens/NotificationsScreen';
import Note from '../assets/icons/ae-screen/ae-note.svg';
import {useNavigation} from '@react-navigation/core';
import LoginScreen from '../screens/LoginScreen';
import ForgotScreen from '../screens/ForgotScreen';
import ResetPassword from '../screens/ResetPassword';
const Stack = createStackNavigator();
const MoreStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="home"
        component={Tabnavigator}
      />
      <Stack.Screen name="more" component={MoreScreen} />
      <Stack.Screen
        name="journal"
        component={JournalScreen}
        options={{
          headerTitle: 'Journal',
          headerStyle: {
            backgroundColor: '#DADEE5',
          },
          headerTitleAlign: 'center',
          // headerRight: () => {
          //   return (
          //     <TouchableOpacity onPress={() => navigation.goBack()}>
          //       <Backarrow />
          //     </TouchableOpacity>
          //   );
          // },
        }}
      />
      <Stack.Screen
        name="questionnaire"
        component={QuestionnaireScree}
        options={{
          headerTitle: 'Questionnaire',
          headerStyle: {
            backgroundColor: '#DADEE5',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="messages"
        component={MessagesScreen}
        options={{
          headerTitle: 'Messages',
          headerStyle: {
            backgroundColor: '#DADEE5',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="adverseevents"
        component={AdverseEventsScreen}
        options={{
          headerTitle: 'Report Adverse Event',
          headerStyle: {
            backgroundColor: '#DADEE5',
          },
          headerTitleAlign: 'center',
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => console.log(navigation)}>
                <View style={styles.note}>
                  <Note />
                </View>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen
        name="learn"
        component={LearnScreen}
        options={{
          headerTitle: 'Learn',
          headerStyle: {
            backgroundColor: '#DADEE5',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="medfriend"
        component={MedfriendScreen}
        options={{
          headerTitle: 'Med Friend',
          headerStyle: {
            backgroundColor: '#DADEE5',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#DADEE5',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="questionnairelabel"
        component={QuestionLabelScreen}
        options={{
          headerTitle: 'Questionnaire Label Text ',
          headerStyle: {
            backgroundColor: '#DADEE5',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="drug"
        component={DrugScreen}
        options={{
          headerTitle: 'Drugs',
          headerStyle: {
            backgroundColor: '#DADEE5',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="disease"
        component={DiseaseScreen}
        options={{
          headerTitle: 'Disease',
          headerStyle: {
            backgroundColor: '#DADEE5',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="treatment"
        component={TreatmentScreen}
        options={{
          headerTitle: 'Treatment',
          headerStyle: {
            backgroundColor: '#DADEE5',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="newsfeed"
        component={NewsfeedScreen}
        options={{
          headerTitle: 'NewsFeed',
          headerStyle: {
            backgroundColor: '#DADEE5',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="omega3"
        component={Omega}
        options={{
          headerTitle: 'Omega 3',
          headerStyle: {
            backgroundColor: '#DADEE5',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="leukemia"
        component={Leukemia}
        options={{
          headerTitle: 'Leukemia',
          headerStyle: {
            backgroundColor: '#DADEE5',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="notification"
        component={NotificationsScreen}
        options={{
          headerTitle: 'Notifications',
          headerStyle: {
            backgroundColor: '#DADEE5',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerTitle: 'login',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#DADEE5',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ForgotScreen"
        component={ForgotScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#DADEE5',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#DADEE5',
          },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  note: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#C6CACF',
  },
});

export default MoreStack;
