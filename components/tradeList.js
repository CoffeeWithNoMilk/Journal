import React from 'react'
import {View,Text, FlatList, TouchableOpacity} from 'react-native'
import TradeCard from './tradeCard'

const TradeList = ({onPress, data}) => {

  const  container = {
      width: '100%',
      flex: 1,
      justifyContents: 'center',
      alignItem: 'center'
  }
  

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
