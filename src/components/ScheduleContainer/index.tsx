import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


export default function Scheduler() {
  const funcaoRand = () => {
    console.log('ayrton senna');
  }

  return (
    <View style={styles.SchedulerContainer}>
      <Text style={styles.title}>Agende um horário!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => funcaoRand()}
      >
        <Text style={styles.textButton}>AGENDAR</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  SchedulerContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 40,
    backgroundColor: "#272727"
  },
  title: {
    paddingTop: 60,
    paddingBottom: 80,
    fontWeight: "600",
    fontSize: 36,
    color: '#e8e8e8'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    padding: 10,
    borderRadius: 7,
  },
  textButton: {
    Color: '#272727',
    fontWeight: '500'
  }
})
