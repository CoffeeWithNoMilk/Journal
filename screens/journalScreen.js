/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Tapbar from '../components/journaltapbar';
import Icon from 'react-native-ico';
import AddButton from '../components/button'
import TradeCard2 from '../components/tradeCard2';



//Trading History

const TradeHistory = () => {
  return (
    <View>
      <View style = {{margin: 20, flexDirection: 'row'}}>
          <Text style = {{color: 'white', marginHorizontal: 10}}>Daily</Text>
          <Text style = {{color: 'white', marginHorizontal: 20}}>Weekly</Text>
          <Text style = {{color: 'white', marginHorizontal: 20}}>Monthly</Text>
          <Text style = {{color: 'white', marginHorizontal: 10}}>2 Months</Text>
      </View>
    
      <ScrollView>
        <TradeCard2 />
        <TradeCard2 />
        <TradeCard2 />
        <TradeCard2 />
        <TradeCard2 />
      </ScrollView>

      
    </View>
  )
}

//Trading Plan

const TPContainer = { flex: 1, width: '100%', padding: 30 }

const TradingPlan = () => {

  return (
    <ScrollView style={TPContainer}>
      
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Risk Apetite</Text>
          <Text style={{ color: 'white', fontSize: 16 }}>2%</Text>
        </View>

        <View style={{ width: '100%', height: 1, backgroundColor: '#9c9c9c', marginVertical: 15 }} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Maximum trade per day</Text>
          <Text style={{ color: 'white', fontSize: 16 }}>6</Text>
        </View>

        <View style={{ width: '100%', height: 1, backgroundColor: '#9c9c9c', marginVertical: 15 }} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Monthly trading goal</Text>
          <Text style={{ color: 'white', fontSize: 16 }}>2%</Text>
        </View>

        <View style={{ width: '100%', height: 1, backgroundColor: '#9c9c9c', marginVertical: 15 }} />

      </View>

      <View style={{ height: '60%', backgroundColor: 'rgba(250, 250, 250, 0.3)', borderRadius: 10, marginTop: 25, padding: 20 }}>
          <Text style = {{fontWeight: '600', color: 'white'}}>Entry Strategy</Text>

          <View style = {{width: '100%', height: 80}}/>
          <Text style = {{fontWeight: '600', color: 'white'}}>Exit Strategy</Text>
          <View style = {{width: '100%', height: 50}}/>
          <View style={{ width: '100%', height: 1, backgroundColor: '#9c9c9c', marginVertical: 15 }} />
          <View>
            </View>
            <View style = {{ width:'100%'}}>
              <TouchableOpacity>
              <Text style ={{alignSelf:'flex-end', padding: 5, paddingHorizontal:20, 
                                borderWidth: 1, borderRadius: 15, color: '#6CBE49', 
                                borderColor: '#6CBE49'}}>Edit</Text>  
              </TouchableOpacity>
                  
            </View>
           
      </View>
      <View style={{ flexDirection: 'row', alignSelf: 'center', margin: 10 }}>
        <Text style={{ color: 'white' }}>Read our </Text>

        <TouchableOpacity>
          <Text style={{ color: 'white', fontStyle: 'italic', textDecorationLine: 'underline' }}>community guidelines </Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  )
}

//Strategy Box

const SBContainer = { flex: 1, width: '100%', padding: 30 }
const StrategyBox = () => {
  return (
    <View style = {SBContainer}>
      <ScrollView>

        <TouchableOpacity style = {{ justifyContent: 'space-between', flexDirection:'row', backgroundColor: 'rgba(250, 250, 250, 0.3)', 
                        borderRadius: 19, paddingVertical: 20, alignItems:'center'}}>

                          <View style = {{flexDirection: 'row', alignItems:'center'}}>
                            <View style = {{height:50, width: 50, backgroundColor:'green', borderRadius: 50, marginHorizontal: 20}}>

                            </View>
                          <Text style = {{color: 'white', fontSize: 20}}>ICT Breaker</Text>  
                          </View>
            

            <Icon name="keyboard-right-arrow-button" group="material-design" style={{margin:10}} 
                            color = '#808080'/>
        </TouchableOpacity>
      </ScrollView>
      
      <View style = {{position:'absolute',bottom:10,alignSelf:'flex-end'}}>
          <AddButton title = {'Add Strategy'} size = {'small'} type = {'withIcon'} />
      </View>
     
    </View>
  )
}



// Main View
const JournalScreen = ({ navigation }) => {

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


  return (
    <View style={styles.container}>
      <View style={{ marginTop: 40 }}></View>
      <View style={{ justifyContent: 'center', flexDirection: 'row', paddingVertical: 25, width: '100%', }}>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={tapBarContainer} onPress={() => handleButtonChange({ buttons, setButtons })('journal')}>
            <Icon name="book" group="basic" height="40" width="40" color={buttons[0].value === true ? '#6CBE49' : 'white'} />
          </TouchableOpacity>
          <Text style={tabBarText}>Journal</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={tapBarContainer}
            onPress={() => handleButtonChange({ buttons, setButtons })('plan')}>
            <Icon name="clipboard-1" group="logistics-delivery" height="40" width="40"
              color={buttons[1].value === true ? '#6CBE49' : 'white'} />
          </TouchableOpacity>
          <Text style={tabBarText}>Trading Plan</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={tapBarContainer}
            onPress={() => handleButtonChange({ buttons, setButtons })('strategy')}>
            <Icon name="queen-chess-piece-black-shape" group="universalicons" height="40" width="40"
              color={buttons[2].value === true ? '#6CBE49' : 'white'} />
          </TouchableOpacity>
          <Text style={tabBarText}>Strategy</Text>
        </View>
      </View>

      <View style={{
        borderTopColor: '#9c9c9c',
        borderTopWidth: 0.3, width: '100%'
      }} />

      {buttons[0].value ? TradeHistory() : null}
      {buttons[1].value ? TradingPlan() : null}
      {buttons[2].value ? StrategyBox() : null}
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
  backgroundColor: 'rgba(0,0,0,.5)',
  justifyContents: 'center',
  alignItems: 'center',
};

const tabBarText = {
  color: 'white',
  fontSize: 10,
  marginTop: 10
};
