import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import Card from '../components/Card';
import Open from '../assets/icons/learn/open.svg';
import {ScrollView} from 'react-native-gesture-handler';
import Floating from '../components/Floating';
import {SafeAreaView} from 'react-native-safe-area-context';
const NewsfeedScreen = props => {
  return (
    <SafeAreaView style={styles.top}>
      <ScrollView>
        <View style={styles.main}>
          <Card style={styles.lk}>
            <Card style={styles.link}>
              <View style={styles.tx}>
                <Text style={styles.txt}>
                  New Maintenance Treatment for acute myeloid leukemia
                </Text>
                <Open />
              </View>
            </Card>
            <Card style={styles.link}>
              <View style={styles.tx}>
                <Text style={styles.txt}>
                  Treatment for acute myeloid leukemia{' '}
                </Text>
                <Open />
              </View>
            </Card>
          </Card>
        </View>
      </ScrollView>
      <Floating />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 15,
    color: '#C672A1',
  },
  main: {
    alignItems: 'center',
    marginTop: 10,
  },
  link: {
    backgroundColor: '#F5F7F7',
    margin: 10,
  },
  txt: {
    color: '#345FC1',
    fontFamily: 'Montserrat-Medium',
  },
  tx: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lk: {
    padding: 12,
    height: 550,
  },
  top: {flex: 1, backgroundColor: '#DADEE5'},
});

export default NewsfeedScreen;
