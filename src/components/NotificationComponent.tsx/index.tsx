import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, Stack } from 'native-base'
import { primaryColors } from '../../../constants'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import routes from '../../routes'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const Index = (props: any) => {
  const navigation = useNavigation()
  return (
    <View 
  
    style={styles.container}> 
        {/* <Text style={styles.text}>
            01
        </Text> */}
        <View style={styles.content}> 
            <Text style={styles.boldText}>{props.issue}</Text>
            <Text style={styles.text}>{props.case_detail.address}</Text>
        </View>
        <TouchableOpacity
          onPress={() =>  navigation.navigate(routes.Alert, {
            data: {
              ...props
            }
          })}
        > 
        <Text style={styles.underlineText}>Open</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Index
