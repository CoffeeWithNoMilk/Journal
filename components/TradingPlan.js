//Trading Plan ** not a reusable component

import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const TPContainer = { flex: 1, width: '100%', padding: 20, paddingVertical: 0 }

export const TradingPlan = ({navigation}) => {
  const [checkboxState, setCheckboxState] = useState(false); 

  const [risk, setRisk] = useState(null);
  const [maxTrade, setMaxTrade] = useState(null);
  const [maxDrawdown, setMaxDrawdown] = useState(null);
  const [entryCriteria, setEntryCriteria] = useState(null);
  const [exitCriteria, setExitCriteria] = useState(null);

  return (
    <View style={TPContainer}>

      <View style={{
        flex: 0.15, flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(250, 250, 250, 0.1)',
        margin: 20,
        borderRadius: 10,



      }}>

        <BouncyCheckbox
          size={15}
          fillColor='#6CBE49'
          isChecked={checkboxState}
          onPress={() => setCheckboxState(!checkboxState)} />

        {checkboxState === true ? <Text style={{ color: 'white', fontSize: 11 }}>You earned 300 points</Text> :
          <Text style={{ color: 'white', fontSize: 11 }}>Complete your trading plan to earn massive points</Text>
        }



      </View>

      <ScrollView style={{ flex: 0.95, marginBottom: 10 }} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}  
                           onPress={() => navigation.navigate('Modal', {title: 'Risk Apetitle', value: null})}>
          <Text style={{ color: 'white', fontSize: 16 }}>Risk per trade</Text>
          {risk === null ? <Text style={{ color: 'grey', fontSize: 14, alignSelf:'flex-end' }}>Add your risk limit</Text> :
            <Text style={{ color: 'white', fontSize: 16 }}>{risk}%</Text>}
        </TouchableOpacity>

        <View style={{ width: '100%', height: 1, backgroundColor: '#9c9c9c', marginVertical: 15 }} />

        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Max. trade per day</Text>
          {maxTrade === null ? <Text style={{ color: 'grey', fontSize: 14, alignSelf:'flex-end' }}>Add Max. trade per day</Text> :
            <Text style={{ color: 'white', fontSize: 16 }}>{maxTrade}</Text>}
        </TouchableOpacity>

        <View style={{ width: '100%', height: 1, backgroundColor: '#9c9c9c', marginVertical: 15 }} />

        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Max. Weekly Drawdown</Text>
          {maxDrawdown === null ? <Text style={{ color: 'grey', fontSize: 14, alignSelf:'flex-end' }}>Add drawdown limit</Text> :
            <Text style={{ color: 'white', fontSize: 16 }}>{maxDrawdown}</Text>}
        </TouchableOpacity>

        <View style={{ width: '100%', height: 1, backgroundColor: '#9c9c9c', marginVertical: 15 }} />

        <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Trade Choices</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Modal', {title: 'Watchlist'})}
            style={{
            backgroundColor: 'rgba(250, 250, 250, 0.1)', borderRadius: 10,
            marginTop: 10, padding: 15, paddingHorizontal: 20, width: '100%',
          }}>
            <Text style={{ color: 'grey', fontSize: 14, fontWeight:'500' }}>EURUSD, AUDUSD, GBPUSD</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Modal', {title: 'Timeframe'})}
            style={{ flexDirection: 'column', justifyContent: 'space-between', width: '100%', marginTop: 20 }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Preferred Timeframes</Text>
          <View style={{
            backgroundColor: 'rgba(250, 250, 250, 0.1)', borderRadius: 10,
            marginTop: 10, padding: 15, paddingHorizontal: 20, width: '100%',
          }}>
            <Text style={{  color: 'grey', fontSize: 14, fontWeight:'500' }}>1M, 5M, 30M</Text>
          </View>
        </TouchableOpacity>

        
        <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '100%', marginTop: 20 }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Entry Criteria</Text>
          <TouchableOpacity  onPress={() => navigation.navigate('Modal', {title: 'Entry Criteria'})}
            style={{
            backgroundColor: 'rgba(250, 250, 250, 0.1)', borderRadius: 10,
            marginTop: 10, padding: 15, paddingHorizontal: 20, width: '100%',
          }}>
           {entryCriteria === null ?  <Text style={{ color: 'gray', fontSize: 14, fontWeight:'500' }}>What do you consider
           before placing a trade? e.g I will wait for the close of the doji </Text>: 
               <Text style={{ color: 'white', fontSize: 14, fontWeight:'500' }}>{entryCriteria}</Text>}
          </TouchableOpacity>
        </View>

        <TouchableOpacity  onPress={() => navigation.navigate('Modal', {title: 'Exit Criteria'})}
          style={{ flexDirection: 'column', justifyContent: 'space-between', width: '100%', marginTop: 20 }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Exit Criteria</Text>
          <View style={{
            backgroundColor: 'rgba(250, 250, 250, 0.1)', borderRadius: 10,
            marginTop: 10, padding: 15, paddingHorizontal: 20, width: '100%',
          }}>
             {exitCriteria === null ?  <Text style={{ color: 'gray', fontSize: 14, fontWeight:'500' }}>What do you consider
           before closing a trade? e.g Trade must have moved 20 pips in my favor</Text>: 
               <Text style={{ color: 'white', fontSize: 14, fontWeight:'500' }}>{exitCriteria}</Text>}
          </View>
        </TouchableOpacity>

        <View style={{
          flex: 0.05, flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 20
        }}>
          <Text style={{ color: 'white' }}>Read our </Text>

          <TouchableOpacity>
            <Text style={{ color: 'white', fontStyle: 'italic', textDecorationLine: 'underline' }}>community guidelines </Text>
          </TouchableOpacity>

        </View>


      </ScrollView>
    </View>
  )
}
