import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen/HomeScreen"
import LoginScreen from "./src/screens/LoginScreens/LoginScreen"
import { NativeBaseProvider, extendTheme } from "native-base";
import Theme from "./utils/customTheme";
import { View, Text, Image } from 'react-native';
const Logo  = require("./assets/QuickSOS.png")

const screnOptions: NativeStackNavigationOptions = {
  // header: () => (
  //   <View> 
  //     <Image source={Logo} width={60} height={20}/>
  //   </View>
  // ),
  headerShown: false,
};

const theme = extendTheme(Theme);


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <StatusBar style="auto" />
       <NativeBaseProvider theme={theme}>
        <Stack.Navigator screenOptions={screnOptions} initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
      </NativeBaseProvider>

      </NavigationContainer>
  );
}