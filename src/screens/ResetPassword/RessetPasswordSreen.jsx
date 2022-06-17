import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./styles"
import InputComponent from '../../components/InputComponent/InputComponent'
import { TouchableOpacityBase } from 'react-native'
import { Box, Button } from 'native-base'
import ModalComponent from '../../components/Modal/Modal'
const RessetPasswordSreen = () => {
  return (
    <SafeAreaView styles={styles.container}>
      <Text style={styles.headerText}>Password Reset</Text>
      <Text style={styles.headerTextLigher}>Please enter the details below to reset your password</Text>
      <View style={styles.inputComponentWrapper}> 

      <View > 
        <InputComponent title="Old Password" placeholder=" Enter Password"/>
      </View>
      <View> 
        <InputComponent title="New Password" placeholder=" Enter Password"/>
      </View>
      <View> 
        <InputComponent title="Confirm Password" placeholder=" Enter Password"/>
      </View>
      </View>

      <TouchableOpacity onPress={() => props.navigation.navigate("Home") }> 
            <Box alignItems="center" width="100%" py="5">
              <Button isLoading={false} variant="solid" width="300">
            Ok
              </Button>
          </Box>
        </TouchableOpacity>
        <ModalComponent />
    </SafeAreaView>
  )
}

export default RessetPasswordSreen