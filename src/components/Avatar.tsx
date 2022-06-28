import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { primaryColors } from '../../constants'

const AvatarComponent = (props:any) => {
  return (
    <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor:
    props.backgroundColor ? props.backgroundColor : primaryColors.white, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{
        fontFamily: 'Montserrat',
        fontWeight: "600",
        fontSize: 24,
        lineHeight: 29
      }}>L</Text>
    </View>
  )
}

export default AvatarComponent

const styles = StyleSheet.create({})