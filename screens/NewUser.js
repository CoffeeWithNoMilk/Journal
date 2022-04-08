import { Text, View, ScrollView } from 'react-native'
import React from 'react'
import Button from '../components/button'


const NewUser = ({ onPress}) => {

    //styles
    const container = {
        flex: 0.75,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        width:'100%',
        justifyContents: 'center',
        paddingHorizontal: 20
    }

    const infoContainer = {
        backgroundColor: 'rgba(250, 250, 250, 0.1)',
        width: '100%',
        padding: 20,
        borderRadius: 10, 
        marginVertical: 10
    }

    return (
        <View style={container}>
            <ScrollView style = {{flex: 0.8, width:'100%'}} showsVerticalScrollIndicator= {false}>
                <View style = {infoContainer}>
                    <Text style = {{fontWeight: '600', fontSize: 18, color: 'white'}}>Journal Trades | Build Acute Score</Text>
                    <Text style = {{ fontWeight: '500', fontSize: 14, color: 'grey', marginTop: 10}}>
                        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea '}
                    </Text>
                </View>  

                <View style = {infoContainer}>
                    <Text style = {{fontWeight: '600', fontSize: 18, color: 'white'}}>Get started with myfxbook</Text>
                    <Text style = {{ fontWeight: '500', fontSize: 14, color: 'grey', marginTop: 10}}>
                        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea '}
                    </Text>
                </View>  

                
            </ScrollView>

            <View style={{ flex: 0.2, width: '100%', justifyContent: 'center', 
                                    alignItems: 'center', }}>
                <Button title={'Sync Account With myfxbook'}
                    size={'large'}
                    taskIsComplete={true} type={'withImg'} img= {require('../assets/images/myfxbook.png')}  
                    onPress={onPress} />
            </View>



        </View>
    )
}

export default NewUser


