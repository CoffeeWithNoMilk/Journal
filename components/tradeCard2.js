import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-ico'

const container = {
  width: '100%',

  paddingHorizontal: 20,
  paddingVertical: 10,
  flexDirection: 'row',
  borderBottomWidth: 0.5,
  borderBottomColor: '#808080',
  alignItems: 'center',
}

const Win = {
  backgroundColor: '#6CBE49',
  alignItems: 'center',
  padding: 10,
  marginLeft: 30, 
  borderRadius: 10

}


const Loss = {
  backgroundColor: '#B02929',
  alignItems:'center',
  padding: 10,
  marginLeft: 30, 
  borderRadius: 10

}

const tradeCard2 = ({ symbol, type, pnl, id, onPress }) => {
  return (
    <TouchableOpacity style={container} onPress={onPress}>
      <Text style={{ color: 'white' }}>#{id}.</Text>
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between', width: '100%',
        alignItems: 'center', width: '83%', marginLeft: 20,
      }}>

        <Text style={{ color: 'white', flex: 2 }}>{symbol}</Text>
        <Text style={{ color: 'white', flex: 2 }}>{type}</Text>

        <View style={{ flex: 2 }}>
          {pnl > 0 ? <View style={Win}>
            <Text style={{ color: 'white' }}> WIN</Text>
          </View> :
            <View style = {Loss}>
              <Text style={{ color: 'white' }}> LOSS</Text>
            </View>}

        </View>


      </View>
      <Icon name="keyboard-right-arrow-button" group="material-design" style={{ margin: 10 }}
        color='#808080' />


    </TouchableOpacity>
  )
}

export default tradeCard2
