/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View } from 'react-native';
import Icon from 'react-native-ico';

import HomeScreen from '../screens/homeScreen';
import JournalScreen from '../screens/journalScreen';
import LeaderBoard from '../screens/leaderboardScreen';
import AccountScreen from '../screens/accountScreen';

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator
           screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#1C1E20',
                    paddingHorizontal: 80,
                    borderTopColor:'#9c9c9c',
                    borderTopWidth: 0.3
                    // borderRadius: 15,
                    // position: 'absolute',
                    // bottom:10,
                    // shadowColor: '#000',
                    // shadowOpacity: 0.06,
                    // shadowOffset: {
                    //     width:10,
                    //     height:10
                    // }

                },
            }
            
            }>
        <Tab.Screen name= "Home" component={HomeScreen} options={{
            tabBarIcon: ({focused}) => (
                <View>
                    <Icon  width= {27} height= {27} size={30} name ="home" group="ui-interface" color= {focused ? 'white' : 'gray'}/>
                </View>
                ),
        }} />

        <Tab.Screen name= "Journal" component={JournalScreen} options={{
              tabBarIcon: ({focused}) => (
                <View>
                    <Icon width= {27} height= {27} name ="book" group="basic" color= {focused ? 'white' : 'gray'}/>
                </View>
                ),
        }}  />

        <Tab.Screen name= "LeaderBoard" component={LeaderBoard} options= {{
              tabBarIcon: ({focused}) => (
                <View>
                    <Icon width= {27} height= {27} name ="medal" group="ui-interface" color= {focused ? 'white' : 'gray'} />
                </View>
                ),
        }} />

        <Tab.Screen name= "Account" component={AccountScreen} options= {{
              tabBarIcon: ({focused}) => (
                <View>
                    <Icon width= {27} height= {27} name ="user" group="miscellaneous" color= {focused ? 'white' : 'gray'}/>
                </View>
                ),
        }} />

    </Tab.Navigator>
    );

};

export default Tabs;
