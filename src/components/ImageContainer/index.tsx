import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import Backgroundimage from '../../../assets/images/backgroundImage.jpg'


export default function ImageContainer() {
  return (
    <View style={styles.footer}>
      <Image source={Backgroundimage} style={styles.Backgroundimage}/>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Backgroundimage: {
    height: 450,
    width: '100%',
  }
})
