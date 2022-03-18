import React from 'react'
import {View, Text} from 'react-native'
//import CircularProgress from 'react-native-circular-progress-indicator'

const accountabilityMeter = () => {

  const container = {
      backgroundColor: '#282A2E',
      width: '85%',
      padding: 20,
      borderRadius: 19
  }

  const activityIndicators = {
    height: 120,
    width: '100%',
  }
  return (
    <View style = {container}>
        <Text style = {{alignSelf:'center', color: 'white'}}>Accountability Metrics</Text>

      <View style = {activityIndicators}>

      </View>
      
    </View>
  )
}

export default accountabilityMeter
