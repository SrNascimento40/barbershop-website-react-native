import React, { useState } from 'react'
import AboutContainer from '../../components/AboutContainer'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ImageContainer from '../../components/ImageContainer'
import InstaContainer from '../../components/InstaContainer'
import Maps from '../../components/Maps'
import NavbarMobile from '../../components/NavbarMobile'
import Scheduler from '../../components/ScheduleContainer'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <NavbarMobile
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
      />
      <Header 
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}/>
      <ImageContainer />
      <AboutContainer />
      <Scheduler />
      <InstaContainer />
      <Maps />
      <Footer />
    </>
  )
}