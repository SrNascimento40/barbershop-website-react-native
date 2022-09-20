import React from 'react'
import { StyleSheet, useWindowDimensions, Text, View, Image } from 'react-native'
import profileLogo from '../../../assets/images/instaProfile.png'
import { AboutView, Title, ViewContainer } from './style'

function direction(width:number) {
  if (width<540) {
    return ('column-reverse')
  } else {
    return ('row')
  }
}


export default function AboutContainer() {
  const { width } = useWindowDimensions()
  
  
  return (
    <ViewContainer style={styles.AboutContainer}>
      <div id='about' />
      <Title style={styles.title}>Sobre</Title>
      <AboutView style={{ flexDirection:direction(width) }}>
        <Text style={styles.text}>
        1 – Aqui é barba, cabelo e bigode! Venha dar aquele tapa no visual e tomar aquela cervejinha gelada conversando com os amigos. Estamos abertos o dia todo prontos para te dar o melhor atendimento.
        <br/><br/>2 – O homem moderno também cuida da sua aparência e a barbearia (coloca o nome) é o melhor lugar para fazer isso! Temos uma equipe com os melhores profissionais da cidade e condições especiais para você sair daqui de cabelo na régua! Estamos te esperando!
        </Text>
        <Image source={profileLogo} style={{width:(width/2.5), height:(width/2.5), minWidth:230, minHeight:230}}/>
      </AboutView>
    </ViewContainer>
  )
}

const styles = StyleSheet.create({
  AboutContainer: {
    display: 'flex',
    width: '100%',
    flexWrap:'wrap',
    flexDirection:'row',
    alignItems: 'flex-start',
    paddingBottom: 40,
    backgroundColor: "#FFD664",
    borderStyle: 'solid',
    borderBottomColor: '#000',
    borderBottomWidth: 2
  },
  title: {
    paddingTop: 40,
    padding: 20,
    fontWeight: "600",
    fontSize: 56,
    color: "#0a0a0a"
  },
  text: {
    textAlign: 'left',
    width: '85%',
    padding: 20,
    fontSize: 16,
    color: "#0a0a0a"
  }
})
