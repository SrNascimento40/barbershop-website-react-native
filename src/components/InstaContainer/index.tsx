import React from 'react'
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import instaPhoto3 from '../../../assets/images/instaPhoto.jpg'
import instaPhoto1 from '../../../assets/images/instaPhoto2.jpg'
import instaPhoto2 from '../../../assets/images/instaPhoto1.jpg'
import instaPhoto from '../../../assets/images/instaPhoto3.jpg'
import { ColorHover, Photo, PhotosLine, Title } from './style'


export default function instaContainer() {
  const { width } = useWindowDimensions()
  return (
    <View style={styles.instaContainer}>
      <div id='instagram' />
      <Title>Instagram</Title>
      <PhotosLine>
        <PhotosLine>
          <a href='https://www.instagram.com/p/ChkIqG6O0GQ/' target="_blank">
            <ColorHover><Photo src={instaPhoto1} style={{ height:(width/2)-30, width:(width/2)-30 }} /></ColorHover>
          </a>
          <a href='https://www.instagram.com/p/ChK2E4XpUU4/' target="_blank">
            <ColorHover><Photo src={instaPhoto2} style={{ height:(width/2)-30, width:(width/2)-30 }} /></ColorHover>
          </a>
        </PhotosLine>
        <PhotosLine>
          <a href='https://www.instagram.com/p/ChXlYK6O5X0/' target="_blank">
            <ColorHover><Photo src={instaPhoto3} style={{ height:(width/2)-30, width:(width/2)-30 }} /></ColorHover>
          </a>
          <a href='https://www.instagram.com/p/Cd55Fm1L-z7/' target="_blank">
            <ColorHover><Photo src={instaPhoto} style={{ height:(width/2)-30, width:(width/2)-30 }} /></ColorHover>
          </a>
        </PhotosLine>
      </PhotosLine>
    </View>
  )
}

const styles = StyleSheet.create({
  instaContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 40,
    backgroundColor: "#0a0a0a",
    borderStyle: 'solid',
    borderColor: '#ffbc00',
    borderWidth:2
  }
})