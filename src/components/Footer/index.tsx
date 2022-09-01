import React from 'react'
import { StyleSheet, useWindowDimensions, Text, View } from 'react-native'

const paddingResponsive = (width: number) => {
  if (width < 360) return '0'
  else if (width < 480) return '25%'
  else if (width < 680) return '30%'
  else if (width > 680) return '40%'
}

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.logo}>test</Text>
      <Text style={styles.logo} >Segunda a Sexta - 09h às 20h Sábados - 08h às 18h</Text>
      <View>
        <Text style={styles.logo} >Rua Professor Moraes, 476</Text>
        <Text style={styles.logo} >Tel: 31 3055 3007</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    height: '25vh',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: "#000000d6"
  },
  logo: {
    color:  "#e8e8e8",
  }
})
