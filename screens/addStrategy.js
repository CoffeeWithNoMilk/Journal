import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Button from '../components/button'

const AddStrategy = ({ navigation, onPress }) => {
  //state
  const [text, onChangeText] = useState("");

  return (
    <View style={container}>
      <View style={actionHeading}>
        <TouchableOpacity onPress={() => navigation.navigate('App')}>
          <Text style={{ color: 'white', fontSize: 16 }}>Cancel</Text>
        </TouchableOpacity>

        <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>Add Strategy</Text>

        <Button title={'Save'} size={'smallest'} taskIsComplete={false} onPress={() => navigation.navigate('App')} />
      </View>

      <View style={{ flex: 1, padding: 20 , alignItems:'center', width:'100%',}}>

        <View style={{ flex: 0.15 , width:'100%'}}>

        </View>

        <View style={{ flex: 0.2, width:'100%' }}>
            <Text style = {{color:'white', fontSize: 11}}>Upload chart images of how this strategy works</Text>
        </View>

        <View style={{
          backgroundColor: 'rgba(250, 250, 250, 0.1)',
          flex: 0.5, width: "100%",
          borderRadius: 19
        }}>

          <TextInput
            multiline
            numberOfLines={10}
            style={{ margin: 25, color: 'white' }}
            onChangeText={onChangeText}
            value={text}
            placeholder="Add Description"
            placeholderTextColor={'gray'}
            keyboardType={'default'}
            keyboardAppearance={'dark'}

          />
        </View>

        <View style = {{flex: 0.15, justifyContent:'center'}}>
          <Button title={'Done'} taskIsComplete={true} size={'large'} />
        </View>
       

      </View>



    </View>
  )
}

export default AddStrategy

//styling goes here

const container = {
  flex: 1,
  backgroundColor: '#1A1A1A',
}

const actionHeading = {
  paddingHorizontal: 20,
  paddingVertical: 20,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}