import React from 'react'
import { StyleSheet, useWindowDimensions, Text, Image } from 'react-native'
import profileLogo from '../../../assets/images/instaProfile.png'
import { AboutView, TextAbout, Title, ViewContainer } from './style'

function directionResponsive(width: number) {
  if (width < 590) {
    return ('column-reverse')
  } else {
    return ('row')
  }
}
function titlePlaceResponsive(width: number) {
  if (width < 590) {
    return ('center')
  } else {
    return ('flex-start')
  }
}
function alignResponsive(width: number) {
  if (width < 590) {
    return ('center')
  } else {
    return ('left')
  }
}

export default function AboutContainer() {
  const { width } = useWindowDimensions()

  return (
    <ViewContainer style={{ ...styles.AboutContainer, justifyContent: titlePlaceResponsive(width) }}>
      <div id='about' />
      <Title>Sobre</Title>
      <AboutView style={{ flexDirection: directionResponsive(width) }}>
        <TextAbout style={{ textAlign: alignResponsive(width) }}>
          Aqui é barba, cabelo e bigode! Venha dar aquele tapa no visual e tomar aquela cervejinha gelada conversando com os amigos. Estamos abertos o dia todo prontos para te dar o melhor atendimento.
        </TextAbout>
        <Image source={profileLogo} style={{ width: (width / 2.5), height: (width / 2.5), minWidth: 165, minHeight: 165, alignSelf:'center', maxWidth: 420, maxHeight: 420, alignItems: 'center' }} />
      </AboutView>
    </ViewContainer>
  )
}

const styles = StyleSheet.create({
  AboutContainer: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingBottom: 40,
    backgroundColor: "#ffbc00",
    borderStyle: 'solid',
    borderBottomColor: '#000',
    borderBottomWidth: 3
  }
})
