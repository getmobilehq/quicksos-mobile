import { Avatar, Image, ScrollView, Popover  } from 'native-base';
import React, {PropsWithChildren, useState} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import NotificationComponent from "../../components/NotificationComponent.tsx/index"
import AppHeader from '../../components/AppHeader/AppHeader';
import { useQuery } from 'react-query';
import getIssues, { Case } from '../../requests/query/getIssues';
import AsyncStorage from "@react-native-async-storage/async-storage"
import routes from '../../routes';
import useAuthContext from '../../checkUserIsVerified';
import PopoverComponent from '../../components/PopupComponent/Popover';
import AvatarComponent from '../../components/Avatar';
const QuickSos = require('../../../assets/QuickSOS.png')

export default function HomeScreen(props: any) {
  const [recents, setRecents] = useState(true)
  const [today, setToday] = useState(false)
  const [all, setAll] = useState(false)
  const {user, setUser} = useAuthContext()
  const [isOpen, setIsOpen] = useState(false)


  const getRecents = () => {
    setToday(false)
    setAll(false)
    setRecents(true)

  }

  const getToday = () => {
    setAll(false)
    setRecents(false)
    setToday(true)

  }

  const getAll = () => {
    setRecents(false)
    setToday(false)
    setAll(true)

  }


const navigate = () => {
  props.navigation.navigate(props.alert)
}

// React.useEffect(() => {
  const {isLoading, data, isError, error} = useQuery("issues",getIssues, {enabled: true})

  if (!isLoading) {
    console.log(data)
  }

  const logOut = async () => {
    try { 
      await AsyncStorage.removeItem("token")
      await AsyncStorage.removeItem("user")
      setUser(null)
    } catch (err) {
      console.log("there is an error")
    }
    
    
  }
// }, [])

if (isError) {
  console.log(error)
}


// React.useEffect(() => {
//   props.navigation.navigate("Alert")

// })
    return (
      <SafeAreaView style={styles.container}>
        <View style={{paddingVertical: 10}}> 
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
        </View>
        <ScrollView>

        {/* DashBoard */}
        <View style={styles.dashboard}>
          <View style={styles.dashboardHeader}> 
            <Text  style={styles.dashboardHeaderText}>Welcome {user.lastName}</Text>
            <TouchableOpacity
            style={{marginRight: -10}}
            onPress={() =>setIsOpen(true)}
            >
              <AvatarComponent/>
           {/* <PopoverComponent isOpen={isOpen} setIsOpen={setIsOpen}/> */}
      </TouchableOpacity>
      
          </View>
          <View style={styles.locationWrapper}> 
          <Octicons name="location" size={20} color="#fff" />
          <Text style={styles.location}>Agege Branch</Text>
          </View>
          <View style={styles.locationWrapper}> 
          <FontAwesome5 name="calendar-day" size={20} color="#fff" />
          <Text style={styles.location}>{new Date().toUTCString()}</Text>
          </View>

        </View>
        {/* Main screen */}
        {/* <Text>Home Screen</Text> */}
        <View style={styles.mainContent}> 
        {/* Alert */}
        <View style={styles.notifications}> 
          <Text style={styles.notificationText}>Alert</Text>
          <Ionicons name="notifications-outline" size={28} color="#fff" />
        </View>

        {/* Updates on happenings */}
        <View> 
          {/* Tabs */}
          <View 
          style={styles.tabsContainer}>
            <TouchableOpacity
            onPress={getRecents}
            >
            <Text style={recents ? styles.tabsActive : styles.tabsText}>Recents</Text>
            {/* {recents && <View style={styles.indicator}/>} */}
            </TouchableOpacity>
            <TouchableOpacity
            onPress={getToday}
            >
            <Text style={today ? styles.tabsActive : styles.tabsText}>Today</Text>
            {/* {today && <View style={styles.indicator}/>} */}
            </TouchableOpacity>
            <TouchableOpacity
            onPress={getAll}
            >
            <Text style={all ? styles.tabsActive : styles.tabsText}>All</Text>
            {/* {all && <View style={styles.indicator}/>} */}
            </TouchableOpacity>
          </View>
        
        </View>
        <ScrollView>
          {isLoading && 
          <View style={{height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center'}}> 
           <ActivityIndicator />
          </View>
           }
           {
            isLoading && !!data?.length && 
            <Text>No results found</Text>
           }

           {!isLoading && !!data?.length && data.map((props: Case) => (
               <NotificationComponent navigate={() => navigate()} {...props}/>
             )) }
        </ScrollView>


        </View>
        </ScrollView>

      </SafeAreaView>
    );
  }
