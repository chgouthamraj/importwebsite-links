import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';
import FriendCard from '../components/FriendCard';
import Card from '../components/Card';
import Contact1 from '../assets/icons/medfriend/contact1.svg';
import Contact2 from '../assets/icons/medfriend/contact2.svg';
import Contact3 from '../assets/icons/medfriend/contact3.svg';
import Contact4 from '../assets/icons/medfriend/contact4.svg';
import Contact5 from '../assets/icons/medfriend/contact5.svg';
import Contactnum from '../assets/icons/medfriend/contact-number.svg';
import Edit from '../assets/icons/medfriend/edit.svg';
import Delete from '../assets/icons/medfriend/delete.svg';
import Email from '../assets/icons/medfriend/email.svg';
import FriendCardMain from '../components/FriendCradMain';
import Forward from '../assets/icons/forward-arrow.svg';
import Floating from '../components/Floating';
const MedfriendScreen = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDel, setModalDel] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Modal transparent={true} visible={modalVisible}>
          <View style={styles.modalvw}>
            <Card
              style={{backgroundColor: '#FFFFFF', padding: 12.5, elevation: 5}}>
              <View>
                <View style={{alignItems: 'center', padding: 2}}>
                  <Text style={{fontFamily:'Montserrat-Medium',color:'#333333'}}>Add new Friend</Text>
                </View>
              </View>
              <View style={{padding: 7}}>
                <Text style={{fontFamily:'Montserrat-Medium',color:'#333333'}}>Friend Name</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View>
                  <TextInput style={styles.name} placeholder="First Name" />
                </View>
                <View>
                  <TextInput style={styles.name} placeholder="Last Name" />
                </View>
              </View>
              <Text style={{fontFamily:'Montserrat-Medium',color:'#333333',padding:7}}>Email Id</Text>
              <TextInput style={styles.inpt} />

              <Text style={{fontFamily:'Montserrat-Medium',color:'#333333',padding:7}}>Phone Number</Text>
              <TextInput style={styles.inpt} />
              <View style={{alignItems: 'center', padding: 20}}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <View
                    style={{
                      backgroundColor: '#842252',
                      width: 120,
                      height: 35,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 30,
                    }}>
                    <Text style={{color: 'white'}}>SAVE</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Card>
          </View>
        </Modal>

        <View>
          <FriendCard
            bgmColor="#F0FCFC"
            iconName={<Contact1 />}
            name="Yuuto Sothy"
            arrow={<Forward />}
          />
          <FriendCardMain
            style={styles.main}
            bgmColor="#F9FBE5"
            iconName={<Contact2 />}
            name="Louis Antiochus"
            arrow={<Forward />}
          />

          <FriendCard
            bgmColor="#FDF7E5"
            iconName={<Contact5 />}
            name="Lazare Kendra"
            arrow={<Forward />}
          />
          <FriendCard
            bgmColor="#F9FBE5"
            iconName={<Contact2 />}
            name="Aemliana Ava"
            arrow={<Forward />}
          />
        </View>
        <View style={{paddingTop: 20, paddingLeft: 150}}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={styles.crd}>
              <Text style={{color: 'white'}}>ADD FRIEND</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 100}}></View>
      </ScrollView>
      <Floating />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 190,
  },
  modalview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#DADEE5',
  },
  crd: {
    backgroundColor: '#842252',
    width: 120,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  name: {
    height: 40,
    borderWidth: 1,
    borderRadius: 15,
    paddingTop: 10,
    width: 165,
  },
  inpt: {
    height: 40,
    borderWidth: 1,
    borderRadius: 15,
    paddingTop: 10,
    marginHorizontal: 5,
  },
  modalvw: {
    paddingTop: 200,
    paddingLeft: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
  },
});

export default MedfriendScreen;
