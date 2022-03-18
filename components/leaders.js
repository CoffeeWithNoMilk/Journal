import React from 'react'
import {View, Text, Image} from 'react-native'

const leaders = () => {

  const container ={
      width: '90%',
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 30,
      paddingVertical: 20,
      margin: 20,
      elevation: 10,
      borderRadius: 25
  } 

  const imgContainer = {
    width: 36,
    height: 36,
    borderRadius:24,
    marginHorizontal: 20,
};

  return (
    <View style = {container}>
       

        <View style={{flexDirection: 'row', alignItems:'center'}}>
        <Text>1</Text>
        <Image style={imgContainer} source={require('../assets/images/myfxbook.png')}/>
        <View>
            <Text style ={{fontWeight: '700', fontSize: 16}}>Steve</Text>
            <Text>8DC</Text>
        </View>
        </View>

        <View style={{flexDirection: 'row', alignItems:'baseline'}}>
        <Text style = {{fontWeight:'600', fontSize: 15}}>2099</Text>
        <Text style ={{fontSize: 12}}> pts.</Text>
        </View>

        
    </View>
  )
}

export default leaders
