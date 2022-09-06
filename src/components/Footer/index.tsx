import React from 'react'
import { StyleSheet, useWindowDimensions, Text, View, Image } from 'react-native'
import genericLogo from '../../../assets/images/generic-logo.png'
import instaIcon from '../../../assets/icons/insta-icon-black.png'
import youtubeIcon from '../../../assets/icons/youtube-icon.png'
import facebookIcon from '../../../assets/icons/facebook-icon.png'
import whatsIcon from '../../../assets/icons/whats-icon.png'

const footerResponsive = (width: number) => {
  if (width < 485) return 'column'
  else if (width > 485) return 'row'
}

export default function Footer() {
  const { width } = useWindowDimensions()

  return (
    <View style={{...styles.footer, flexDirection: footerResponsive(width)}}>
      <Image source={genericLogo} style={styles.logo} />
      <Text style={styles.text} >Segunda a Sexta - 09h às 20h Sábados - 08h às 18h</Text>
      <View style={styles.infoCol}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', margin: 5}}>
          <Image source={instaIcon} style={styles.icon} />
          <Image source={youtubeIcon} style={styles.icon} />
          <Image source={facebookIcon} style={styles.icon} />
          <Image source={whatsIcon} style={styles.icon} />
        </View>
        <Text style={styles.text} >Rua Professor Moraes, 476</Text>
        <Text style={styles.text} >Tel: 61 8278-9592</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    height: '35vh',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: "#ffbc00",
  },
  logo: {
    height: 125,
    width: 125
  },
  text: {
    color: "#060606",
    textAlign: "center"
  },
  infoCol: {
    display: 'flex',
    flexDirection: 'column'
  },
  icon: {
    height: 20,
    width: 20,
    marginHorizontal: 10
  }
})
