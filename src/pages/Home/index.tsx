import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import AboutContainer from '../../components/AboutContainer'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ImageContainer from '../../components/ImageContainer'
import InstaContainer from '../../components/InstaContainer'
import Maps from '../../components/Maps'
import Scheduler from '../../components/ScheduleContainer'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(true)

  return (
    <>
      <NavbarMobile 
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
      />
      <Header />
      <ImageContainer />
      <AboutContainer />
      <Scheduler />
      <InstaContainer />
      <Maps />
      <Footer />
    </>
  )
}