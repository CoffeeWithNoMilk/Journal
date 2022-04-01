import React from 'react'
import {View,Text, FlatList, TouchableOpacity} from 'react-native'
import TradeCard from './tradeCard'

const TradeList = ({onPress}) => {

  const  container = {
      width: '100%',
      flex: 1,
      justifyContents: 'center',
      alignItem: 'center'
  }
  const data = [{id:1, title: 'GBPUSD Buy Limit @ 1.32728', session: 'London', gain: '-8' , profit: false},
                {id:2, title: 'GBPUSD Buy Limit @ 1.32728', session: 'London', gain: '-8' , profit: false}, 
                {id:3, title: 'GBPUSD Buy Limit @ 1.32728', session: 'London', gain: '-8' , profit: false},
                {id:4, title: 'GBPUSD Buy Limit @ 1.32728', session: 'London', gain: '-8' , profit: false},
                {id:5, title: 'GBPUSD Buy Limit @ 1.32728', session: 'London', gain: '-8' , profit: false}
            ];

   const renderTrades = ({item}) => (
            <TradeCard title = {item.title} session = {item.session} 
                        gain={item.gain} type={'long'} profit = {false} onPress={onPress}/>
   )

  return (
    <View style = {container}>
         {data && (
             <FlatList
                data = {data}
                renderItem= {renderTrades}
                keyExtractor= {(item) => item.id}
                
             />
         )}
    </View>
  )
}

export default TradeList;
