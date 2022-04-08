/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-ico';
import AddButton from '../components/button'
import { TradeHistory } from '../components/TradeHistory';
import { TradingPlan } from '../components/TradingPlan';
import StrategyBox from '../components/strategyBox';


// Main View
const JournalScreen = ({ navigation }) => {

  //controls top bar button state
  const [buttons, setButtons] = useState([
    { label: 'journal', value: true },
    { label: 'plan', value: false },
    { label: 'strategy', value: false },
  ]);



  const handleButtonChange = ({ buttons, setButtons }) => label => {
    const newButtonState = buttons.map(button => {
      if (button.label === label) {
        return (button = { label: button.label, value: true })
      }
      return {
        label: button.label,
        value: false
      }
    })
    setButtons(newButtonState)

  }

  //get trade history from db
  //dummy data 

  const todayTrades = [
    {
      id: 1,
      symbol: 'GPPUSD',
      type: 'LONG',
      profit: -34
    },
    {
      id: 2,
      symbol: 'GPBUSD',
      type: 'LONG',
      profit: 34
    },
    {
      id: 3,
      symbol: 'USDCAD',
      type: 'LONG',
      profit: -34
    },
    {
      id: 4,
      symbol: 'USDJPY',
      type: 'LONG',
      profit: -34
    },
    {
      id: 5,
      symbol: 'EURTRY',
      type: 'LONG',
      profit: 34
    },
    {
      id: 6,
      symbol: 'BTCUSD',
      type: 'LONG',
      profit: -34
    }
  ]

  const weeklyTrades = [
    {
      id: 1,
      symbol: 'GPPUSD',
      type: 'LONG',
      profit: -34
    },
    {
      id: 2,
      symbol: 'GPBUSD',
      type: 'LONG',
      profit: 34
    },
    {
      id: 3,
      symbol: 'USDCAD',
      type: 'LONG',
      profit: -34
    },
    {
      id: 4,
      symbol: 'USDJPY',
      type: 'LONG',
      profit: -34
    },
    {
      id: 5,
      symbol: 'EURTRY',
      type: 'LONG',
      profit: 34
    },
    {
      id: 6,
      symbol: 'BTCUSD',
      type: 'LONG',
      profit: -34
    },
    {
      id: 7,
      symbol: 'BTCUSD',
      type: 'SHORT',
      profit: -34
    },
    {
      id: 8,
      symbol: 'BTCUSD',
      type: 'LONG',
      profit: 34
    }, {
      id: 9,
      symbol: 'BTCUSD',
      type: 'LONG',
      profit: 34
    }

  ]


  return (
    <View style={styles.container}>
      <View style={{ marginTop: 40 }}></View>
      <View style={{ justifyContent: 'center', flexDirection: 'row', paddingVertical: 25, width: '100%', }}>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={tapBarContainer} onPress={() => handleButtonChange({ buttons, setButtons })('journal')}>
            <Icon name="book" group="basic" height="40" width="40" color={buttons[0].value === true ? '#6CBE49' : 'white'} />
          </TouchableOpacity>
          <Text style={buttons[0].value === true ? tabBarTextActive : tabBarText}>Journal</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={tapBarContainer}
            onPress={() => handleButtonChange({ buttons, setButtons })('plan')}>
            <Icon name="clipboard-1" group="logistics-delivery" height="40" width="40"
              color={buttons[1].value === true ? '#6CBE49' : 'white'} />
          </TouchableOpacity>
          <Text style={buttons[1].value === true ? tabBarTextActive : tabBarText}>Trading Plan</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={tapBarContainer}
            onPress={() => handleButtonChange({ buttons, setButtons })('strategy')}>
            <Icon name="queen-chess-piece-black-shape" group="universalicons" height="40" width="40"
              color={buttons[2].value === true ? '#6CBE49' : 'white'} />
          </TouchableOpacity>
          <Text style={buttons[2].value === true ? tabBarTextActive : tabBarText}>Strategy</Text>
        </View>
      </View>

      <View style={{
        borderTopColor: '#9c9c9c',
        borderTopWidth: 0.3, width: '100%'
      }} />

      {buttons[0].value ? <TradeHistory navigation={navigation}
        todayTrades={todayTrades} weeklyTrades={weeklyTrades} /> : null}
      {buttons[1].value ? <TradingPlan navigation={navigation} /> : null}
      {buttons[2].value ? <StrategyBox navigation={navigation} /> : null}
    </View>

  );
};


export default JournalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
  },
});


const tapBarContainer = {
  padding: 20,
  marginHorizontal: 10,
  borderRadius: 10,
  backgroundColor: 'rgba(250, 250, 250, 0.1)',
  justifyContents: 'center',
  alignItems: 'center',
};

const tabBarTextActive = {
  color: '#6CBE49',
  fontSize: 10,
  marginTop: 10
};

const tabBarText = {
  color: 'white',
  fontSize: 10,
  marginTop: 10
};
