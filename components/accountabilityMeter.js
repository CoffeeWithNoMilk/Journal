import React from 'react'
import {View, Text} from 'react-native'
//import CircularProgress from 'react-native-circular-progress-indicator'

const accountabilityMeter = () => {

  const container = {
      backgroundColor: 'rgba(250, 250, 250, 0.1)',
      width: '85%',
      padding: 20,
      borderRadius: 19
  }

  const activityIndicators = {
    height: 50,
    width: '100%',
  }
  return (
    <View style = {container}>
  
      <View style = {activityIndicators}>

      </View>
      
    </View>
  )
}

export default accountabilityMeter
