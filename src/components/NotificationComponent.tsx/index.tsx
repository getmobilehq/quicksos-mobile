import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Stack } from 'native-base'
import { primaryColors } from '../../../constants'
import styles from './styles'

const Index = () => {
  return (
    <View 
    style={styles.container}> 
        <Text style={styles.text}>
            01
        </Text>
        <View style={styles.content}> 
            <Text style={styles.boldText}>Gas Explosion</Text>
            <Text style={styles.text}>Pen Cinema, Agege</Text>
        </View>
        <Text style={styles.underlineText}>Open</Text>
    </View>
  )
}

export default Index
