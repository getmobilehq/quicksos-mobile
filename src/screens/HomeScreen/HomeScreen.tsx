import { Avatar, Image, Popover  } from 'native-base';
import React, {PropsWithChildren, useEffect, useState} from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import NotificationComponent from "../../components/NotificationComponent.tsx/index"
import AppHeader from '../../components/AppHeader/AppHeader';
import { useQuery } from 'react-query';
import  { getIssues,Case } from '../../requests/query/getIssues';
import AsyncStorage from "@react-native-async-storage/async-storage"
import routes from '../../routes';
import useAuthContext from '../../checkUserIsVerified';
import PopoverComponent from '../../components/PopupComponent/Popover';
import AvatarComponent from '../../components/Avatar';
import { GET_ISSUE_KEY, primaryColors } from '../../../constants';
import getProfile from '../../requests/query/getProfile';
import formatParams from '../../../utils/formatParams';
import { scale } from 'react-native-size-matters';
const QuickSos = require('../../../assets/QuickSOS.png')
const LagosLogo = require('../../../assets/lagos_logo.png')
const Ellipse = require('../../../assets/Ellipse1.png')
const Ellipse2 = require('../../../assets/Ellipse2.png')
import useAxios from '../../API/useAxios';
import axios from 'axios';
import {NATIVE_PUSH_TOKEN, NATIVE_PUSH_TOKEN_LONG,} from "../../../constants/index"
import {getPushDataObject} from 'native-notify';





export default function HomeScreen(props: any) {
  const [recents, setRecents] = useState(false)
  const [params, setParams] = useState("")
  const [today, setToday] = useState(false)
  const [all, setAll] = useState(true)
  const {user, setProfile,profile } = useAuthContext()
  const [isOpen, setIsOpen] = useState(false)
  let pushDataObject = getPushDataObject()
  const [refreshComponent, setRefeshComponent] = React.useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)

  let API = useAxios()

  

  useEffect(() => {
    if (pushDataObject.screenName) {
      props.navigation.navigate(pushDataObject.screenName)
    }
  }) 


  const getRecents = () => {
    setToday(false)
    setAll(false)
    setRecents(true)
    setParams("recent")

  }

  const getToday = () => {
    setAll(false)
    setRecents(false)
    setToday(true)
    setParams("today")


  }

  const getAll = () => {
    setRecents(false)
    setToday(false)
    setAll(true)
    setParams("")
  }

  const renderItem = ({ item }: any) => {
    return (
      // <Item
      //   item={item}
      //   onPress={() => setSelectedId(item.id)}
      //   backgroundColor={{ backgroundColor }}
      //   textColor={{ color }}
      // />
      <NotificationComponent 
      key={props.id} 
      navigate={() => navigate()} 
      {...item}/>
    );
  };


const navigate = () => {
  props.navigation.navigate(props.alert)
}
 const {isLoading: profileLoading, data: profileData} = useQuery("profile", () => getProfile(API), {enabled: true})

