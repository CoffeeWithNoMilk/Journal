/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Button, StyleSheet, alert} from 'react-native';

const FindScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Find Screen </Text>
      <Button title="Click Here" onPress={() => alert('Button clicked!')} />
    </View>
  );
};

export default FindScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});
