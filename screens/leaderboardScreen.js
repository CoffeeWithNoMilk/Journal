/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Leaders from '../components/leaders'
import Button from '../components/button'


//dummy data array
const leaders =  [
  {rank: 1,
   name: 'ThankGod Charles',
   community: 'Crediva', 
   points: 649 
  }, 
  {rank: 2,
    name: 'Ose Iluobe',
    community: 'Crediva', 
    points: 612
   }, 
   {rank: 3,
    name: 'Emmanuel Samuel',
    community: 'Crediva', 
    points: 323
   }, 
   {rank: 4,
    name: 'David Moses',
    community: 'Crediva', 
    points: 321 
   }, 
   {rank: 5,
     name: 'Courage Ogbeifun',
     community: 'Crediva', 
     points: 300 
    }, 
    {rank: 6,
     name: 'Seun Abilawon',
     community: 'Crediva', 
     points: 290
    }, 
    {rank: 7,
      name: 'Elijah Abilawon',
      community: '8DC', 
      points: 250 
     }, 
     {rank: 8,
       name: 'Jobo',
       community: 'ICT ', 
       points: 234
      }, 
      {rank: 9,
       name: 'Emmanuel',
       community: 'Sniper Squad', 
       points: 230
      }, 
      {rank: 10,
       name: 'Moses D',
       community: 'Rugged Zone', 
       points: 200
      }, 
]

  //FlatList render function
  const renderLeaders = ({item}) => {
    switch (item.rank) {
      case 1 : return (
        <Leaders rank={item.rank}
        name = {item.name}
        community = {item.community}
        points = {item.points}
        position = {'firstPlace'}/>
      )
      default : return (
        <Leaders rank={item.rank}
        name = {item.name}
        community = {item.community}
        points = {item.points}
        runnerup = {false}/>
      )
    }
   
  }

const LeaderBoardScreen = ({ navigation }) => {

  const [ periods, setPeriods] = useState([
    { label: 'Today', value: true},
    { label: 'Week', value: false},
    { label: 'Month', value: false},

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


  return (
    <View style={styles.container}>
      <View style={{ flex: 0.3 }}>

        

      </View>
      <View style={{
        borderTopColor: '#9c9c9c',
        borderTopWidth: 0.3, width: '100%'
      }} />
       <View horizontal={true} showsHorizontalScrollIndicator={false} 
              style = {{flex: 0.05, flexDirection:'row', justifyContent:'center',
                         alignItems:'center'}}>
            <TouchableOpacity onPress ={() => handlePeriodChange({periods,setPeriods})('Today')}>
              <View style = {periods[0].value === true ? selectedPeriod:{padding: 5}}>
                <Text style={{ color: periods[0].value === true ? '#6CBE49' : 'white', marginHorizontal: 20 }}>Today</Text>
              </View>
              
            </TouchableOpacity>
           
           <TouchableOpacity onPress ={() => handlePeriodChange({periods,setPeriods})('Week')}>
           <View style = {periods[1].value === true ? selectedPeriod:{padding: 5}}>
                <Text style={{ color: periods[1].value === true ? '#6CBE49' : 'white', marginHorizontal: 20 }}>Week</Text>
              </View>
           </TouchableOpacity>
            
          <TouchableOpacity onPress ={() => handlePeriodChange({periods,setPeriods})('Month')}>
              <View style = {periods[2].value === true ? selectedPeriod:{padding: 5}}>
                <Text style={{ color: periods[2].value === true ? '#6CBE49' : 'white', marginHorizontal: 20 }}>Month</Text>
              </View>
          </TouchableOpacity>
            
            
          </View>
      <View style={{ flex: 0.65, paddingHorizontal: 20 }}>
      <FlatList
             data={leaders}
             renderItem={renderLeaders}
             keyExtractor={item => item.rank}
             showsVerticalScrollIndicator={false}
             style={{marginBottom:20}} />
      </View>
      <View style={{ position:'absolute', bottom: 10, alignItems:'flex-end', width: '100%', paddingHorizontal:20}}>
            <Button title = 'Join Challenge' size={'small'} taskIsComplete={true}/>
      </View>
    </View>
  );
};

export default LeaderBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',

  },
});
