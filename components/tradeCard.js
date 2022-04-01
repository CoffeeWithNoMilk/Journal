import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import Icon from 'react-native-ico';


const TradeCard = ({title, session, type, gain, profit, onPress}) => {

  const [checkboxState, setCheckboxState] = useState(false);

  const container = {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 15,
        margin: 10,
        height: 60,

        
      
  }  
  const tradeInfo = {
       
  }

  const iconType = {
      alignSelf:'center',
      marginRight: 20
  }

  const journalIcon = {
     margin: 20,
    
  }

  const PNL = {
      color: profit === true ? '#6CBE49' : '#B02929',
      alignSelf:'center', 
      marginLeft: 30
  }
  return (
   <View style = {container}>
       <BouncyCheckbox 
            size={15}
            style={{marginRight:5}}
            fillColor = 'white'
            isChecked={checkboxState}
             
            onPress={() => setCheckboxState(!checkboxState)} />


        <Icon name= {type === 'long' ? "diagonal-arrow-3" : "diagonal-arrow-2"} group="miscellaneous" 
              style={iconType} color = { type === 'long' ? '#6CBE49' : '#b02929' } />
        <View style={{borderBottom:2}}>
        <View style= {{flexDirection:'row', borderBottomWidth:0.5, borderBottomColor: 'white', paddingVertical:10,}}>
            <View style = {tradeInfo}>
                <Text style={{color:'white'}}>{title}</Text>
                <Text style={{color:'white'}}>Session: {session}</Text>
        </View>

        <Text style={PNL}>{gain}%</Text>
        </View>

        </View>

        <View>
            { checkboxState  === false ? <TouchableOpacity onPress={onPress}> 
                    <Icon name="pen" group="basic" style={journalIcon}
                            color = 'white'/>
                    </TouchableOpacity> : null}
        </View>
        
        
      
       
   </View>
  )
}

export default TradeCard;
