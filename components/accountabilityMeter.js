import React, {useState} from 'react'
import {View, Text} from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
//import CircularProgress from 'react-native-circular-progress-indicator'

const accountabilityMeter = () => {

  //state
  const [checkboxState, setCheckboxState] = useState(true);


  const container = {
      backgroundColor: 'rgba(250, 250, 250, 0.1)',
      width: '85%',
      paddingVertical: 20,
      borderRadius: 19
  }

  const activityIndicators = {
    width: '100%',
  }
  return (
    <View style = {container}>
  
      <View style = {activityIndicators}>
      <View style={{ width: '100%' }}>
        <View style={{
          flexDirection: 'row', alignItems: 'center',
          width: '100%', paddingHorizontal: 25,
        }}>
          <View style={{ margin: 10, flexDirection: 'row' }}>
            <BouncyCheckbox
              size={15}
              fillColor='#6CBE49'
              isChecked={checkboxState}
              onPress={() => setCheckboxState(!checkboxState)} />

            <Text style={{ color: 'white' }}>Journal all trades</Text>
          </View>

        </View>
      </View>

      <View style={{ width: '100%' }}>
        <View style={{
          flexDirection: 'row', alignItems: 'center',
          width: '100%', paddingHorizontal: 25,
        }}>
          <View style={{ margin: 10, flexDirection: 'row' }}>
            <BouncyCheckbox
              size={15}
              fillColor='#B02929'
              isChecked={checkboxState}
              onPress={() => setCheckboxState(!checkboxState)} />

            <Text style={{ color: 'white' }}>Do not execeed your risk limit</Text>
          </View>

        </View>
      </View>
      <View style={{ width: '100%' }}>
        <View style={{
          flexDirection: 'row', alignItems: 'center',
          width: '100%', paddingHorizontal: 25,
        }}>
          <View style={{ margin: 10, flexDirection: 'row' }}>
            <BouncyCheckbox
              size={15}
              fillColor='#E9971D'
              isChecked={checkboxState}
              onPress={() => setCheckboxState(!checkboxState)} />

            <Text style={{ color: 'white' }}>Do not overtrade</Text>
          </View>

        </View>
      </View>

      </View>
      
    </View>
  )
}

export default accountabilityMeter
