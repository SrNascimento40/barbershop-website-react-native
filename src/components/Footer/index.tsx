import React from 'react'
import { StyleSheet, useWindowDimensions, Text, View, Image } from 'react-native'
import genericLogo from '../../../assets/images/generic-logo.png'
import instaIcon from '../../../assets/icons/insta-icon-black.png'
import youtubeIcon from '../../../assets/icons/youtube-icon.png'
import facebookIcon from '../../../assets/icons/facebook-icon.png'
import whatsIcon from '../../../assets/icons/whats-icon.png'

const paddingResponsive = (width: number) => {
  if (width < 360) return '0'
  else if (width < 480) return '25%'
  else if (width < 680) return '30%'
  else if (width > 680) return '40%'
}

export default function Footer() {
  return (
    <View style={styles.footer}>
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
    height: '25vh',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: "#e8e8e8",
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