// React.useEffect(() => {
  const {isLoading, data, refetch} = useQuery([GET_ISSUE_KEY, params],() => getIssues(params, API), {enabled: true})

  const onRefresh = async () => {
    setIsRefreshing(true)
    await refetch()
    setIsRefreshing(false)
  }

 

  React.useEffect(() => {
    if (!profileLoading && profileData) {
    setProfile({
      firstName: profileData.first_name,
      lastName: profileData.last_name,
      localGovt: profileData.local_gov,
      Phone: profileData.phone,
      Acronym: profileData.agency_detail.acronym,
      gender: profileData.gender
    })
  }

  }, [profileData])

  const filteredData = !isLoading && data?.filter((data:any) => data.status !== "complete")

  console.log("fltereredData", filteredData)

    return (
      <SafeAreaView style={styles.container}>
        <View style={{paddingVertical: 10}}> 
        <View style={{display: "flex", alignItems: "center", paddingVertical: 10, flexDirection:"row", justifyContent:"center"}}>
        <Image
        source={LagosLogo}
        alt="Icon"
        style={{
            width:30,
            height:30,
            resizeMode: "contain",
        }}
        />
      <Text style={{fontWeight: "bold"}}>Ekobot</Text>
        </View>
        </View>
        <View>

        {/* DashBoard */}
        <View style={styles.dashboard}>
          <View style={styles.dashboardHeader}> 
            <Text  style={styles.dashboardHeaderText}>Welcome {profile?.firstName}</Text>
            <TouchableOpacity
            style={{marginRight: -10}}
            onPress={() =>setIsOpen(true)}
            >
              {/* <AvatarComponent/> */}
           <PopoverComponent 
           isOpen={isOpen} setIsOpen={setIsOpen}
            backgroundColor={primaryColors.white} 
      color={primaryColors.naturalColor}
           />
      </TouchableOpacity>
    
          </View>
          <View style={styles.locationWrapper}> 
          <Octicons name="location" size={20} color="#fff" />
          <Text style={styles.location}>{profileData?.local_gov} Branch</Text>
          </View>
          <View style={styles.locationWrapper}> 
          <FontAwesome5 name="calendar-day" size={20} color="#fff" />
          <Text style={styles.time}>{new Date().toUTCString()}</Text>
          </View>
          <Image
        source={Ellipse2}
        alt="elipse2"
        style={{
            width:scale(100),
            height:scale(50),
            resizeMode: "contain",
            position: "absolute",
            bottom: scale(15),
            right: scale(-40),
        }}
        />
          <Image
        source={Ellipse}
        alt="elipse1"
        style={{
            width:scale(60),
            height:scale(40),
            resizeMode: "contain",
            position: "absolute",
            bottom: scale(0),
            right: scale(-25),
        }}
        />

        </View>
        {/* Main screen */}
        {/* <Text>Home Screen</Text> */}
        <View style={styles.mainContent}> 
        {/* Alert */}
        <View style={styles.notifications}> 
          <Text style={styles.notificationText}>Alerts</Text>
          <View style={{position: "relative"}}> 
          <Ionicons name="notifications-outline" size={28} color="#fff" />
         {!!filteredData && filteredData.length > 0 && <View style={{backgroundColor:"red", width: 10, height: 10, borderRadius: 5, position: "absolute", top: scale(-2), right: scale(4)}}/>}
          </View>
        </View>

        {/* Updates on happenings */}
        <View> 
          {/* Tabs */}
          <View 
          style={styles.tabsContainer}>
            <TouchableOpacity
            onPress={getRecents}
            style={!!recents && styles.textContainer}
            >
            <Text style={styles.tabsText}>Recents</Text>
            {/* {recents && <View style={styles.indicator}/>} */}
            </TouchableOpacity>
            <TouchableOpacity
            style={!!all && styles.textContainer}
            onPress={getAll}
            >
            <Text style={styles.tabsText}>All</Text>
            {/* {all && <View style={styles.indicator}/>} */}
            </TouchableOpacity>
            <TouchableOpacity
            style={!!today && styles.textContainer}


            onPress={getToday}
            >
            <Text style={styles.tabsText}>Today</Text>
            {/* {today && <View style={styles.indicator}/>} */}
            </TouchableOpacity>
            
          </View>
        
        </View>
        <View 
        style={{flex: 1, height: "100%",}}
        >
          {isLoading && 
          <View style={{height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center'}}> 
           <ActivityIndicator />
          </View>
           }
           {
            !isLoading && !filteredData?.length && 
            <Text style={{color: primaryColors.white, textAlign:"center", marginTop: 50 }}>No results found</Text>
           }
           

           {!isLoading && filteredData?.length > 0 && 
            <FlatList
            
            contentContainerStyle={{
              marginVertical: scale(20),
              marginHorizontal: scale(10),
              paddingBottom: scale(40) 
              // height:400,

            }}
              data={filteredData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              onRefresh={onRefresh}
              refreshing={isRefreshing}
              // extraData={selectedId}
              
       />}

        </View>


        </View>
        </View>

      </SafeAreaView>
    );
  }
