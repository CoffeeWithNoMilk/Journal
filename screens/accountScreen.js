/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react';
import { Text, 
         View, 
         Button, 
         StyleSheet, 
         Image, 
        TouchableOpacity} from 'react-native';
import Modal from 'react-native-modalbox';
import email from 'react-native-email'

import Icon from 'react-native-ico';



const AccountScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  
  const handleEmail = () => {
    const to = ['credivasolutions@gmail.com','da.desiigna@gmail.com'] // string or array of email addresses
    email(to, {
        // Optional additional arguments
       // cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
       // bcc: 'mee@mee.com', // string or array of email addresses
        subject: '',
      //  body: 'What would you like us to improve on?'
    }).catch(console.error)
  }

  const modalStyle = {
    height : '30%',
    position:'relative', 
    marginTop: '70%', 
    backgroundColor: '#1C1E20',
    padding: 25, 
    justifyContent:'space-between', 
    borderTopStartRadius: 30,
    borderTopEndRadius: 30
  }
  
  return (
    <View style={styles.container}>
      <Text>Account Screen</Text>
      <Button title="Click Here" onPress={() => setModalVisible(!modalVisible)} />

      <Modal isOpen = {modalVisible} style={modalStyle} onClosed ={() => setModalVisible(!modalVisible)} >
            <TouchableOpacity style = {{flexDirection: 'row', alignItems: 'center'}}>
              <View style = {{width: 30, height: 30, borderRadius: 30, 
                              backgroundColor: 'green', marginRight: 20}}></View>
              <Text style ={{color: 'white', fontWeight: '600'}}>ThankGod Charles </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {{flexDirection: 'row', alignItems: 'center'}}>
              <Image style = {{width: 30, height: 30, borderRadius: 30, 
                               marginRight: 20}} source = {require('../assets/images/myfxbook.png')}/>
              <Text style ={{color: 'white', fontWeight: '600'}}>Switch Myfxbook account</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {{flexDirection: 'row', alignItems: 'center'}} onPress = {handleEmail}>
            <Icon name="chat-bubble" group="material-design" height = "30" width = "30" 
              color =  'white' style = {{marginRight: 20}}/>
              <Text style ={{color: 'white', fontWeight: '600'}}>Give feedback </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="question" group="miscellaneous" height = "30" width = "30" 
              color =  'white' style = {{marginRight: 20}}/>
              <Text style ={{color: 'white', fontWeight: '600'}}>FAQ</Text>
            </TouchableOpacity>
      </Modal>

    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});
