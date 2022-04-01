import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'

const leaders = ({rank,name, community, points, position}) => {

  const container ={
      width: '100%',
      backgroundColor: rank === 1 ? '#6CBE49' : rank === 2 ? 'white': rank === 3 ? '#E9971D' : 'null',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 30,
      paddingVertical: 20,
      marginVertical: 10,
      borderRadius: 25
  } 

  const imgContainer = {
    width: 36,
    height: 36,
    borderRadius:24,
    marginHorizontal: 20,
};

//universal
const textStyle = {
 color: rank === 1 ? 'black' : rank === 2 ? 'black': rank === 3 ? 'black' : 'white',
}

  return (
    <TouchableOpacity style = {container}>
       

        <View style={{flexDirection: 'row', alignItems:'center'}}>
        <Text style = {textStyle}>{rank}.</Text>
        <Image style={imgContainer} source={require('../assets/images/myfxbook.png')}/>
        <View>
            <Text style ={[textStyle,{fontWeight: '700', fontSize: 16}]}>{name}</Text>
            <Text style = {textStyle}>{community}</Text>
        </View>
        </View>

        <View style={{flexDirection: 'row', alignItems:'baseline'}}>
        <Text style = {[textStyle,{fontWeight:'600', fontSize: 15}]}>{points}</Text>
        <Text style ={[textStyle,{fontSize: 12}]}> pts.</Text>
        </View>

        
    </TouchableOpacity>
  )
}

export default leaders
