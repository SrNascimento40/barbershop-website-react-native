import React from 'react'
import { Button, StyleSheet, Alert, Text, View } from 'react-native'


export default function Scheduler() {
  const funcaoRand = () => {
    console.log('ayrton senna');
  }

  return (
    <View style={styles.footer}>
      <Text style={{color: 'blue'}}>aqui você vai agendar um horário</Text>
      <Button title='agendar' onPress={() => funcaoRand()} />
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
