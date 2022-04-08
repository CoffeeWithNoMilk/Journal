import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

import NoStrategy from './noStrategy'



const StrategyBox = ({navigation}) => {
  //controls strategybox view
  const [hasAStrategy, setHasAStrategy] = useState(false)

  if (hasAStrategy) {
      return(
        <View style={SBContainer}>
        <ScrollView>

          <TouchableOpacity style={{
            justifyContent: 'space-between', flexDirection: 'row', backgroundColor: 'rgba(250, 250, 250, 0.1)',
            borderRadius: 19, paddingVertical: 20, alignItems: 'center'
          }}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ height: 50, width: 50, backgroundColor: 'green', borderRadius: 50, marginHorizontal: 20 }}>

              </View>
              <Text style={{ color: 'white', fontSize: 20 }}>ICT Breaker</Text>
            </View>


            <Icon name="keyboard-right-arrow-button" group="material-design" style={{ margin: 10 }}
              color='#808080' />
          </TouchableOpacity>
        </ScrollView>

        <View style={{ position: 'absolute', bottom: 10, alignSelf: 'flex-end', right: 20 }}>
          <AddButton title={'Add Strategy'} size={'small'} type={'withIcon'} taskIsComplete={true} />
        </View>

      </View>
      )
  }
  else {
    return (
      <NoStrategy onPress={() => navigation.navigate('AddStrategy')}/>
    )
  }
}

export default StrategyBox

//stlying goes here
const SBContainer = { 
    flex: 1, 
    width: '100%', 
    padding: 30 
}

