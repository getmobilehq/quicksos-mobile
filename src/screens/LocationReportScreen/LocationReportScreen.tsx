import { View, Text, SafeAreaView, Platform, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Box, Button, Image, Input, ScrollView, Stack } from 'native-base'
import { primaryColors } from '../../../constants'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import App from '../../../App'
import AppHeader from '../../components/AppHeader/AppHeader'
import { AntDesign } from '@expo/vector-icons';
import RequestResponder from '../../components/RequestResponderModal/RequestResponderModal'
import * as ImagePicker from 'expo-image-picker';
import routes from '../../routes'
import { useMutation, useQuery } from 'react-query'
import ReportCases from '../../requests/mutation/reportCases'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ModalComponent from '../../components/Modal/Modal'
import { getResponders } from '../../requests/query/getResponders'


const LocationReportScreen = (props: any) => {
  const [showModal, setShowModal] = useState(false)
  const [showSuccesfulModal, setShowSuccesfulModal] = useState(false)
  const [modalText,setModalText] = useState("")

  const [reportText, setReportText] = useState<string>("There has been a report")
  const [images, setImages] = useState([])
  const {mutate: reportCase, data, isLoading} = useMutation(ReportCases)

const {data: Responders} = useQuery("agencies", getResponders)
console.log(Responders)
console.log(props.route.params.case)


  const onClickButton = () => {
    setShowModal(false)
    setShowSuccesfulModal(true)
    setModalText("You have successfully requested for other responders")
  }
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });
    if (result.cancelled) {
      return;
    }

    setImages((prev: any) => [...prev, {uri:result.uri, name:result.uri.split("/").pop(), type: "image/jpg",}]);

  };

  const ModalButtonPressed = async () => {
      props.navigation.navigate(routes.home)
  }

  const submitProject = async () => {
    let token: any = await AsyncStorage.getItem("token")
        token  = JSON.parse(token)
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Accept", "multipart/form-data");
      // var formData = new FormData();
      // formData.append("situation_report", reportText)

      // images.map((image, index) => {
        
      //   // formData.append(`img${index + 1}`, {
      //   //   uri: image.uri,
      //   //   name: image.name,
      //   //   type: image.type,
      //   // });
      // })
      const body: any = {
        situation_report: reportText,
        img1: images[0],
        img2: images[1],
      }

      const formData = new FormData();

      for (const key in body) {
        if (body[key]) {
          formData.append(key, body[key]);
        }
      }


    // formdata.append("id", userId);
    // var requestOptions = {
    //   body: formdata,
    //   headers: myHeaders,
    // };

     axios.post("https://quicksos-api.herokuapp.com/v1/messages/assigned/e80f89bb-9551-4bda-a413-03f21427dca9/add_report/", formData, {

      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
      .then((response) => console.log(response))
      .catch(function (error) {
        console.log(error.response.data);
  })
      

  }


  

  return (
    <SafeAreaView style={styles.container}>
    <View style={{paddingVertical:10}}>
      <AppHeader />
      </View>
    <ScrollView style={styles.alertContainer}>
        <Text style={styles.alertHeader}>Location Report</Text>
  <Stack  space={4} w="100%" py={5}> 
  <View style={styles.headerStyle}>
         <Text style={styles.label}>Report</Text>
{/*         
        <TouchableOpacity
        onPress={onPressAddIcon}
        >
        <Ionicons name="add-circle-outline" size={24} color={primaryColors.white} />
        </TouchableOpacity> */}
        
        </View>
        <View style={styles.inputStyles}>
          <Input 
          // width={"85%"}
          multiline
          onChangeText={(text: string) => setReportText(text)}
        _focus={{borderColor: "white"}}
          variant="underlined" color={primaryColors.white}
          placeholderTextColor={primaryColors.white}
        placeholder="Emergency has been calmed, casulties have been evacuated and injured persons have been attended to" 
        size={"md"}
        />
          </View>
    </Stack>
    <View>
        <View style={styles.headerStyle}> 
        <Text style={styles.label}>Multimedia</Text>
       {images.length !== 2 && <TouchableOpacity onPress={pickImage}>
        <Ionicons name="add-circle-outline" size={24} color={primaryColors.white} />
        </TouchableOpacity>}
        </View>
       {images.map((image) => (
        <View
        key={image}
        style={{paddingTop: 20}}
        >
        <Image 
        alt="report Picture"
        source={{uri: image.uri}}
        style={styles.stretch}
        />
        </View>
       ) ) }
      
    </View>
        <Box
        alignItems="center" width="100%" py="5">
          <Button 
          onPress={() => {
            submitProject()
            // setShowSuccesfulModal(true)
            // props.navigation.navigate(routes.profile)
          }}
          isLoading={isLoading} 
          bgColor={primaryColors.white} 
           width="300" _text={{color: "black", fontWeight: "bold"}}>
        {"Solved"}
          </Button>
      </Box>
    <TouchableOpacity onPress={() => setShowModal(true)}>
    <Text style={styles.requestText}>Request for other responders</Text>
    </TouchableOpacity>
    <Box mt="10"/>

    </ScrollView>
    {/* </ScrollView> */}
    <RequestResponder
    showModal={showModal}
    setShowModal={setShowModal}
    buttonText='Send Request'
    onClickButton={onClickButton}
    Responders={Responders}
    case={props.route.params.case}
    />
       <ModalComponent 
        showModal={showSuccesfulModal} 
        setShowModal={setShowSuccesfulModal}
        text={modalText !== "" ? modalText : "You have successfully responded to this emergency"}
        buttonText='Done'
        onClickButton={ModalButtonPressed}
        />
</SafeAreaView>
  )
}

export default LocationReportScreen