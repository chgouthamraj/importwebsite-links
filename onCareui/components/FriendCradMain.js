import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Card from '../components/Card';
import Contactnum from '../assets/icons/medfriend/contact-number.svg';
import Edit from '../assets/icons/medfriend/edit.svg';
import Delete from '../assets/icons/medfriend/delete.svg';
import Email from '../assets/icons/medfriend/email.svg';
import Forward from '../assets/icons/forward-arrow.svg';

const FriendCardMain = props => {
  const [modalDel, setModalDel] = useState(false);

  return (
    <View>
      <Modal transparent={true} visible={modalDel}>
        <View
          style={{
            paddingTop: 200,
            paddingLeft: 20,
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            flex: 1,
          }}>
          <Card
            style={{
              backgroundColor: '#FEFEFE',
              padding: 35,
              width: '80%',
              elevation: 5,
            }}>
            <View style={{alignItems: 'center'}}>
              <View style={{paddingBottom: 15, alignItems: 'center'}}>
                <Text
                  style={{fontFamily: 'Montserrat-Medium', color: '#333333'}}>
                  Are you sure you want to
                </Text>
                <Text
                  style={{fontFamily: 'Montserrat-Medium', color: '#333333'}}>
                  delete louis Antiochus{' '}
                </Text>
                <Text
                  style={{fontFamily: 'Montserrat-Medium', color: '#333333'}}>
                  as your Med friend
                </Text>
              </View>
              <TouchableOpacity
                style={{paddingTop: 10}}
                onPress={() => setModalDel(false)}>
                <View
                  style={{
                    width: 120,
                    backgroundColor: '#EB7373',
                    height: 30,
                    borderRadius: 17.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: '#ffff'}}>YES</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{paddingTop: 10}}
                onPress={() => setModalDel(false)}>
                <View
                  style={{
                    width: 120,
                    backgroundColor: '#ADADAD',
                    height: 30,
                    borderRadius: 17.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: '#ffff'}}>CANCEL</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      </Modal>
      <Card style={{...styles.med, ...props.style}}>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 10,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={[styles.vw, {backgroundColor: props.bgmColor}]}>
              <View style={{marginTop: 10, paddingLeft: 18}}>
                {props.iconName}
              </View>
            </View>
            <View
              style={{
                paddingTop: 16,
                paddingLeft: 10,
                fontfamily: 'Montserrat-Medium',
              }}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Light',
                  fontSize: 14,
                  color: '#333333',
                }}>
                {props.name}
              </Text>
            </View>
          </View>
          <View style={{paddingTop: 10, paddingRight: 18}}>
            <Text>{props.arrow}</Text>
          </View>
        </View>
        <View style={{paddingTop: 10}}>
          <View style={{flexDirection: 'row', paddingTop: 10, paddingLeft: 20}}>
            <Contactnum />
            <View style={{paddingLeft: 20}}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Light',
                  fontSize: 14,
                  color: '#333333',
                }}>
                + 91 0000065364
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{flexDirection: 'row', paddingTop: 12, paddingLeft: 20}}>
              <Email />
              <View style={{paddingLeft: 20}}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Light',
                    fontSize: 14,
                    color: '#333333',
                  }}>
                  louis.antiochus@mail.com
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingTop: 12,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{paddingRight: 7.5}}>
                <View
                  style={{
                    paddingRight: 3,
                    backgroundColor: '#EAEAEA',
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    overflow: 'hidden',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Edit />
                </View>
              </View>
              <View style={{paddingRight: 5}}>
                <TouchableOpacity onPress={() => setModalDel(true)}>
                  <View
                    style={{
                      paddingLeft: 2,
                      backgroundColor: '#EAEAEA',
                      height: 40,
                      width: 40,
                      borderRadius: 20,
                      overflow: 'hidden',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Delete />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  med: {
    marginTop: 25,
    marginLeft: 10,
    height: 70,
    padding: 0,
  },
  vw: {
    backgroundColor: 'yellow',
    height: 50,
    width: 50,
    borderBottomEndRadius: 25,
    borderTopEndRadius: 25,
  },
});

export default FriendCardMain;
