import React from 'react'
import { StyleSheet, useWindowDimensions, Text, View, Image } from 'react-native'
import genericLogo from '../../../assets/images/generic-logo.png'
import instaIcon from '../../../assets/icons/insta-icon-black.png'
import youtubeIcon from '../../../assets/icons/youtube-icon.png'
import facebookIcon from '../../../assets/icons/facebook-icon.png'
import whatsIcon from '../../../assets/icons/whats-icon.png'
import { SocialIcons } from './style'

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
          <a href='https://www.instagram.com/ferreiraclubbarbearia/' target="_blank"><SocialIcons src={instaIcon} /></a>
          <a href='https://www.youtube.com/channel/UCPg8ChUlF5it2IAFTO3YAbA' target="_blank"><SocialIcons src={youtubeIcon} /></a>
          <a href='https://www.facebook.com/ferreirabarbeariadf/' target="_blank"><SocialIcons src={facebookIcon} /></a>
          <a href="https://bre.is/MKP5sJsd" target="_blank"><SocialIcons src={whatsIcon} /></a>
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
    backgroundColor: "#FFD664",
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
  }
})
