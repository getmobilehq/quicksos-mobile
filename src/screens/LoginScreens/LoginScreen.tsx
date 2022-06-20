import * as React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {primaryColors} from "../../../constants/index"
import {Input, Stack, Button, Box, Image} from "native-base"
import styles from './styles';
import AppHeader from '../../components/AppHeader/AppHeader';
import { useQuery } from 'react-query';
import axios from 'axios';
const QuickSos = require('../../../assets/QuickSOS.png')
export default function HomeScreen(props: any) {
  // React.useEffect(() => {
  //   props.navigation.navigate("Home")
  // }, [])

  const { isLoading, error, data } = useQuery('repoData', () =>
     axios.get('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
       console.log(res.data)
    )
   )

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
            <Input variant="underlined" placeholder="Enter Organizational Unit" accessibilityLabel='Unit' />
        </Stack>
        <Stack space={4} w="100%"  py={5}>
        <Text style={{color: primaryColors.primaryGray, fontWeight: "400" }}>Password</Text>
            <Input variant="underlined" placeholder="Enter Password" accessibilityLabel='Enter Password' />
        </Stack>
        <Text style={styles.changePassword}>Change Password</Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home") }> 
            <Box alignItems="center" width="100%" py="20">
              <Button isLoading={false} variant="solid" width="300">
            Login
              </Button>
          </Box>
        </TouchableOpacity>
        
      </SafeAreaView>
    );
  }
