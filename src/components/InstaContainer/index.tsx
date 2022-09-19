import React from 'react'
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import instaPhoto3 from '../../../assets/images/instaPhoto.jpg'
import instaPhoto1 from '../../../assets/images/instaPhoto2.jpg'
import instaPhoto2 from '../../../assets/images/instaPhoto1.jpg'
import instaPhoto from '../../../assets/images/instaPhoto3.jpg'



export default function instaContainer() {
  const { width } = useWindowDimensions()
  return (
    <View style={styles.instaContainer}>
      <div id='instagram' />
      <Text style={styles.title}>Instagram</Text>
      <View style={styles.photos}>
        <View style={styles.photos}>
          <a href='https://www.instagram.com/p/ChkIqG6O0GQ/' target="_blank">
            <Image source={instaPhoto1} style={{...styles.instaPhoto, height:(width/2)-30, width:(width/2)-30}} />
          </a>
          <a href='https://www.instagram.com/p/ChK2E4XpUU4/' target="_blank">
            <Image source={instaPhoto2} style={{...styles.instaPhoto, height:(width/2)-30, width:(width/2)-30}} />
          </a>
        </View>
        <View style={styles.photos}>
          <a href='https://www.instagram.com/p/ChXlYK6O5X0/' target="_blank">
            <Image source={instaPhoto3} style={{...styles.instaPhoto, height:(width/2)-30, width:(width/2)-30}} />
          </a>
          <a href='https://www.instagram.com/p/Cd55Fm1L-z7/' target="_blank">
            <Image source={instaPhoto} style={{...styles.instaPhoto, height:(width/2)-30, width:(width/2)-30}} />
          </a>
        </View>
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
    backgroundColor: "#FFD664",
    borderBottom: 'solid',
    borderBottomColor: '#ffbc00',
  },
  title: {
    paddingTop: 40,
    padding: 20,
    fontWeight: "600",
    fontSize: 36,
    color: "#0a0a0a"
  },
  instaPhoto: {
    maxWidth: 280,
    maxHeight: 280,
    margin: 5,
  },
  photos: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
})
