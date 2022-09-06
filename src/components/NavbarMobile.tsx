import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import closeIcon from '../../assets/icons/icon-close.png'

interface iNavbarMobile {
    menuOpen: boolean;
    setMenuOpen: any;
}

export default function NavbarMobile(props: iNavbarMobile) {
  return (
    <View style={styles.iNavbarMobile}>
      <Image source={closeIcon} />
    </View>
  )
}

const styles = StyleSheet.create({
    iNavbarMobile: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }
})