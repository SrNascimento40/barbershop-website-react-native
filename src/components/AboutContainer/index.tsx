import React from 'react'
import { StyleSheet, useWindowDimensions, Text, View, Image } from 'react-native'
import profileLogo from '../../../assets/images/instaProfile.png'

export default function AboutContainer() {
  return (
    <View style={styles.AboutContainer}>
      <div id='about' />
      <Text style={styles.title}>Sobre</Text>
      <View style={styles.aboutView}>
        <Text style={styles.text}>
        1 – Aqui é barba, cabelo e bigode! Venha dar aquele tapa no visual e tomar aquela cervejinha gelada conversando com os amigos. Estamos abertos o dia todo prontos para te dar o melhor atendimento.
        <br/><br/>2 – O homem moderno também cuida da sua aparência e a barbearia (coloca o nome) é o melhor lugar para fazer isso! Temos uma equipe com os melhores profissionais da cidade e condições especiais para você sair daqui de cabelo na régua! Estamos te esperando!
        </Text>
        <Image source={profileLogo} style={styles.image}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  AboutContainer: {
    display: 'flex',
    width: '100%',
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
  },
  image: {
    width: 320,
    height: 320,
    marginHorizontal: 100
  },
  aboutView: {
    display: 'flex',
    flexDirection:'row',
    flexWrap:'nowrap',
    justifyContent:'space-around',
    alignItems: 'center',
  }
})
