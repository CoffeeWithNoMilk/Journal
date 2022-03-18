/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Button, StyleSheet, alert} from 'react-native';
import Tapbar from '../components/journaltapbar';

const JournalScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Tapbar />
        <View style = {{ borderTopColor:'#9c9c9c',
                    borderTopWidth: 0.3, width: '100%'}}></View>
    </View>
  );
};

export default JournalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor: '#1A1A1A',
  },
});
