import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/images/myfxbook.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    marginBottom: 20,
    borderRadius: 50
  },
})
