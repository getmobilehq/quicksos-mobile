import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import styles from "./styles"
import AppHeader from '../../components/AppHeader/AppHeader'
import InputComponent from '../../components/InputComponent/InputComponent'
import LabelComponnt from '../../components/LabeComponent/LabelComponnt'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { Box, Button, } from 'native-base'
import { primaryColors } from '../../../constants'
import useAuthContext from '../../checkUserIsVerified';
import { useQuery } from 'react-query'
import getProfile from '../../requests/query/getProfile'
import NaijaStates from 'naija-state-local-government';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage'
import endpoints from '../../../endpoints'
import Toast from 'react-native-toast-message';
import ModalComponent from '../../components/Modal/Modal'
import routes from '../../routes'
import useAxios from '../../API/useAxios'



const ProfileScreen = (props: any) => {
  const API = useAxios()
  const [disable, setDisable] = React.useState(true)
  const [loading, setLoading] = React.useState(false) 
  const [supreVisorIncharge, setSuperVisorInCharge] = React.useState("")
  const [contactSupervisor, setContactSupervisor] = React.useState("")
  const [editSuperVisorName, setEditSuperVisorName] = React.useState(false)
  const [editSuperVisorContact, setEditSuperVisorContact] = React.useState(false)
  const {profile, setProfile } = useAuthContext()

  const {isLoading: profileLoading, data: profileData} = useQuery("profile",() => getProfile(API), {enabled: true})
  const [selectedLocalGovt, setSelectedLocalGovt] = React.useState(!!profile?.localGovt && profile?.localGovt)
  const  [showModal, setShowModal] = React.useState(false)

  const ModalButtonPressed =() => {
    props.navigation.navigate(routes.home)
  }


  React.useEffect(() => {
    if ((!!supreVisorIncharge && supreVisorIncharge !== "") 
    || 
    (!!contactSupervisor && contactSupervisor !== "") 
    || (!!selectedLocalGovt && selectedLocalGovt !== "")) {
      setDisable(false)
    }
  }, [contactSupervisor, supreVisorIncharge, selectedLocalGovt])

  const EditUser = async () => {
    setLoading(true)
      const splitedName = supreVisorIncharge.split(" ")
      let body: any = {
        // first_name:splitedName[0],
        // last_name: splitedName[1],
        // phone: contactSupervisor,
        // local_gov: selectedLocalGovt,
      }
      
     if (supreVisorIncharge !== "") {
      body["first_name"] = splitedName[0]
      body["last_name"] = splitedName[1]

     }

     if (contactSupervisor !== "" ) {
        body["phone"] = contactSupervisor
     }

     if (selectedLocalGovt !== "" ) {
      body["local_gov"] = selectedLocalGovt
   }

   API.put(endpoints.edit, body).then(res => {
    const data = res.data.data
    setProfile({
      firstName: data.first_name,
      lastName: data.last_name,
      localGovt: data.local_gov,
      Phone: data.phone,
      Acronym: data.agency_detail.acronym,
      gender: data.gender
    })
    setShowModal(true)
  
      } ).catch(error => {
          console.log(error.response.data);
            Toast.show({
      type: 'error',
      text1: 'Edit Error',
      text2: "Check your internet or inputs and try again"
    });
      }).finally(() => {  
        setLoading(false)
      })
  }

  const onClickEditButton = (props: string) => {
    if (props === "name") {
      setEditSuperVisorName(true)

    } else {
      setEditSuperVisorContact(true)
    }


  }
  const [isLoading, setIsLoading] = React.useState()
  return (
    <SafeAreaView>
        <AppHeader avatar/>
        <ScrollView> 

        <View style={styles.componentContainer}>
          <LabelComponnt
          title="Unit"
          content={!!profile?.Acronym && profile?.Acronym }
          />
        </View>
        <View style={styles.componentContainer}>
          <Text style={{
             fontFamily: 'Montserrat',
             fontWeight: "400",
             fontSize: 16,
             lineHeight: 17,
             color: primaryColors.primaryGray,
          }}>Branch</Text>
          <View style={{
            borderBottomColor: primaryColors.naturalColor,
            borderBottomWidth: 1,
            borderStyle: "solid",
          }}> 
          <Picker
          dropdownIconColor={primaryColors.naturalColor}
          style={{
            color: primaryColors.naturalColorDark,
          }}
          itemStyle={{
             fontFamily: 'Montserrat',
            fontWeight: "600",
            fontSize: 18,
            lineHeight: 22,
          }}
            selectedValue={selectedLocalGovt}
            onValueChange={(itemValue, itemIndex) =>
            setSelectedLocalGovt(itemValue)
            }>
            {NaijaStates.lgas("Lagos").lgas.map((data: string) => (
              <Picker.Item 
              key={data}
          fontFamily="Montserrat"
              label={data}value={data} />
            ))}
            </Picker>
          </View>
      
        </View>
        <View style={styles.componentContainer}>
          <LabelComponnt
          title="State"
          content="Lagos"
          />
        </View>
        <View style={styles.componentContainer}>
        { !editSuperVisorName 
        ? 
        
         <LabelComponnt
          title="Supervisor-in-charge"
          content={`${!!profile?.gender && profile?.gender == 'male' ? 'Mr' : 'Mrs'} ${!!profile?.firstName && profile?.firstName} ${!!profile?.lastName && profile?.lastName}`}
          edit
          onClickEdit={() => onClickEditButton("name")}
          />
            :
          <InputComponent
          placeholderTextColor={primaryColors.naturalColorDark}
          size="xl"
          headerText={{fontSize: 16,}} 
          // title="Supervisor-in-charge" placeholder={`${!!profileData?.first_name && profileData?.first_name} ${!!profileData?.last_name && profileData?.last_name}`} 
          placeholder="Full Name"
          type="text"
          onChangeText={(text: string) => setSuperVisorInCharge(text)}
          />}
        </View>
        <View style={styles.componentContainer}>
          {
          !editSuperVisorContact ? 
        <LabelComponnt
        title="Contact of Supervisor"
        content={!!profile?.Phone && profile?.Phone}
        edit
        onClickEdit={() => onClickEditButton("contact")}
        />
        : 

        <InputComponent
        placeholderTextColor={primaryColors.naturalColorDark}
        size="xl"
        headerText={{fontSize: 16,}} 
        title="Contact of Supervisor" placeholder={!!profile?.Phone && profile?.Phone} type="text"
        onChangeText={(text: string) => setContactSupervisor(text)}
        />

        }
        
        </View>
           <Box alignItems="center" width="100%" py="5">
              <Button isLoading={loading} 
              onPress={EditUser}
              isDisabled={disable} variant="solid" width="300">
            Done
              </Button>
          </Box>
        </ScrollView>
        <ModalComponent 
        showModal={showModal} 
        setShowModal={setShowModal}
        text="You have successfully edited your profile"
        buttonText='OK'
        onClickButton={ModalButtonPressed}
        />
    </SafeAreaView>
  )
}

export default ProfileScreen