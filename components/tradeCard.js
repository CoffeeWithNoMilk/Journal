import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import Icon from 'react-native-ico';


const TradeCard = ({title, session, type, gain, profit, onPress}) => {

  const [checkboxState, setCheckboxState] = useState(false);

  const container = {
        flexDirection: 'row',
        width: '100%',
        margin: 10,
        height: 60,
        flex:1,

        
      
  }  
  const tradeInfo = {
    width:'75%' 

  }

  const iconType = {
      marginRight:15,
      alignSelf: 'center',
      flex:0.1, 
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
            style={{ flex:0.1, justifyContent:'center', 
                      alignItems:'center'}}
            fillColor = 'white'
            isChecked={checkboxState}
             
            onPress={() => setCheckboxState(!checkboxState)} />


        <Icon name= {type === 'long' ? "diagonal-arrow-3" : "diagonal-arrow-2"} group="miscellaneous" 
              style={iconType} color = { type === 'long' ? '#6CBE49' : '#b02929' } />
        <View style={{borderBottom:2, flex:0.75}}>
        <View style= {{flexDirection:'row', borderBottomWidth:0.5, 
                        borderBottomColor: 'white', paddingVertical:10,
                        }}>
            <View style = {tradeInfo}>
                <Text style={{color:'white'}}>{title}</Text>
                <Text style={{color:'white'}}>Session: {session}</Text>
        </View>

        <Text style={PNL}>{gain}%</Text>
        </View>

        </View>

        <View style = {{flex: 0.1, justifyContent:'center', alignItems:'center'}}>
            { checkboxState  === false ? <TouchableOpacity onPress={onPress}> 
                    <Icon name="pen" group="basic" style={journalIcon}
                            color = 'white'/>
                    </TouchableOpacity> : null}
        </View>
        
        
      
       
   </View>
  )
}

export default TradeCard;
