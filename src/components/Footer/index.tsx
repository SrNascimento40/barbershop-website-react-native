import React from 'react'
import { StyleSheet, useWindowDimensions, Text, View } from 'react-native'

const paddingResponsive = (width: number) => {
  if (width < 360) return '0'
  else if (width < 480) return '25%'
  else if (width < 680) return '30%'
  else if (width > 680) return '40%'
}

export default function Header() {
  return (
    <footer style={styles.footer}>
      <p>test</p>
    </footer>
  )
}

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    height: '10vh',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'black',
    alignItems: 'center',
    color: 'white'
  }
})
