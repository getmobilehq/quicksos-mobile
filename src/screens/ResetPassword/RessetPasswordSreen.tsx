import { View, Text, SafeAreaView, Alert, TouchableOpacity } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'
import styles from "./styles"
import InputComponent from '../../components/InputComponent/InputComponent'
// import { TouchableOpacityBase } from 'react-native'
import { Box, Button, ScrollView } from 'native-base'
import ModalComponent from '../../components/Modal/Modal'
import routes from '../../routes'
import AppHeader from '../../components/AppHeader/AppHeader'
import { useMutation } from 'react-query'
import ChangePassword from '../../requests/mutation/changePassword'
import useAuthContext from '../../checkUserIsVerified';
import AsyncStorage from '@react-native-async-storage/async-storage'

// import { AuthService } from '../../ 
const RessetPasswordSreen = (props: any) => {
  const [showModal, setShowModal] = useState(false)
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [disable, setDisable] = useState(true)
  const {setUser} = useAuthContext()


  const {mutate, data, isError, isSuccess, isLoading, error} = useMutation(ChangePassword)

  const ModalButtonPressed = async () => {
    await AsyncStorage.removeItem("token")
    await AsyncStorage.removeItem("user")
    setUser(null)
  }

  const onClickButton = () => {
    mutate({old_password: oldPassword, new_password: newPassword, confirm_password: confirmPassword})
  }

  useEffect(() => {
    if (!isLoading && isSuccess && data?.message == "Successfully saved password") {  
      setShowModal(true)
     }

     if (!isLoading && isSuccess && data?.message != "Successfully saved password") {  
      // setShowModal(true)
      Alert.alert("Something went wrong, please try again")
     }


  }, [isLoading, isSuccess])
  
  React.useEffect(() => {
    if (oldPassword && newPassword && confirmPassword) {
      setDisable(false)
    }
  }, [oldPassword, newPassword, confirmPassword,])

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader />
      <Text style={styles.headerText}>Password Reset</Text>
      <Text style={styles.headerTextLigher}>Please enter the details below to reset your password</Text>
      <ScrollView>

      <View style={styles.inputComponentWrapper}> 
      <View > 
        <InputComponent title="Old Password" placeholder=" Enter Old Password" type="password"
        onChangeText={(text: string) => setOldPassword(text)}
        />
      </View>
      <View> 
        <InputComponent title="New Password" placeholder=" Enter New Password" 
        type="password" onChangeText={(text: string) => setNewPassword(text)} />
      
      </View>
      <View> 
        <InputComponent title="Confirm Password" placeholder="Confirm Password"
        type="password" onChangeText={(text: string) => setConfirmPassword(text)} 
        />
      </View>
      </View>

      <Box alignItems="center" width="100%" py="20">
              <Button isLoading={isLoading} 
              onPress={onClickButton}
              isDisabled={disable} variant="solid" width="300">
            Ok
              </Button>
        </Box>
        <ModalComponent 
        showModal={showModal} 
        setShowModal={setShowModal}
        text="You have successfully reset your password"
        buttonText='Log In'
        onClickButton={ModalButtonPressed}
        />
      </ScrollView>

    
    </SafeAreaView>
  )
}

export default RessetPasswordSreen