/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import email from 'react-native-email'
import { CountUp } from 'use-count-up'

import Icon from 'react-native-ico';


const actionStyle = {
  flexDirection: 'row', alignItems: 'center',
  padding: 15,
  flexDirection: 'row',
  // borderBottomWidth: 0.5,
  // borderBottomColor: '#808080',
  alignItems: 'center',
  backgroundColor: 'rgba(250, 250, 250, 0.1)',
  marginHorizontal: 15,
  borderRadius: 10,
}

const accountabilityScoreStyle = {
  flex: 0.25,
  backgroundColor: 'rgba(250, 250, 250, 0.1)',
}


const AccountScreen = ({ navigation }) => {

  const handleEmail = () => {
    const to = ['credivasolutions@gmail.com', 'da.desiigna@gmail.com'] // string or array of email addresses
    email(to, {
      // Optional additional arguments
      // cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
      // bcc: 'mee@mee.com', // string or array of email addresses
      subject: '',
      //  body: 'What would you like us to improve on?'
    }).catch(console.error)
  }

  return (
    <View style={styles.container}>

      <View style={{
        flex: 0.2, flexDirection: 'row', justifyContent: 'center',
        alignItems: 'flex-end',
      }}>
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', }}>Welcome back, Charles!</Text>
          <Text style={{ fontSize: 12, fontWeight: '400', color: 'white', alignSelf: 'center', marginVertical: 10 }}>
            Your Accountability score</Text>
        </View>

      </View>

      <View style={accountabilityScoreStyle}>

      </View>


      <View style={{ flex: 0.35 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12, marginHorizontal: 30, marginVertical: 15 }}>
          Accountability Factors
        </Text>

        <View style={{ flex: 1 }}>

          <View style={{ flex: 0.5, flexDirection: 'row' }}>
            <View style={{
              flex: 0.5, borderRightWidth: 2,
              borderTopWidth: 2, borderColor: 'rgba(250, 250, 250, 0.1)'
            }}>

              <View style={{
                height: '100%', alignItems: 'flex-start', justifyContent: 'center',
                flexDirection: 'column', padding: 15
              }}>

                <Text style={{ fontSize: 32, fontWeight: '600', color: 'white', }}>
                  <CountUp isCounting end={56} duration={2} />%
                </Text>

                <Text style={{ fontSize: 12, fontWeight: '500', color: 'white' }}>
                  Accountable Trader
                </Text>
                <Text style={{ fontSize: 10, fontWeight: '200', color: 'white', marginTop: 5, fontWeight: '300', color: 'gray' }}>
                  Monthly - 50pts  |  Hat-trick - 350pts
                </Text>

              </View>

            </View>
            <View style={{
              flex: 0.5,
              borderTopWidth: 2, borderColor: 'rgba(250, 250, 250, 0.1)',
            }} >

              <View style={{
                height: '100%', alignItems: 'flex-start', justifyContent: 'center',
                flexDirection: 'column', padding: 15, paddingRight: 10
              }}>

                <Text style={{ fontSize: 32, fontWeight: '600', color: 'white', }}>
                  Fair
                </Text>

                <Text style={{ fontSize: 12, fontWeight: '500', color: 'white' }}>
                  Risk Manager
                </Text>
                <Text style={{ fontSize: 10, fontWeight: '200', color: 'white', marginTop: 5, fontWeight: '300', color: 'gray' }}>
                  Excellent( {'<'} 3% per trade) - 50pts
                </Text>
                <Text style={{ fontSize: 10, fontWeight: '200', color: 'white', marginTop: 1, fontWeight: '300', color: 'gray' }}>
                  Good( 3-5% per trade) - 25pts
                </Text>
                <Text style={{ fontSize: 10, fontWeight: '200', color: 'white', marginTop: 1, fontWeight: '300', color: 'gray' }}>
                  Fair - 10pts  |  Poor - 0pts
                </Text>

              </View>

            </View>
          </View>
          <View style={{ flex: 0.5, flexDirection: 'row' }}>
            <View style={{
              flex: 0.5,
              borderTopWidth: 2, borderBottomWidth: 2,
              borderColor: 'rgba(250, 250, 250, 0.1)',
            }}>

              <View style={{
                height: '100%', alignItems: 'flex-start', justifyContent: 'center',
                flexDirection: 'column', padding: 15
              }}>

                <Text style={{ fontSize: 32, fontWeight: '600', color: 'white', }}>
                  <CountUp isCounting end={1.07} duration={1} />
                </Text>

                <Text style={{ fontSize: 12, fontWeight: '500', color: 'white' }}>
                  Profitablity Factor
                </Text>
                <Text style={{ fontSize: 10, fontWeight: '300', color: 'gray', marginTop: 5 }}>
                  {'>'} 30% Monthly - 50pts
                </Text>

              </View>

            </View>
            <View style={{
              flex: 0.5, borderLeftWidth: 2,
              borderTopWidth: 2, borderBottomWidth: 2, borderColor: 'rgba(250, 250, 250, 0.1)',
            }} >

              <View style={{
                height: '100%', alignItems: 'flex-start', justifyContent: 'center',
                flexDirection: 'column', padding: 15
              }}>

                <Text style={{ fontSize: 32, fontWeight: '600', color: 'white', }}>
                <CountUp isCounting end={8} duration={1} />
                </Text>

                <Text style={{ fontSize: 12, fontWeight: '500', color: 'white' }}>
                  Track Record (Months)
                </Text>
                <Text style={{ fontSize: 10, fontWeight: '300', color: 'gray', marginTop: 5 }}>
                  3 months - 50pts
                </Text>

              </View>

            </View>
          </View>

        </View>
      </View>



      {/* <TouchableOpacity style={actionStyle}>
        <View style={{
          width: 30, height: 30, borderRadius: 30,
          backgroundColor: 'green', marginRight: 20
        }}></View>
        <Text style={{ color: 'white', fontWeight: '600' }}>ThankGod Charles </Text>
      </TouchableOpacity> */}


      <View style={{ flex: 0.2, justifyContent: 'center', }}>
        <View style={{ flex: 1, flexDirection: 'row', height: 30, alignItems: 'center' }}>
          <View style={{ flex: 0.5, }}>
            <TouchableOpacity style={actionStyle}>
              <Icon name="question" group="miscellaneous" height="20" width="20"
                color='white' style={{ marginRight: 10 }} />
              <Text style={{ color: 'white', fontWeight: '600' }}>FAQ</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 0.5, }}>
            <TouchableOpacity style={actionStyle} onPress={handleEmail}>
              <Icon name="chat-bubble" group="material-design" height="20" width="20"
                color='white' style={{ marginRight: 10 }} />
              <Text style={{ color: 'white', fontWeight: '600' }}>Give feedback </Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
          <TouchableOpacity style={actionStyle}>
            <Image style={{
              width: 30, height: 30, borderRadius: 30,
              marginRight: 20
            }} source={require('../assets/images/myfxbook.png')} />
            <Text style={{ color: 'white', fontWeight: '600' }}>Switch Myfxbook account</Text>
          </TouchableOpacity>
        </View>

      </View>







    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',

  },
});
