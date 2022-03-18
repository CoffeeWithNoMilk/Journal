import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-ico'

const container = {
    width: '100%',
 
    paddingHorizontal: 20,
    paddingVertical:10,
    flexDirection: 'row',
    borderBottomWidth:0.5, 
    borderBottomColor: '#808080',
    alignItems:'center',
}

const PNL = {
    backgroundColor:'#6CBE49',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
}

const tradeCard2 = () => {
  return (
    <TouchableOpacity style = {container}>
        <Text style = {{color: 'white'}}>1.</Text>
        <View style ={{flexDirection:'row', justifyContent:'space-between', width:'100%', 
                      alignItems:'center', width: '83%', marginLeft: 20}}>
            
            <Text style = {{color: 'white'}}>GBPUSD</Text>
            <Text style = {{color: 'white'}}>Long</Text>

            <View style= {PNL}>
                <Text style = {{color: 'white'}}>WIN</Text>
                </View> 


        </View>
        <Icon name="keyboard-right-arrow-button" group="material-design" style={{margin:10}} 
                            color = '#808080'/>
       

    </TouchableOpacity>
  )
}

export default tradeCard2
