import React, { useState } from 'react'
import {
    View, Text, SafeAreaView,
    ScrollView, Image,
    TextInput, TouchableOpacity, 
    KeyboardAvoidingView
} from 'react-native'
import Button from '../components/button'

const Notes = ({navigation}) => {
    const [text, onChangeText] = useState("");

    // styles 
    const container = {
        flex: 1,
        backgroundColor: '#1A1A1A',
    }

    const actionHeading = {
        flex: 0.15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    }

    const textContainerStyle = {
        flexGrow: 0.75, 
     //   backgroundColor:'blue'
    }

    const tradeContext = {
        paddingVertical: 25,
        // postion: 'absolute', 
        // bottom: 10,
        justifyContent:'space-evenly', 
        flexDirection:'row', 
        width: '100%', 
        
    }

    const footer2 ={
        flex: 0.1,
        postion: 'absolute', 
        // bottom: 10,
        //backgroundColor:'red'
    }
    return (
        <KeyboardAvoidingView style ={{flex:1}}behavior= {'padding'} enabled={true}>
        <View style={container}>
            <View style={actionHeading}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={{ color: 'white', margin: 15, fontSize: 18 }}>Cancel</Text>
                </TouchableOpacity>

                <Button title='Journal' size={'smallest'} taskIsComplete={true} />
            </View>

            <View style = {tradeContext}>
                    <View>
                        <Text style = {{color:'white', marginBottom: 5}}>Strategy</Text>
                        <View style = {{ backgroundColor: 'rgba(250, 250, 250, 0.1)', 
                                        padding: 15, borderRadius: 10}}>
                            <TouchableOpacity>
                                <Text style ={{color:'white'}}>QM</Text>
                            </TouchableOpacity>
                        </View>
                    </View>  

                    <View>
                        <Text style = {{color:'white', marginBottom: 5}}>Market Structure</Text>
                        <View style = {{ backgroundColor: 'rgba(250, 250, 250, 0.1)', 
                                        padding: 15, borderRadius: 10}}>
                            <TouchableOpacity>
                                <Text style ={{color:'white'}}>Bullish</Text>
                            </TouchableOpacity>
                        </View>
                    </View>  

                    <View>
                        <Text style = {{color:'white', marginBottom: 5}}>Trade Type</Text>
                        <View style = {{ backgroundColor: 'rgba(250, 250, 250, 0.1)', 
                                        padding: 15, borderRadius: 10}}>
                            <TouchableOpacity>
                                <Text style ={{color:'white'}}>Swing Trade</Text>
                            </TouchableOpacity>
                        </View>
                    </View>  
                </View>

            <ScrollView style={textContainerStyle}>

         

                <TextInput
                    multiline
                    numberOfLines={10}
                    style={{margin: 15, color: 'white', fontSize:20}}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="What's your reason for taking the trade?"
                    placeholderTextColor={'gray'}
                    keyboardType= {'default'}
                    keyboardAppearance ={'dark'}
                />
              
            </ScrollView>

         
               
            
                <View style={footer2}>

                </View>

        </View>
        </KeyboardAvoidingView>
    )
}

export default Notes