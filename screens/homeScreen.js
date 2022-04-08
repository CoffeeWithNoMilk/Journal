/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Alert } from 'react-native-web';
import AccountabilityMeter from '../components/accountabilityMeter';
import TradeList from '../components/tradeList';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';

import NewUser from './NewUser';



const HomeScreen = ({ navigation }) => {
  const [myfxbookSync, setMyfxbookSync] = useState(false)
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

  const data = [{ id: 1, title: 'GBPUSD Buy Limit @ 1.32728', session: 'London', gain: '-2', profit: false },
  { id: 2, title: 'GBPUSD Sell Limit @ 1.32728', session: 'New York', gain: '+10', profit: true },
  { id: 3, title: 'GBPUSD Sell @ 1.32728', session: 'Asia', gain: '-3', profit: false },

  ];


  return (
    <View style={styles.container}>
      <View style={{
        width: '100%', flex: 0.15,
        alignItems: 'center', justifyContent: 'flex-end',
      }}>
        <CalendarStrip
          calendarAnimation={{ type: 'parallel', duration: 100 }}
          dateNumberStyle={{ color: 'white', fontSize: 14, fontWeight: '400', }}
          dateNameStyle={{ color: 'gray', fontSize: 8, fontWeight: '200', }}
          shouldAllowFontScaling={true}
          showMonth={false}
          //   showDayName= {false}
          dayContainerStyle={notSelectedDayStyle}
          highlightDateContainerStyle={selectedDayStyle}
          calendarHeaderStyle={{ color: 'white' }}
          style={{ height: '50%', width: '100%' }}
          iconRightStyle={{ display: 'none' }}
          iconLeftStyle={{ display: 'none' }}
          onDateSelected={() => alert('congrats')}
          scrollable={false}

        />

      </View>
      <View style={styles.header}>

        <Text style={{ fontSize: 28, fontWeight: '600', color: 'white' }}>Hey Charles</Text>
        <Text style={{ fontSize: 12, color: 'white', marginTop: 10, fontWeight: '600' }}>You made a plan, now stay accountable!</Text>
      </View>

      { myfxbookSync === true ?  
          <View style = {{flex: 0.75, width: '100%'}}>
          <View style={{ width: '100%', alignItems: 'center' }}>
            <AccountabilityMeter />
          </View>
  
          {/* <Notification msg={'You have reached your daily risk limit of 2% Time to take a break off the charts'} 
        
        color={"rgba(171, 41, 41, 0.31)"} /> */}
  
  
          <View style={{ flex: 1, width: '100%' }}>
            <Text style={{
              fontSize: 12, color: 'white', marginLeft: 20, margin: 15,
              alignSelf: 'flex-start'
            }}>7 out of 13 trades are yet to be journaled</Text>
            <View style={{
              borderTopColor: '#9c9c9c',
              borderTopWidth: 0.3, width: '100%',
            }}></View>
  
            <TradeList onPress={() => navigation.navigate('Journal')} data={data} />
          </View>
        </View> : <NewUser onPress={() => setMyfxbookSync(true)}/>
        }
      


    </View>
  )
}


export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  header: {
    //  backgroundColor: 'blue',
    flex: 0.1,
    width: '100%',
    justifyContent: 'center',
    padding: 20,

  }
});
