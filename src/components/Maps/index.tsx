import React from 'react'
import { View, StyleSheet } from 'react-native'
import API_KEY from '../../../private_key'


export default function Maps() {
  const maps = `https://maps.googleapis.com/maps/api/staticmap?center=-15.838%2c%20-48.037&zoom=16&size=1000x1000&markers=icon:https://img.icons8.com/android/24/FA5252/marker.png|-15.8377%2c%20-48.0375&key=${API_KEY}`

  return (
    <View style={styles.Container}>
      <a href='https://maps.google.com/maps?daddr=Avenida%20Rua%2034%20Sul%20lote%2008,%20loja%2002,%2002,%20Ed.%20L%C3%AA%20Paysage,%20%C3%81guas%20Claras%20Sul,%20Bras%C3%ADlia,%20DF%20-%2071926-000' target="_blank">
        <img src={maps} style={styles.Maps} />
      </a>
    </View>
  )
}

const styles = StyleSheet.create({
  Maps: {
    maxHeight: "90vh",
    maxWidth: "100%",
    resizeMode: 'contain',
  },
  Container: {
    flex: 1,
    backgroundColor: "#272727",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: 'solid',
    borderBottomColor: '#ffbc00',
  }
})