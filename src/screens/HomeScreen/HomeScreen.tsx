import { Avatar } from 'native-base';
import React, {useState} from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import NotificationComponent from "../../components/NotificationComponent.tsx/index"

export default function HomeScreen() {
  const [tabs, setTabs] = useState([{
    name: "Recents",
    active: false,
  },
  {
    name: "Today",
    active: true,
  },
  {
    name: "Recents",
    active: false,
  },



])
    return (
      <SafeAreaView style={styles.container}>
        {/* DashBoard */}
        <View style={styles.dashboard}>
          <View style={styles.dashboardHeader}> 
            <Text  style={styles.dashboardHeaderText}>Welcome Lasambus</Text>
            <Avatar source={{
      uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg"
    }}>
        L
      </Avatar>
          </View>
          <View style={styles.locationWrapper}> 
          <Octicons name="location" size={20} color="#fff" />
          <Text style={styles.location}>Agege Branch</Text>
          </View>
          <View style={styles.locationWrapper}> 
          <FontAwesome5 name="calendar-day" size={20} color="#fff" />
          <Text style={styles.location}>31, January 2022, 12:40pm</Text>
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
          {tabs.map(({name, active}) => (
            <View>
            <Text style={styles.tabsText}>{name}</Text>
            {active && <View style={styles.indicator}/>}
            </View>
          ))}
          </View>
        
        </View>
           {[1,2,3, 4].map(data => (
            <NotificationComponent />
           )) }
        </View>
      </SafeAreaView>
    );
  }
