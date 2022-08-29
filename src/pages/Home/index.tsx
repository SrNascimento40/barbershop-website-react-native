import React from 'react'
import { Button, Text, View } from 'react-native'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function Home() {


  return (
    <>
      <Header />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
      </View>
      <Footer />
    </>
  )
}