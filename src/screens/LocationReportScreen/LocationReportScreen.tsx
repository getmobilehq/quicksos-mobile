import { View, Text, SafeAreaView, Platform } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Box, Button, Image, Input, ScrollView, Stack } from 'native-base'
import { primaryColors } from '../../../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import App from '../../../App'
import AppHeader from '../../components/AppHeader/AppHeader'
import { AntDesign } from '@expo/vector-icons';
import RequestResponder from '../../components/RequestResponderModal/RequestResponderModal'
import * as ImagePicker from 'expo-image-picker';
import routes from '../../routes'
import { useMutation } from 'react-query'
import ReportCases from '../../requests/mutation/reportCases'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'


const LocationReportScreen = (props: any) => {
  const [showModal, setShowModal] = useState(false)
  const [reportText, setReportText] = useState<string>("There has been a report")
  const [images, setImages] = useState([])
  const {mutate: reportCase, data, isLoading} = useMutation(ReportCases)
  console.log(props.route.params?.caseId, "yoo")


  const onClickButton = () => {
    setShowModal(false)
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

  const submitProject = async () => {
    let token: any = await AsyncStorage.getItem("token")
        token  = JSON.parse(token)
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Accept", "application/json");
      var formdata = new FormData();
      // formdata.append("situation_report", reportText)
      images.map((image, index) => {
      
        formdata.append(`img${index + 1}`, {
          uri: image.uri,
          name: image.name,
          type: image.type,
        });
      })


    // formdata.append("id", userId);
    var requestOptions = {
      body: formdata,
      headers: myHeaders,
    };

     axios.post("https://quicksos-api.herokuapp.com/v1/messages/assigned/e80f89bb-9551-4bda-a413-03f21427dca9/add_report/", requestOptions)
      .then((response) => console.log(response))
      .then((res) => {
        console.log(res)
        // AsyncStorage.setItem("@image", result.uri) 
        // setImageChanged(true)
        // setLoading(false)

      })
      .catch((error) => console.log(error));


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
        style={{paddingTop: 20}}
        >
        <Image 
        alt=""
        source={{uri: image.uri}}
        style={styles.stretch}
        />
        </View>
       ) ) }
      
    </View>
    <TouchableOpacity onPress={() => {
      submitProject()
      // props.navigation.navigate(routes.profile)
    }} > 
        <Box alignItems="center" width="100%" py="5">
          <Button isLoading={isLoading} 
          bgColor={primaryColors.white} 
           width="300" _text={{color: "black", fontWeight: "bold"}}>
        {"Solved"}
          </Button>
      </Box>
    </TouchableOpacity>
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
    />
</SafeAreaView>
  )
}

export default LocationReportScreen