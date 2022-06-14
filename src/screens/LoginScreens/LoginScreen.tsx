import * as React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {primaryColors} from "../../../constants/index"
import {Input, Stack, Button, Box} from "native-base"
import styles from './styles';

export default function HomeScreen(props: any) {
  React.useEffect(() => {
    props.navigation.navigate("Home")
  }, [])
    return (
      <SafeAreaView style={styles.container}>
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
