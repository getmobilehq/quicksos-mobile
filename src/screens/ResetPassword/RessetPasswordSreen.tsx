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
import ChangePassword, { ChangePasswordDetails } from '../../requests/mutation/changePassword'
import useAuthContext from '../../checkUserIsVerified';
import AsyncStorage from '@react-native-async-storage/async-storage'
import useAxios from '../../API/useAxios'
import endpoints from '../../../endpoints'
import Toast from 'react-native-toast-message';


// import { AuthService } from '../../ 
const RessetPasswordSreen = (props: any) => {
  const API = useAxios()
  const [showModal, setShowModal] = useState(false)
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [disable, setDisable] = useState(true)
  const {setUser} = useAuthContext()
  const [showPassword, setShowPassword] = React.useState(false)
  const [showNewPassword, setShowNewPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
  const [isLoading, setIsloading] = React.useState(false)




  // const {mutate: ResetPassword, data, isError, isSuccess, isLoading, error} = useMutation(ChangePassword)

  const ModalButtonPressed = async () => {
    await AsyncStorage.removeItem("token")
    await AsyncStorage.removeItem("user")
    setUser(null)
  }

  const ChangePassword = async () => {
    setIsloading(true)
    const body: ChangePasswordDetails =      {
            old_password: oldPassword,
             new_password: newPassword, 
            confirm_password: confirmPassword
          }

    try {
      const result = await API.post(endpoints.changePassword, body)
       setIsloading(false)
      setShowModal(true)

      return result.data;
    } catch(error: any){
      // console.log(error.response.data)
      setIsloading(false)
      Toast.show({
        type: 'error',
        text1: 'An error occured',
        text2: error.response.data.error
      });
    }
}

  // const onClickButton = () => {
  //   ResetPassword(
  //     {
  //       old_password: oldPassword,
  //       new_password: newPassword, 
  //       confirm_password: confirmPassword
  //     }, 
  //     API)
  // }

  
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
        <InputComponent title="Old Password" placeholder=" Enter Old Password" type={!showPassword ? "password" : "text"}
        onChangeText={(text: string) => setOldPassword(text)}
        showEye
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        />
      </View>
      <View> 
        <InputComponent title="New Password" placeholder=" Enter New Password" 
       onChangeText={(text: string) => setNewPassword(text)}
        type={!showNewPassword ? "password" : "text"}
        showEye
        showPassword={showNewPassword}
        setShowPassword={setShowNewPassword}
        />
      
      </View>
      <View> 
        <InputComponent title="Confirm Password" placeholder="Confirm Password"
       onChangeText={(text: string) => setConfirmPassword(text)} 
        type={!showConfirmPassword ? "password" : "text"}
        showEye
        setShowPassword={setShowConfirmPassword}
        showPassword={showConfirmPassword}
        />
      </View>
      </View>

      <Box alignItems="center" width="100%" py="20">
              <Button isLoading={isLoading} 
              onPress={ChangePassword}
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