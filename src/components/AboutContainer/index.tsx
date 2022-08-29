import React from 'react'
import { StyleSheet, useWindowDimensions, Text, View } from 'react-native'


export default function AboutContainer() {
  return (
    <View style={styles.footer}>
      <Text style={{color: 'blue'}}>test</Text>
      <Text>texto com um monte de abobrinha que depois eu vou susbtituir, mas por enquanto ele fica aí me dando noção de espaço</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    height: '10vh',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
