/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Button, StyleSheet, alert} from 'react-native';

const LeaderBoardScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>LeaderBoard Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button clicked!')} />
    </View>
  );
};

export default LeaderBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});
