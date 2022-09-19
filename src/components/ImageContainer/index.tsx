import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import Backgroundimage from '../../../assets/images/backgroundImage.jpg'
import genericLogo from '../../../assets/images/generic-logo-horizontal.png'


export default function ImageContainer() {
  return (
    <div style={{...styles.ImageContainer, backgroundImage: `url(${Backgroundimage})`, backgroundRepeat:'no-repeat', backgroundPosition: 'center center fixed', backgroundSize:'cover'}}>
      <Image style={styles.logo} source={genericLogo}/>
    </div>
  )
}
const styles = StyleSheet.create({
  ImageContainer: {
    display: 'flex',
    width: '100%',
    position: 'relative',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomColor: '#000',
    borderBottomWidth:2,
    height: 450,
  },
  logo: {
    height: 76,
    width: 225,
    opacity: 0.9
  }
})
