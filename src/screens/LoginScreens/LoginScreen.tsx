import * as React from 'react';
import { View, Text, SafeAreaView, Alert, TouchableOpacity, KeyboardAvoidingViewBase } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {primaryColors} from "../../../constants/index"
import {Input, Stack, Button, Box, Image, KeyboardAvoidingView} from "native-base"
import styles from './styles';
import AppHeader from '../../components/AppHeader/AppHeader';
import { useMutation } from 'react-query';
import LoginUser from '../../requests/mutation/loginMutation';
// import { TouchableOpacity } from 'react-native-gesture-handler'
import routes from '../../routes';
import useAuthContext from '../../checkUserIsVerified';
import { Feather } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';
import validator from 'validator';
const LagosLogo = require('../../../assets/lagos_logo.png')


const QuickSos = require('../../../assets/QuickSOS.png')
export default function HomeScreen(props: any) {
  const {setUser} = useAuthContext()

  const {mutate, data, isLoading,} = useMutation(LoginUser)

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [disable, setDisable] = React.useState(true)
  const [showPassword, setShowPassword] = React.useState(false)


  React.useEffect(() => {
    if (validator.isEmail(email) && password) {
      setDisable(false)
    }
  }, [email, password])

const ClickOnLogin = () => {
       mutate({email, password})
}

  if (!isLoading && data?.message === "success") { 
    setUser(data)
  } 




    return (
      <SafeAreaView style={styles.container}>
        <View style={{display: "flex", alignItems: "center", paddingVertical: 10, flexDirection: "row", justifyContent: "center"}}>
        <Image
        alt="Icon"
        source={LagosLogo}
        style={{
            width:30,
            height:30,
            resizeMode: "contain",
        }}
        />
        <Text style={{fontWeight: "bold"}}>Ekobot</Text>
        </View>

        <Text style={styles.loginIntro}>Login into your account</Text>
        <Text style={styles.smallText}>Please enter the details below to log into your account.</Text>

        <View>
          <Stack  space={4} w="100%"  py={5}> 
            <Text style={{color: primaryColors.primaryGray, fontWeight: "400" }}>Email</Text>
            <Input isRequired variant="underlined" width={"full"} value={email} size="lg" onChangeText={(value) => setEmail(value)} placeholder="Enter Email Address" accessibilityLabel='Unit' />
        </Stack>
        <Stack space={4} w="100%"  py={5}>
        <Text style={{color: primaryColors.primaryGray, fontWeight: "400" }}>Password</Text>
        <View style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between"}}> 
        <Input isRequired variant="underlined" value={password} width={"100%"} size="lg" onChangeText={(value) => setPassword(value)}placeholder="Enter Password" type={!showPassword ? "password": "text"} accessibilityLabel='Enter Password' />
           {showPassword ? 
           <TouchableOpacity
           onPress={() => {
             setShowPassword(false)
           }}
           style={{marginLeft: scale(-50)}}
           >
           <Feather 
           name="eye" size={24} color="black" />
           </TouchableOpacity>
           :
           
           <TouchableOpacity
            onPress={() => {
              setShowPassword(true)
            }}
           style={{marginLeft: scale(-50)}}

            >
            <Feather name="eye-off" size={24} color="black" />
            </TouchableOpacity>}
        </View>
           
        </Stack>
        </View>
            <Box alignItems="center" width="100%" py="20">
              <Button 
              onPress={ClickOnLogin}
              isLoading={isLoading} variant="solid"  width="300" isDisabled={disable}>
            Login
              </Button>
          </Box>
      </SafeAreaView>
    );
  }
