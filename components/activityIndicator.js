import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

import { View } from './view'

export const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={'#6CBE49'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#1a1a1a'
  }
});