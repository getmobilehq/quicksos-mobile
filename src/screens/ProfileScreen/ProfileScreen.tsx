import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from "./styles"
import AppHeader from '../../components/AppHeader/AppHeader'

const ProfileScreen = () => {
  return (
    <SafeAreaView>
        <AppHeader avatar/>
      <Text>ProfileScreen</Text>
    </SafeAreaView>
  )
}

export default ProfileScreen