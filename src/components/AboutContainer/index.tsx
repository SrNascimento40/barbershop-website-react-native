import React from 'react'
import { StyleSheet, useWindowDimensions, Text, View } from 'react-native'

export default function AboutContainer() {
  return (
    <View style={styles.AboutContainer}>
      <Text style={styles.title}>Sobre</Text>
      <Text style={styles.text}>
        texto com um monte de abobrinha que depois eu vou substituir, mas por enquanto ele fica aí me dando noção de espaço
        texto com um monte de abobrinha que depois eu vou substituir, mas por enquanto ele fica aí me dando noção de espaço
        texto com um monte de abobrinha que depois eu vou substituir, mas por enquanto ele fica aí me dando noção de espaço.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  AboutContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 40,
    backgroundColor: "#e8e8e8"
  },
  title: {
    paddingTop: 40,
    padding: 20,
    fontWeight: "600",
    fontSize: 36,
    color: "#0a0a0a"
  },
  text: {
    textAlign: 'center',
    width: '85%',
    padding: 20,
    fontSize: 16,
    color: "#0a0a0a"
  }
})
