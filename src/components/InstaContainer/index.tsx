import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import instaPhoto3 from '../../../assets/images/instaPhoto.jpg'
import instaPhoto1 from '../../../assets/images/instaPhoto2.jpg'
import instaPhoto2 from '../../../assets/images/instaPhoto1.jpg'



export default function instaContainer() {
  return (
    <View style={styles.instaContainer}>
      <Text style={styles.title}>Instagram</Text>
      <View style={styles.photos}>
        <Image source={instaPhoto1} style={styles.instaPhoto}/>
        <Image source={instaPhoto2} style={styles.instaPhoto}/>
        <Image source={instaPhoto3} style={styles.instaPhoto}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  instaContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 40,
    backgroundColor: "#e8e8e8"
  },
  title: {
    paddingTop: 40,
    padding: 20,
    fontWeight: "600",
    fontSize: 36,
    color: "#0a0a0a"
  },
  instaPhoto: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    margin: 7,
  },
  photos: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
})
