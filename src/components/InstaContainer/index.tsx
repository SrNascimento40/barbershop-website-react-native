import React from 'react'
import { Button, Text, View } from 'react-native'

export default function InstaContainer() {
  return (
    <View style={{ flex:1, justifyContent: "center", alignItems: "center"}}>
      <Text>instagrola!</Text>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
        <p>img    .</p>
        <p>img    .</p>
        <p>img    .</p>
        <p>img</p>
      </View>
    </View>
  )
}
