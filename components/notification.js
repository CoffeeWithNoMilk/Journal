import React, {useState} from 'react'
import {View, Text} from 'react-native'


const Notification = ({color, msg}) => {

  
  const msgContainer = {
      backgroundColor: color,
      padding: 15,
      width: '85%',
      borderRadius: 10,
      margin: 20
  }  
  return (
   <View style={msgContainer}>
       <Text style ={{color: 'white'}}>{msg}</Text>
   </View>
  )
}

export default Notification;
