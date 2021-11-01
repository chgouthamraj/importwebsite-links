import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  createBottomTabNavigator,
  TouchableOpacity,
} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import MedsScreen from '../screens/MedsScreen';
import VitalsScreen from '../screens/VitalsScreen';
import ActivityScreen from '../screens/ActivityScreen';
import MoreScreen from '../screens/MoreScreen';
import Dash from '../assets/icons/menu-icons/dashboard.svg';
import Meds from '../assets/icons/menu-icons/meds.svg';
import Vitals from '../assets/icons/menu-icons/vitals.svg';
import Menu from '../assets/icons/menu-icons/menu.svg';
import Activity from '../assets/icons/menu-icons/activity.svg';
import CustomTabButton from '../components/CustomTabButton';
const Tab = createBottomTabNavigator();

const Tabnavigator = props => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#842252',
        inactiveTintColor: '#AEADAC',
        style: {height: 65},
        tabStyle: {
          height: 65,
        },
        labelStyle: {
          marginBottom: 10,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: () => <Dash />,
          tabBarButton: CustomTabButton,
        }}
      />
      <Tab.Screen
        name="meds"
        component={MedsScreen}
        options={{
          title: 'Meds ',
          tabBarIcon: () => <Meds />,
          tabBarButton: CustomTabButton,
        }}
      />

      <Tab.Screen
        name="vitals"
        component={VitalsScreen}
        options={{
          tabBarIcon: () => <Vitals />,
          tabBarButton: CustomTabButton,
        }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarIcon: () => <Activity />,
          tabBarButton: CustomTabButton,
        }}
      />

      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: () => <Menu />,
          tabBarButton: CustomTabButton,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabnavigator;
