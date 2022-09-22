import React from 'react'
import { StyleSheet, useWindowDimensions, Text, View, Image } from 'react-native'
import genericLogo from '../../../assets/images/generic-logo.png'
import instaIcon from '../../../assets/icons/insta-icon-black.png'
import youtubeIcon from '../../../assets/icons/youtube-icon.png'
import facebookIcon from '../../../assets/icons/facebook-icon.png'
import whatsIcon from '../../../assets/icons/whats-icon.png'
import { SocialIcons, ViewGap } from './style'

const footerResponsive = (width: number) => {
  if (width < 690) {return 'column'}
  else {return 'row'}
}

export default function Footer() {
  const { width } = useWindowDimensions()

  return (
    <ViewGap style={{...styles.footer, flexDirection: footerResponsive(width)}}>
      <Image source={genericLogo} style={styles.logo} />
      <View>
        <Text style={styles.text} >Segunda a Sexta - 09h às 20h Sábados - 08h às 18h</Text>
      </View>
      <View style={{ alignItems: 'center', backgroundColor: "#ffbc00"}}>
        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', margin: 5 }}>
          <a href='https://www.instagram.com/ferreiraclubbarbearia/' target="_blank"><SocialIcons src={instaIcon} /></a>
          <a href='https://www.youtube.com/channel/UCPg8ChUlF5it2IAFTO3YAbA' target="_blank"><SocialIcons src={youtubeIcon} /></a>
          <a href='https://www.facebook.com/ferreirabarbeariadf/' target="_blank"><SocialIcons src={facebookIcon} /></a>
          <a href="https://bre.is/MKP5sJsd" target="_blank"><SocialIcons src={whatsIcon} /></a>
        </View>
        <Text style={styles.text}>Residencial Le Paysage, R. 34<br />Tel: 61 8278-9592</Text>
      </View>
    </ViewGap>
  )
}

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    width: '100%',
    padding: 20,
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor: "#ffbc00",
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth:2
  },
  logo: {
    height: 125,
    width: 125
  },
  text: {
    color: "#060606",
    textAlign: "center",
    fontWeight: '700',
  }
})