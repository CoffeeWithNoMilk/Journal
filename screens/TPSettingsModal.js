import { View, Text, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../components/button'

import BouncyCheckbox from 'react-native-bouncy-checkbox'
import Icon from 'react-native-ico'

//dummy data

const currencypairs = [
    {
        id: 1,
        symbol: 'AUDCHF',
        name: 'Australian Dollar vs Swiss Franc'
    },
    {
        id: 2,
        symbol: 'AUDJPY',
        name: 'Australian Dollar vs Japenese Yen'
    },
    {
        id: 3,
        symbol: 'CHFJPY',
        name: 'Swiss Frank vs Japense Yen'
    },
    {
        id: 4,
        symbol: 'EURAUD',
        name: 'Euro vs Australian Dollar'
    },
]

const ActionBtn = ({ text, onPress, color }) => {

    return (
        <TouchableOpacity style={{
            backgroundColor: color, padding: 15,
            borderRadius: 10, marginVertical: 10, marginRight: 18
        }} onPress={onPress} >
            <Text style={{
                color: 'white', fontSize: 18,

            }}>{text}</Text>
        </TouchableOpacity>
    )
}

const CurrencyPair = ({ symbol, id, onPress, name }) => {

    const [checkboxState, setCheckboxState] = useState(false);

    const CPContainer = {
        width: '100%',

        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#808080',
        alignItems: 'center',
    }

    return (
        <TouchableOpacity  onPress = {onPress} style={CPContainer}>
            <BouncyCheckbox
                size={15}
                style={{
                    flex: 0.1, justifyContent: 'center',
                    alignItems: 'center', 
                    marginLeft: 20
                }}
                fillColor='white'
                isChecked={checkboxState}
                
                />
            <View style={{
                flexDirection: 'row', justifyContent: 'space-between', width: '100%',
                alignItems: 'center', width: '83%', marginLeft: 20,
            }}>

                <View style={{ flexDirection: 'column', width: '100%' }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>{symbol}</Text>
                    <Text style={{ color: 'white', fontSize: 12 }}>{name}</Text>
                </View>


            </View>


        </TouchableOpacity>
    )
}

//FlatList render function
const renderCurrenyPairs = ({ item }) => (
    <CurrencyPair id={item.id}
        symbol={item.symbol}
        name={item.name}
    //onPress={() => navigation.navigate('TradeDetail', {symbol : item.symbol, type: item.type})}
    />
)


const TPSettingsModal = ({ navigation, route }) => {

    //store states of users prefereed timeframe in minutes
    const [minutes, setMinutes] = useState([
        { label: '1m', value: false },
        { label: '3m', value: false },
        { label: '5m', value: false },
        { label: '15m', value: false },
        { label: '30m', value: false },
        { label: '45m', value: false },
    ]);

    //store states of users prefereed timeframe in hours
    const [hours, setHours] = useState([
        { label: '1H', value: false },
        { label: '2H', value: false },
        { label: '3H', value: false },
        { label: '4H', value: false },
    ]);

    //store states of users prefereed timeframe in days
    const [days, setDays] = useState([
        { label: '1D', value: false },
        { label: '1W', value: false },
        { label: '1M', value: false },
    ]);



    // state for text input
    const [text, onChangeText] = useState("");
    //gets the modal title through route props
    const { title } = route.params

    const handleMinuteSelection = ({ minutes, setMinutes }) => label => {
        const newButtonState = minutes.map(minute => {
            if (minute.label === label) {
                return (minute = { label: minute.label, value: !minute.value })
            }
            return {
                label: minute.label,
                value: minute.value
            }
        })

        setMinutes(newButtonState)
    }

    const handleHourSelection = ({ hours, setHours }) => label => {
        const newButtonState = hours.map(hour => {
            if (hour.label === label) {
                return (hour = { label: hour.label, value: !hour.value })
            }
            return {
                label: hour.label,
                value: hour.value
            }
        })
        setHours(newButtonState)
    }

    const handleDaySelection = ({ days, setDays }) => label => {
        const newButtonState = days.map(day => {
            if (day.label === label) {
                return (day = { label: day.label, value: !day.value })
            }
            return {
                label: day.label,
                value: day.value
            }
        })
        setDays(newButtonState)
    }



    if (title === 'Watchlist') {
        return (
            <View style={container}>
                <View style={actionHeading}>
                    <TouchableOpacity onPress={() => navigation.navigate('App')}>
                        <Text style={{ color: 'white', fontSize: 16 }}>Cancel</Text>
                    </TouchableOpacity>

                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>{title}</Text>

                    <Button title='Save' size={'smallest'} taskIsComplete={false} onPress={() => navigation.navigate('App')} />
                </View>

                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.5)', width: '100%' }}>
                <FlatList
                    data={currencypairs}
                    renderItem={renderCurrenyPairs}
                    keyExtractor={item => item.id}
                />
                </View>
                

            </View>

        )
    }

    if (title === 'Timeframe') {
        return (
            <View style={container}>
                <View style={actionHeading}>
                    <TouchableOpacity onPress={() => navigation.navigate('App')}>
                        <Text style={{ color: 'white', fontSize: 16 }}>Cancel</Text>
                    </TouchableOpacity>

                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>{title}</Text>

                    <Button title='Save' size={'smallest'} taskIsComplete={false} onPress={() => navigation.navigate('App')} />

                </View>

                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.5)', width: '100%' }}>
                    <ScrollView showsVerticalScrollIndicator={false}
                        style={{ backgroundColor: '#1a1a1a', flex: 1, width: "100%", marginTop: 30, padding: 20, }}>

                        <View style={{ width: '100%', paddingVertical: 15, }}>
                            <Text style={{ color: 'grey', fontSize: 14, fontWeight: '500' }}>MINUTES</Text>
                            <ScrollView style={{ flexDirection: 'row' }} horizontal={true} showsHorizontalScrollIndicator={false}>

                                <ActionBtn text={'1m'} onPress={() => handleMinuteSelection({ minutes, setMinutes })('1m')}
                                    color={minutes[0].value === false ? 'rgba(250, 250, 250, 0.1)' : '#6CBE49'} />
                                <ActionBtn text={'3m'} onPress={() => handleMinuteSelection({ minutes, setMinutes })('3m')}
                                    color={minutes[1].value === false ? 'rgba(250, 250, 250, 0.1)' : '#6CBE49'} />
                                <ActionBtn text={'5m'} onPress={() => handleMinuteSelection({ minutes, setMinutes })('5m')}
                                    color={minutes[2].value === false ? 'rgba(250, 250, 250, 0.1)' : '#6CBE49'} />
                                <ActionBtn text={'15m'} onPress={() => handleMinuteSelection({ minutes, setMinutes })('15m')}
                                    color={minutes[3].value === false ? 'rgba(250, 250, 250, 0.1)' : '#6CBE49'} />
                                <ActionBtn text={'30m'} onPress={() => handleMinuteSelection({ minutes, setMinutes })('30m')}
                                    color={minutes[4].value === false ? 'rgba(250, 250, 250, 0.1)' : '#6CBE49'} />
                                <ActionBtn text={'45m'} onPress={() => handleMinuteSelection({ minutes, setMinutes })('45m')}
                                    color={minutes[5].value === false ? 'rgba(250, 250, 250, 0.1)' : '#6CBE49'} />

                            </ScrollView>


                        </View>

                        <View style={{ width: '100%', paddingVertical: 15, }}>
                            <Text style={{ color: 'grey', fontSize: 14, fontWeight: '500' }}>HOURS</Text>
                            <ScrollView style={{ flexDirection: 'row' }} horizontal={true} showsHorizontalScrollIndicator={false}>

                                <ActionBtn text={'1H'} onPress={() => handleHourSelection({ hours, setHours })('1H')}
                                    color={hours[0].value === false ? 'rgba(250, 250, 250, 0.1)' : '#6CBE49'} />
                                <ActionBtn text={'2H'} onPress={() => handleHourSelection({ hours, setHours })('2H')}
                                    color={hours[1].value === false ? 'rgba(250, 250, 250, 0.1)' : '#6CBE49'} />
                                <ActionBtn text={'3H'} onPress={() => handleHourSelection({ hours, setHours })('3H')}
                                    color={hours[2].value === false ? 'rgba(250, 250, 250, 0.1)' : '#6CBE49'} />
                                <ActionBtn text={'4H'} onPress={() => handleHourSelection({ hours, setHours })('4H')}
                                    color={hours[3].value === false ? 'rgba(250, 250, 250, 0.1)' : '#6CBE49'} />


                            </ScrollView>


                        </View>

                        <View style={{ width: '100%', paddingVertical: 15, }}>
                            <Text style={{ color: 'grey', fontSize: 14, fontWeight: '500' }}>DAYS</Text>
                            <ScrollView style={{ flexDirection: 'row' }} horizontal={true} showsHorizontalScrollIndicator={false}>

                                <ActionBtn text={'1D'} onPress={() => handleDaySelection({ days, setDays })('1D')}
                                    color={days[0].value === false ? 'rgba(250, 250, 250, 0.1)' : '#6CBE49'} />
                                <ActionBtn text={'1W'} onPress={() => handleDaySelection({ days, setDays })('1W')}
                                    color={days[1].value === false ? 'rgba(250, 250, 250, 0.1)' : '#6CBE49'} />
                                <ActionBtn text={'1M'} onPress={() => handleDaySelection({ days, setDays })('1M')}
                                    color={days[2].value === false ? 'rgba(250, 250, 250, 0.1)' : '#6CBE49'} />



                            </ScrollView>


                        </View>
                    </ScrollView>
                </View>

            </View>

        )
    }

    else {
        return (

            <View style={container}>
                <View style={actionHeading}>
                    <TouchableOpacity onPress={() => navigation.navigate('App')}>
                        <Text style={{ color: 'white', fontSize: 16 }}>Cancel</Text>
                    </TouchableOpacity>

                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>{title}</Text>

                    <Button title='Save' size={'smallest'} taskIsComplete={false} onPress={() => navigation.navigate('App')} />
                </View>

                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.5)', width: '100%' }}>
                    <View style={{ backgroundColor: '#1a1a1a', flex: 0.3, width: "100%", marginTop: 30 }}>
                        <TextInput
                            multiline
                            numberOfLines={10}
                            style={{ margin: 15, color: 'white' }}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Add Description"
                            placeholderTextColor={'gray'}
                            keyboardType={'default'}
                            keyboardAppearance={'dark'}

                        />
                    </View>
                </View>
            </View>

        )
    }

}

export default TPSettingsModal

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
