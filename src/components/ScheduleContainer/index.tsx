import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import background from '../../../assets/images/backgroundSchedule.jpg'


export default function Scheduler() {
  const funcaoRand = () => {
    console.log('ayrton senna');
  }

  return (
    <ImageBackground
      resizeMode='cover'
      source={background}
      blurRadius={5}
      style={styles.SchedulerContainer}>
      <Text style={styles.title}>Agende um horário!</Text>
      <a href='https://www.trinks.com/ferreirabarbearia' target="_blank">
        <TouchableOpacity
          style={styles.button}
          onPress={() => funcaoRand()}>
          <Text style={styles.textButton}>AGENDAR</Text>
        </TouchableOpacity>
      </a>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  SchedulerContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
    backgroundColor: "#272727",
    borderBottom: 'solid',
    borderBottomColor: '#ffbc00',
  },
  title: {
    paddingTop: 60,
    paddingBottom: 80,
    textAlign: 'center',
    fontWeight: "600",
    fontSize: 36,
    color: 'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffbc00',
    padding: 10,
    borderRadius: 7,
  },
  textButton: {
    Color: '#272727',
    fontWeight: '500'
  }
})
