//Trading History component 

import React, { useState } from 'react';
import {View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import TradeCard2 from './tradeCard2';

export const TradeHistory = ({onPress, todayTrades, weeklyTrades, navigation}) => {
    const [ periods, setPeriods] = useState([
      { label: 'today', value: true},
      { label: 'TWeek', value: false},
      { label: 'LWeek', value: false},
      { label: 'TMonth', value: false},
      { label: '3Month', value: false},
  ]);
  
  //function
  const handlePeriodChange = ({periods, setPeriods}) => label => {
    const newPeriodState =periods.map(period => {
      if (period.label === label) {
        return (period = {label: period.label, value: true})
      }
      return {
        label: period.label,
        value: false
      }
    })
    setPeriods(newPeriodState)
  }
  
  //style
  const selectedPeriod = { 
    borderWidth: 1, 
    borderRadius:10, 
    padding: 5, 
    borderColor: '#6cbe49'
  }
  
  

  const ThisMonth = []

  const ThreeMonths = []
  
  //FlatList render function
  const renderTrades = ({item}) => (
      <TradeCard2 id = {item.id} 
                  symbol={item.symbol} 
                  type = {item.type} 
                  pnl = {item.profit}
                  onPress={() => navigation.navigate('TradeDetail', {symbol : item.symbol, type: item.type})}
                  />
  )

  // if no trades found
  
  const NoTrades = () => {
    return (
      <View style = {{flex: 1, backgroundColor:'red'}}>
          <Text>No trading history found</Text>
      </View>
    )
  }
  
 
    
    return (
      <View style = {{flex: 1}}>
  
        <View style={{ margin: 20, marginVertical: 10, flexDirection: 'row', alignItems:'center'}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress ={() => handlePeriodChange({periods,setPeriods})('today')}>
              <View style = {periods[0].value === true ? selectedPeriod:{padding: 5}}>
                <Text style={{ color: periods[0].value === true ? '#6CBE49' : 'white', marginHorizontal: 20, fontSize: 11}}>Today</Text>
              </View>
              
            </TouchableOpacity>
           
           <TouchableOpacity onPress ={() => handlePeriodChange({periods,setPeriods})('TWeek')}>
           <View style = {periods[1].value === true ? selectedPeriod:{padding: 5}}>
                <Text style={{ color: periods[1].value === true ? '#6CBE49' : 'white', marginHorizontal: 20, fontSize: 11 }}>This Week</Text>
              </View>
           </TouchableOpacity>
            
          <TouchableOpacity onPress ={() => handlePeriodChange({periods,setPeriods})('LWeek')}>
              <View style = {periods[2].value === true ? selectedPeriod:{padding: 5}}>
                <Text style={{ color: periods[2].value === true ? '#6CBE49' : 'white', marginHorizontal: 20 , fontSize: 11}}>Last Week</Text>
              </View>
          </TouchableOpacity>
            
          <TouchableOpacity onPress ={() => handlePeriodChange({periods,setPeriods})('TMonth')}>
              <View style = {periods[3].value === true ? selectedPeriod:{padding: 5}}>
                <Text style={{ color: periods[3].value === true ? '#6CBE49' : 'white', marginHorizontal: 20, fontSize: 11 }}>This Month</Text>
              </View>
          </TouchableOpacity>
            
          <TouchableOpacity onPress ={() => handlePeriodChange({periods,setPeriods})('3Month')}>
              <View style = {periods[4].value === true ? selectedPeriod:{padding: 5}}>
                <Text style={{ color: periods[4].value === true ? '#6CBE49' : 'white', marginHorizontal: 20, fontSize: 11 }}>3 Months ago</Text>
              </View>
          </TouchableOpacity>
            
          </ScrollView>
  
        </View>
  
        <FlatList
          data={periods[0].value === true ? todayTrades : periods[1].value === true ? weeklyTrades: null }
          renderItem={renderTrades}
          keyExtractor={item => item.id}
        />
  
  
      </View>
    )
  }
  