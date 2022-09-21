import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import background from '../../../assets/images/backgroundSchedule.jpg'
import { A, TextHover, Title } from './style';


export default function Scheduler() {
  const funcaoRand = () => {
    console.log('working');
  }

  return (
    <ImageBackground
      resizeMode='cover'
      source={background}
      blurRadius={5}
      style={styles.SchedulerContainer}>
      <Title>Agende um horário!</Title>
      <A href='https://www.trinks.com/ferreirabarbearia' target="_blank">
        <TouchableOpacity
          style={styles.button}
          onPress={() => funcaoRand()}>
          <TextHover style={styles.textButton}>AGENDAR</TextHover>
        </TouchableOpacity>
      </A>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  SchedulerContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 60,
    backgroundColor: "#272727",
    borderStyle: 'solid',
    borderColor: '#ffbc00',
    borderWidth: 2,
    borderBottomWidth: 0,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffbc00',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
  },
  textButton: {
    Color: '#272727',
    fontWeight: '700',
    fontSize:14
  }
})
