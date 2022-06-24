import React ,{useContext} from "react"
import * as SplashScreen from "expo-splash-screen";

import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen/HomeScreen"
import LoginScreen from "./src/screens/LoginScreens/LoginScreen"
import { NativeBaseProvider, extendTheme } from "native-base";
import Theme from "./utils/customTheme";
import { View, Text, Image } from 'react-native';
import AlertScreen from './src/screens/AlertScreen/Index';
import locationReportScreen from './src/screens/LocationReportScreen/LocationReportScreen';
import RessetPasswordSreen from './src/screens/ResetPassword/RessetPasswordSreen';
import routes from './src/routes';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import userAuth from "./src/components/checkUserIsVerified"
import useAuthContext from "./src/checkUserIsVerified"
import AuthContextProvider from './src/Auth';
import { SafeAreaView } from "react-native-safe-area-context";

const screnOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const theme = extendTheme(Theme);
const queryClient = new QueryClient()
// const user = useContext(AuthContext)

// console.log(user)

// const auth =  userAuth()

// console.log(auth)

const Stack = createNativeStackNavigator();

const AppComponent = () => {
  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 1000);
  const user = useAuthContext()

  const theme = extendTheme(Theme);
  const queryClient = new QueryClient()

  const screnOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
       <StatusBar style="auto" />
       <NativeBaseProvider theme={theme}>
        <Stack.Navigator screenOptions={screnOptions}>
        {!user && 
        <Stack.Screen name={routes.login} component={LoginScreen} /> 
       }
       {user &&
       <>
       <Stack.Screen name={routes.home} component={HomeScreen} />
        <Stack.Screen name={routes.Alert} component={AlertScreen} />
        <Stack.Screen name={routes.Location}component={locationReportScreen} />
        <Stack.Screen name={routes.ResetPassword}component={RessetPasswordSreen} />
        <Stack.Screen name={routes.profile}component={ProfileScreen} />
       </>
        }
      </Stack.Navigator>
      </NativeBaseProvider>
      </NavigationContainer>
  )

}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
          <AppComponent />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}