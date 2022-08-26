import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import AppLoading from 'expo-app-loading';
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
import { NATIVE_PUSH_TOKEN, NATIVE_PUSH_TOKEN_LONG, primaryColors } from "./constants";
import Toast from 'react-native-toast-message';
import database from '@react-native-firebase/database';

import registerNNPushToken from 'native-notify';
import React, { useState, useEffect } from 'react';
import { getIndieNotificationInbox, deleteIndieNotificationInbox } from 'native-notify';
import axios from 'axios';

const screnOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const theme = extendTheme(Theme);
const queryClient = new QueryClient()

const Stack = createNativeStackNavigator();

const AppComponent = () => {
  const [data, setData] = useState([]);
  const {user} = useAuthContext()
  const [notification, setNotitfication] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      let notifications = await getIndieNotificationInbox(`${user?.userId}`, 3242, 'lgbXFD7du7UwUNgzXPC7ic');
      console.log("notifications: ", notifications);
      setData(notifications);
    }
    // fetchData()
    
}, []);

  React.useEffect(() => {
    const fetchData  = async () => {
     database().ref(`notifications/${user?.userId}`)
          .on('value', snapshot => {
        const data = snapshot.val()
        PostNotification(data)
        
      });
    }
    fetchData()
  }, [user])

  const PostNotification = async (data: {
    body: string,
    title: string,
  }) => {
    console.log(data)
     await axios.post(`https://app.nativenotify.com/api/indie/notification`, {
      subID: `${user?.userId}`,
      appId: 3242,
      appToken: "lgbXFD7du7UwUNgzXPC7ic",
      title: data.title,
      message: data.body
   }).then(res => {
    console.log("notification has been sent")
   }).catch(e => console.error("Something went wrong"))
  }


  const theme = extendTheme(Theme);
  const queryClient = new QueryClient()

  const screnOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
});
    if (!loaded) {
      return null;
    }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: primaryColors.primaryBackground}}> 
    <NavigationContainer>
       <NativeBaseProvider theme={theme}>
       <StatusBar style="auto" />
        <Stack.Navigator screenOptions={screnOptions}>
        {!user ? 
        <Stack.Screen name={routes.login} component={LoginScreen} /> 
       :
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
      <Toast onPress={() => Toast.hide()} visibilityTime={10000} type="info" />
    </SafeAreaView>
  )
}

export default function App() {
  registerNNPushToken(NATIVE_PUSH_TOKEN, NATIVE_PUSH_TOKEN_LONG);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
          <AppComponent />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}