import { View, Text, Image } from 'react-native'
import React from 'react'
import Button from '../components/button'

//stlying
const container = {
    flex: 1,
    width: '100%',
}

const imgContainer = {
    height: '100%',
    width:'100%', 
}

const noStrategy = ({onPress}) => {
  return (
    <View style = {container}>
        <View style = {{ flex:0.7, justifyContent:'center', alignItems:'center'}}>
            <View style = {{height:'50%', width:'80%', padding:20}}>
                <Image style = {imgContainer} source={require('../assets/images/Chess-bro.png')}/>
            </View>
        <Text style = {{color: 'white', marginTop:10}}>Trading effectively is about 
        </Text>
        <Text style = {{color: 'white', marginTop:5}}>assessing probabilities, not certainties.</Text>
        </View>
        <View style = {{flex: 0.3, alignItems:'center', justifyContent:'flex-end', padding: 10}}>
            <Button title = {'Add Strategy'} size = {'large'} type = {'withIcon'} onPress={onPress}/>
        </View>
      
    </View>
  )
}

export default noStrategy