import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Button,
} from 'react-native';
import Send from '../assets/icons/messenger/send.svg';
import Add from '../assets/icons/messenger/add-file.svg';

function ReportEventsScreen(props) {
  const profile = require('../assets/images/profile.png');
  const data = [
      {
        id: 1,
        date: '9:50 am',
        type: 'out',
        message: 'i am feeling stomach Cramps doctor',
        img: profile,
      },

      {
        id: 2,
        date: '9:50 am',
        type: 'in',
        message: 'did you miss any dose?',
        img: profile,
      },
      {
        id: 3,
        date: '9:50 am',
        type: 'out',
        message: 'hello doctor  i am feeling Cold & body Aches',
        img: profile,
      },
      {
        id: 4,
        date: '9:50 am',
        type: 'in',
        message:
          'How long Have you Been feeling this? is there any temperature?',
        img: profile,
      },
      {
        id: 5,
        date: '9:50 am',
        type: 'out',
        message: 'hello doctor  i am feeling Cold & body Aches',
        img: profile,
      },
      {
        id: 6,
        date: '9:50 am',
        type: 'in',
        message: 'How long Have you Been feeling this?',
        img: profile,
      },
      {
        id: 7,
        date: '9:50 am',
        type: 'out',
        message: 'Hi doctor i am feeling heart Burn',
        img: profile,
      },
      {
        id: 8,
        date: '9:50 am',
        type: 'in',
        message: 'Have you taken your medicines?',
        img: profile,
      },
    ],
    renderDate = date => {
      return <Text style={styles.time}>{date}</Text>;
    };

  const renderImage = img => {
    return (
      <View
        style={{width: 60, height: 60, overflow: 'hidden', borderRadius: 30}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={img} style={{width: 75, height: 75}} />
        </View>
      </View>
    );
  };

  const renderImageIn = img => {
    return (
      <View
        style={{width: 60, height: 60, overflow: 'hidden', borderRadius: 30}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={img} style={{width: 75, height: 75}} />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={item => {
          return item.id;
        }}
        renderItem={message => {
          const item = message.item;
          let inMessage = item.type === 'in';
          let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
          return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {inMessage && renderImageIn(item.img)}
              <View style={[styles.item, itemStyle]}>
                {!inMessage && renderDate(item.date)}
                <View style={[styles.balloon]}>
                  <Text style={{color: 'white'}}>{item.message}</Text>
                </View>
                {inMessage && renderDate(item.date)}
              </View>
              {!inMessage && renderImage(item.img)}
            </View>
          );
        }}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.add}>
          <Add size={50} />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Type Message Here..."
            underlineColorAndroid="transparent"
            onChangeText={name_address => this.setState({name_address})}
          />
        </View>

        <TouchableOpacity style={styles.btnSend}>
          <Send />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DADEE5',
  },
  list: {
    paddingHorizontal: 17,
  },
  footer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#eeeeee',
    paddingHorizontal: 10,
    padding: 5,
  },
  btnSend: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSend: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: 'white',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#AA2B5D',
  },
  itemIn: {
    alignSelf: 'flex-start',
  },
  itemOut: {
    alignSelf: 'flex-end',
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize: 12,
    color: '#808080',
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 300,
    padding: 5,
  },
  add: {
    backgroundColor: '#F7F7F7',
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ReportEventsScreen;
