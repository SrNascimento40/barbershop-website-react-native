import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Backgroundimage from '../../../assets/images/backgroundImage.jpg'
import { A, Container, TextHover, Title } from './style'


export default function ImageContainer() {
  return (
    <Container style={{backgroundImage: `url(${Backgroundimage})`, backgroundRepeat:'no-repeat', backgroundPosition: 'center center fixed', backgroundSize:'cover'}}>
      <Title>BARBEARIA DO FERREIRA</Title>
      <A href='https://www.trinks.com/ferreirabarbearia' target="_blank">
        <TouchableOpacity
          style={styles.button}>
          <TextHover>AGENDAR</TextHover>
        </TouchableOpacity>
      </A>
    </Container>
  )
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#ffbc00',
    padding: 15,
    paddingHorizontal: 45,
    borderRadius: 7,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth:2
  }
})