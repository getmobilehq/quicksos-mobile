import { View, Text, SafeAreaView, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'
import styles from "./styles"
import InputComponent from '../../components/InputComponent/InputComponent'
import { TouchableOpacityBase } from 'react-native'
import { Box, Button } from 'native-base'
import ModalComponent from '../../components/Modal/Modal'
import routes from '../../routes'
import AppHeader from '../../components/AppHeader/AppHeader'
import { useMutation } from 'react-query'
import ChangePassword from '../../requests/mutation/changePassword'
const RessetPasswordSreen = (props) => {
  const [showModal, setShowModal] = useState(false)
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [disable, setDisable] = useState(true)

  const {mutate, data, isError, isSuccess, isLoading, error} = useMutation(ChangePassword)

  const ModalButtonPressed = () => {
    props.navigation.navigate(routes.login)

  }

  const onClickButton = () => {
    mutate({old_password: "4#7V9#PEpoe=", new_password: "Javascript98", confirm_password: "Javascript98"})
  }

  useEffect(() => {
    // if (!isLoading && isSuccess) {  
    //   setShowModal(true)
    //  }

    //  if (!isLoading && isError) { 
    //   Alert.alert(error)
    // }

    if (!isLoading && data) {
      console.log(data)
    }

  }, [isSuccess, isError, data, isLoading])
  
  React.useEffect(() => {
    if (oldPassword && newPassword && confirmPassword) {
      setDisable(false)
    }
  }, [oldPassword, newPassword, confirmPassword,])

  return (
    <SafeAreaView styles={styles.container}>
      <AppHeader />
      <Text style={styles.headerText}>Password Reset</Text>
      <Text style={styles.headerTextLigher}>Please enter the details below to reset your password</Text>
      <View style={styles.inputComponentWrapper}> 

      <View > 
        <InputComponent title="Old Password" placeholder=" Enter Old Password" type="password"
        onChangeText={(text) => setOldPassword(text)}
        />
      </View>
      <View> 
        <InputComponent title="New Password" placeholder=" Enter New Password" 
        type="password" onChangeText={(text) => setNewPassword(text)} />
      
      </View>
      <View> 
        <InputComponent title="Confirm Password" placeholder="Confirm Password"
        type="password" onChangeText={(text) => setConfirmPassword(text)} 
        />
      </View>
      </View>

      <TouchableOpacity onPress={onClickButton}> 
            <Box alignItems="center" width="100%" py="5">
              <Button isLoading={isLoading} 
              isDisabled={disable} variant="solid" width="300">
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