import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import ImageSlider from 'react-native-image-slider';
import Icon from 'react-native-ico'

const TradeDetail = ({ route, navigation }) => {


    const images = [
        'https://placeimg.com/640/640/nature',
        'https://placeimg.com/640/640/people',
        'https://placeimg.com/640/640/animals',
        'https://placeimg.com/640/640/beer',
    ];
    // styles 
    const container = {
        flex: 1,
        backgroundColor: '#1A1A1A',
    }

    const header = {
        height: '20%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    }

    const carouselContainer = {
        height: '30%',
        backgroundColor: 'white',
    }

    const tradeContext = {
        //      flex: 0.25, 
        padding: 20
    }

    const summary = {
        paddingHorizontal: 20,
        width: '100%',
        //  flex: 0.2, 
        flexDirection: 'column',
        // backgroundColor:'red'

    }

    const tradeSnapshots = [
        'http://placeimg.com/640/480/any',
        'http://placeimg.com/640/480/any'

    ]

    //alert(JSON.stringify(route))

    return (
        <View style={container}>
            <View style={header}>
            <TouchableOpacity onPress={() => navigation.navigate('Journal')} 
                    style = {{flexDirection:'row', alignItems:'center'}}>
            <Icon name="left-arrow" group="ui-interface"  style={{height: 20, width: 20, marginLeft: 15}}
                            color = 'white'/>
                    <Text style={{ color: 'white', marginVertical: 15, marginLeft: 5, fontSize: 15 }}>Journal</Text>
                </TouchableOpacity>
                <View style = {{ padding: 15, flexDirection:'row', justifyContent:'space-between',
                                alignItems:'center' }}>
                    <View style = {{flexDirection:"row", alignItems:'center'}}>
                        <Text style={{ color: 'white', fontSize: 24, fontWeight: '600', marginRight:10 }}>{route.params.symbol}</Text>
                        <View style = {{backgroundColor:'green', borderRadius: 10, 
                                        paddingHorizontal: 10 }}>
                        <Text style={{ color: 'white'}}>{route.params.type}</Text>
                        </View>
                    </View>
                    <Text style={{ color: 'gray', fontWeight: '600', fontSize: 16, }}>Thurs, 04 April</Text>
                </View>

            </View>

            <View style={carouselContainer}>
                <ImageSlider images={tradeSnapshots} />
            </View>

            <ScrollView>
                <View style={tradeContext}>
                    <Text style={{ color: 'gray' }}>09:48 am</Text>
                    <Text style={{ color: 'white', marginTop: 10 }}>Price has been hanging in a major support area. I saw a break in market
                        structure on the H4, but i was impatient to wait for a RTO and took an inst..</Text>

                </View>
                <View style={summary}>
                    <View style={{ backgroundColor: 'rgba(250, 250, 250, 0.1)', padding: 15, borderRadius: 10 }}>
                        <Text style={{ color: 'white', fontSize: 16 }}>Strategy: Continous Quasimodo</Text>
                        <Text style={{ color: 'white', fontSize: 16, marginTop: 5 }}>Risk: 2%</Text>
                        <Text style={{ color: 'white', fontSize: 16, marginTop: 5 }}>Outcome: Win</Text>
                        <Text style={{ color: 'white', fontSize: 16, marginTop: 5 }}>Trade Type: Day Trading</Text>
                        <Text style={{ color: 'white', fontSize: 16, marginTop: 5 }}>Session: London</Text>
                    </View>

                </View>
            </ScrollView>


        </View>
    )
}

export default TradeDetail;