/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Alert } from 'react-native-web';
import AccountabilityMeter from '../components/accountabilityMeter';
import TradeList from '../components/tradeList';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';


const HomeScreen = ({ navigation }) => {

  //styles for calendar-type component
  const selectedDayStyle = {
    height: 70,
    width: 50,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white'
  }

  const notSelectedDayStyle = {
    backgroundColor: 'rgba(0,0,0,.5)',
    height: 50,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  }
  

  //dummy data

  const data = [{id:1, title: 'GBPUSD Buy Limit @ 1.32728', session: 'London', gain: '-2' , profit: false},
                {id:2, title: 'GBPUSD Sell Limit @ 1.32728', session: 'New York', gain: '+10' , profit: true}, 
                {id:3, title: 'GBPUSD Sell @ 1.32728', session: 'Asia', gain: '-3' , profit: false},
               
            ];

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', flex:0.4,
               alignItems:'center', justifyContent:'flex-end' }}>
        <CalendarStrip
          calendarAnimation={{type: 'parallel', duration: 30}}
          dateNumberStyle={{color: 'white', fontSize:14, fontWeight:'400', }}
          dateNameStyle={{color: 'gray', fontSize:8, fontWeight:'200', }}
          shouldAllowFontScaling ={true}
          showMonth={false}
       //   showDayName= {false}
          dayContainerStyle={notSelectedDayStyle}
          highlightDateContainerStyle= {selectedDayStyle}
          calendarHeaderStyle={{color:'white'}}
          style={{ height: '50%', width:'100%' }}
        />
      </View>
      <View style={styles.header}>

        <Text style={{ fontSize: 28, fontWeight: '600', color: 'white' }}>Hey Charles</Text>
        <Text style={{ fontSize: 12, color: 'white', marginTop: 10, fontWeight: '600' }}>You made a plan, now stay accountable!</Text>
      </View>

    

      <AccountabilityMeter />
      {/* <Notification msg={'You have reached your daily risk limit of 2% Time to take a break off the charts'} 
    
    color={"rgba(171, 41, 41, 0.31)"} /> */}


      <Text style={{
        fontSize: 12, color: 'white', marginLeft: 20, margin: 15,
        alignSelf: 'flex-start'
      }}>7 out of 13 trades are yet to be journaled</Text>
      <View style={{
        borderTopColor: '#9c9c9c',
        borderTopWidth: 0.3, width: '100%'
      }}></View>

      <TradeList onPress={() => navigation.navigate('Notes')} data = {data} />



    </View>
  )

};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems:'center', 
    paddingHorizontal: 10
  },
  header: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    padding: 20,

  }
});
