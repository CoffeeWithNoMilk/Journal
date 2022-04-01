//Trading Plan ** not a reusable component

import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const TPContainer = { flex: 1, width: '100%', padding: 20, paddingVertical: 0 }

export const TradingPlan = () => {
  const [checkboxState, setCheckboxState] = useState(true);

  return (
    <View style={TPContainer}>

      <View style={{
        flex: 0.15, flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(250, 250, 250, 0.1)',
        margin:20, 
        borderRadius: 10,
        


      }}>

        <BouncyCheckbox
          size={15}
          fillColor='#6CBE49'
          isChecked={checkboxState}
          onPress={() => setCheckboxState(!checkboxState)} />

        {checkboxState === true ? <Text style={{ color: 'white', fontSize: 11 }}>You earned 300 points</Text> :
          <Text style={{ color: 'white', fontSize: 11}}>Complete your trading plan to earn massive points</Text>
        }



      </View>

      <ScrollView style={{ flex: 0.95, marginBottom: 10 }} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Risk per trade</Text>
          <Text style={{ color: 'white', fontSize: 16 }}>2%</Text>
        </TouchableOpacity>

        <View style={{ width: '100%', height: 1, backgroundColor: '#9c9c9c', marginVertical: 15 }} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Maximum trade per day</Text>
          <Text style={{ color: 'white', fontSize: 16 }}>6</Text>
        </View>

        <View style={{ width: '100%', height: 1, backgroundColor: '#9c9c9c', marginVertical: 15 }} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Maximum Daily Drawdown</Text>
          <Text style={{ color: 'white', fontSize: 16 }}>2%</Text>
        </View>

        <View style={{ width: '100%', height: 1, backgroundColor: '#9c9c9c', marginVertical: 15 }} />

        <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Trade Choices</Text>
          <View style={{
            backgroundColor: 'rgba(250, 250, 250, 0.1)', borderRadius: 10,
            marginTop: 10, padding: 15, paddingHorizontal: 20, width: '100%',
          }}>
            <Text style={{ color: 'white', fontSize: 16 }}>EURUSD, AUDUSD, GBPUSD</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '100%', marginTop: 20 }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Preferred Timeframes</Text>
          <View style={{
            backgroundColor: 'rgba(250, 250, 250, 0.1)', borderRadius: 10,
            marginTop: 10, padding: 15, paddingHorizontal: 20, width: '100%',
          }}>
            <Text style={{ color: 'white', fontSize: 16 }}>1M, 5M, 30M</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '100%', marginTop: 20 }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Entry Criteria</Text>
          <View style={{
            backgroundColor: 'rgba(250, 250, 250, 0.1)', borderRadius: 10,
            marginTop: 10, padding: 15, paddingHorizontal: 20, width: '100%',
          }}>
            <Text style={{ color: 'white', fontSize: 16 }}>I will wait for the close of the doji
              to form on the 4 hours timeframe and confluence on the m15 timeframe as well.</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '100%', marginTop: 20 }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Exit Criteria</Text>
          <View style={{
            backgroundColor: 'rgba(250, 250, 250, 0.1)', borderRadius: 10,
            marginTop: 10, padding: 15, paddingHorizontal: 20, width: '100%',
          }}>
            <Text style={{ color: 'white', fontSize: 16 }}>I will wait for the close of the doji
              to form on the 4 hours timeframe and confluence on the m15 timeframe as well.</Text>
          </View>
        </View>

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
