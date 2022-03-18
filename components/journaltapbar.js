/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';

import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-ico';

const tapBarContainer = {
  padding: 20,
  marginHorizontal: 10,
  borderRadius: 10,
  backgroundColor: 'rgba(0,0,0,.5)',
  justifyContents: 'center',
  alignItems: 'center',
};

const tabBarText = {
    color: 'white',
    fontSize: 10,
    marginTop: 10
};

const journaltapbar = () => {


  const [ buttons, setButtons] = useState([
      { label: 'journal', value: true},
      { label: 'plan', value: false},
      { label: 'strategy', value: false},
  ]);

  const handleButtonChange = ({buttons, setButtons}) => label => {
      const newButtonState =buttons.map(button => {
        if (button.label === label) {
          return (button = {label: button.label, value: true})
        }
        return {
          label: button.label,
          value: false
        }
      })
      setButtons(newButtonState)
      
  }

  return (
    <View style={{justifyContent:'center', flexDirection: 'row', paddingVertical:25, width:'100%',}}>
      <View style={{alignItems:'center'}}>
      <TouchableOpacity style={tapBarContainer} onPress={() => handleButtonChange({buttons, setButtons})('journal')}>
        <Icon name="book"  group="basic" height = "40" width = "40" color = {buttons[0].value === true ? '#6CBE49' : 'white'}/>
      </TouchableOpacity>
      <Text style ={tabBarText}>Journal</Text>
      </View>

        <View  style={{alignItems:'center'}}>
        <TouchableOpacity style={tapBarContainer}
                          onPress={() => handleButtonChange({buttons, setButtons})('plan')}>
        <Icon name="clipboard-1"  group="logistics-delivery" height = "40" width = "40" 
              color = {buttons[1].value === true ? '#6CBE49' : 'white'}/>
      </TouchableOpacity>
      <Text style ={tabBarText}>Trading Plan</Text>
        </View>

       <View  style={{alignItems:'center'}}>
       <TouchableOpacity style={tapBarContainer} 
                          onPress={() => handleButtonChange({buttons, setButtons})('strategy')}>
        <Icon name="queen-chess-piece-black-shape"  group="universalicons" height = "40" width = "40" 
               color = {buttons[2].value === true ? '#6CBE49' : 'white'}/>
      </TouchableOpacity>
      <Text style ={tabBarText}>Strategy</Text>
       </View>
    </View>
  );
};

export default journaltapbar;
