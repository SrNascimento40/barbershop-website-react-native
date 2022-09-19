import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, View, TouchableOpacity, } from 'react-native'
import closeIcon from '../../../assets/icons/icon-close.png'
import { Container, OptionsMobile } from './style';
import './style.ts';


export default function NavbarMobile({ menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: any }) {
  if (menuOpen == true) {
    return (
      <Container>
        <TouchableOpacity onPress={() => setMenuOpen(false)}>
          <Image source={closeIcon} style={styles.closeIcon} />
        </TouchableOpacity>
        <nav style={styles.list}>
          <a href="#about">
            <OptionsMobile onClick={() => setMenuOpen(false)}>Sobre</OptionsMobile>
          </a>
          <a href="#instagram">
            <OptionsMobile onClick={() => setMenuOpen(false)}>Instagram</OptionsMobile>
          </a>
          <a href='https://www.trinks.com/ferreirabarbearia' target="_blank">
            <OptionsMobile onClick={() => setMenuOpen(false)}>Agendar</OptionsMobile>
          </a>
        </nav>
      </Container>
    )
  } else {
    return (
      <></>
    )
  }
}


const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    width: 45,
    height: 45,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
})