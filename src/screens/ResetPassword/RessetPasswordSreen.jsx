import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from "./styles"
import InputComponent from '../../components/InputComponent/InputComponent'
import { TouchableOpacityBase } from 'react-native'
import { Box, Button } from 'native-base'
import ModalComponent from '../../components/Modal/Modal'
import routes from '../../routes'
import AppHeader from '../../components/AppHeader/AppHeader'
const RessetPasswordSreen = (props) => {
  const [showModal, setShowModal] = useState(false)
  const ModalButtonPressed = () => {
    props.navigation.navigate(routes.login)

  }
  return (
    <SafeAreaView styles={styles.container}>
      <AppHeader />
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

      <TouchableOpacity onPress={() => {
 props.navigation.navigate(routes.profile)
//  setShowModal(true)
      } }> 
            <Box alignItems="center" width="100%" py="5">
              <Button isLoading={false} variant="solid" width="300">
            Ok
              </Button>
          </Box>
        </TouchableOpacity>
        <ModalComponent 
        showModal={showModal} 
        setShowModal={setShowModal}
        text="You have successfully reset your password"
        buttonText='Log In'
        onClickButton={ModalButtonPressed}
        />
    
    </SafeAreaView>
  )
}

export default RessetPasswordSreen