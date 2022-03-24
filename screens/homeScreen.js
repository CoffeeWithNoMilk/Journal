/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Button, StyleSheet, alert, ScrollView} from 'react-native';

import AppButton from '../components/button';
import Tapbar from '../components/journaltapbar';
import Notification from '../components/notification';
import TradeCard from '../components/tradeCard';
import TradeCard2 from '../components/tradeCard2';
import Leaders from '../components/leaders';
import AccountabilityMeter from '../components/accountabilityMeter';
import TradeList  from '../components/tradeList';


const HomeScreen = ({navigation}) => (

  

  <View style={styles.container}>

    <View style ={styles.header}>
    <Text style={{fontSize: 28, fontWeight: '600', color:'white'}}>Hey Charles</Text>
    <Text style={{fontSize: 12, color:'white', marginTop: 10}}>You have made a plan, now be accountable!</Text>
    </View>
    
    <AccountabilityMeter  />
    {/* <Notification msg={'You have reached your daily risk limit of 2% Time to take a break off the charts'} 
    
    color={"rgba(171, 41, 41, 0.31)"} /> */}

    
    
    <Text style={{fontSize: 12, color:'white', marginLeft: 20,margin: 15,
                  alignSelf: 'flex-start'}}>7 out of 13 trades are yet to be journaled</Text>
    <View style = {{ borderTopColor:'#9c9c9c',
                    borderTopWidth: 0.3, width: '100%'}}></View>
  
    <TradeList />


    



  </View>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
  },
  header: {
    height: 100,
    width: '100%',
    justifyContent:'center',
    padding: 20,
    marginTop: 40

  }
});
