import * as React from 'react';
import { View, Text, SafeAreaView, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {primaryColors} from "../../../constants/index"
import {Input, Stack, Button, Box, Image} from "native-base"
import styles from './styles';
import AppHeader from '../../components/AppHeader/AppHeader';
import { useMutation } from 'react-query';
import axios from '../../../axios';
import LoginUser from '../../requests/mutation/loginMutation';
import { TouchableOpacity } from 'react-native-gesture-handler'
import routes from '../../routes';

const QuickSos = require('../../../assets/QuickSOS.png')
export default function HomeScreen(props: any) {

  // const { isLoading, error, data } = useQuery('repoData', () =>
  //    axios.get('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
  //      console.log(res.data)
  //   ), 
  //  )
  const {mutate, data, isLoading,} = useMutation(LoginUser)

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [disable, setDisable] = React.useState(true)

  React.useEffect(() => {
    if (email && password) {
      setDisable(false)
    }
  }, [email, password])
const ClickOnLogin = () => {
       mutate({email, password})
}

// React.useEffect(() => {
  if (!isLoading && data?.message === "success") { 
        props.navigation.navigate("Home")
  } 

  if (isLoading && data?.message !== "success") {
    Alert.alert(data)
  }

// }, [isLoading, data])

console.log(data)



    return (
      <SafeAreaView style={styles.container}>
        <View style={{display: "flex", alignItems: "center", paddingVertical: 10,}}>
        <Image
        source={QuickSos}
        style={{
            width:60,
            height:30,
            resizeMode: "contain",
        }}
        />
        </View>
        <Text style={styles.loginIntro}>Log in into your account</Text>
        <Text style={styles.smallText}>Please enter the details below to log into your account.</Text>

        <View>
          <Stack  space={4} w="100%"  py={5}> 
            <Text style={{color: primaryColors.primaryGray, fontWeight: "400" }}>Unit</Text>
            <Input isRequired variant="underlined" value={email} size="lg" onChangeText={(value) => setEmail(value)} placeholder="Enter Organizational Unit" accessibilityLabel='Unit' />
        </Stack>
        <Stack space={4} w="100%"  py={5}>
        <Text style={{color: primaryColors.primaryGray, fontWeight: "400" }}>Password</Text>
            <Input isRequired variant="underlined" value={password} size="lg" onChangeText={(value) => setPassword(value)}placeholder="Enter Password" type="password" accessibilityLabel='Enter Password' />
        </Stack>
        <TouchableOpacity onPress={() => props.navigation.navigate(routes.ResetPassword)}>
        <Text style={styles.changePassword}>Change Password</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={ClickOnLogin}> 
            <Box alignItems="center" width="100%" py="20">
              <Button isLoading={isLoading} variant="solid"  width="300" isDisabled={disable}>
            Login
              </Button>
          </Box>
        </TouchableOpacity>
        
      </SafeAreaView>
    );
  }
