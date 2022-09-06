import React from 'react'
import { StyleSheet, useWindowDimensions, Text, View } from 'react-native'

export default function AboutContainer() {
  return (
    <View style={styles.AboutContainer}>
      <div id='about' />
      <Text style={styles.title}>Sobre</Text>
      <Text style={styles.text}>
        Formas de pagamento: Visa, Mastercard, American Express, Elo Crédito, PagSeguro Crédito, Maestro/Redeshop, Visa Electron, Elo Débito, Dinheiro, PIX, Parcelamento próprio
        Idiomas: Português
        Facilidades: Wi-Fi, Estacionamento - Grátis, Atendemos adultos e crianças, Acesso para Deficientes, TV, Aceita cartão de crédito
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  AboutContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 40,
    backgroundColor: "#ffbc00"
  },
  title: {
    paddingTop: 40,
    padding: 20,
    fontWeight: "600",
    fontSize: 36,
    color: "#0a0a0a"
  },
  text: {
    textAlign: 'center',
    width: '85%',
    padding: 20,
    fontSize: 16,
    color: "#0a0a0a"
  }
})
