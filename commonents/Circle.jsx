import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Circle = () => {
  return (
    <View style={style.container}>
      <Text>Circle</Text>
    </View>
  )
}

export default Circle
const style=StyleSheet.create({
    container:{
        width:100,
        height:30,
        borderRadius:'100%',
        backgroundColor:'#FF00C7'
    }
})