import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Box, Button, Image, Input, ScrollView, Stack } from 'native-base'
import { primaryColors } from '../../../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
const Image1 = require("../../../assets/Image-2.png")
const Image2 = require("../../../assets/Image-3.png")
import { Ionicons } from '@expo/vector-icons';
import App from '../../../App'
import AppHeader from '../../components/AppHeader/AppHeader'
import { AntDesign } from '@expo/vector-icons';
import RequestResponder from '../../components/RequestResponderModal/RequestResponderModal'
import * as ImagePicker from 'expo-image-picker';
import routes from '../../routes'
import { useMutation } from 'react-query'
import ReportCases from '../../requests/mutation/reportCases'


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
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (result.cancelled) {
      return;
    }

    let localUri = result.uri;
    let filename = localUri.split('/').pop();

    //infering the type of the image

    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;




    setImages((prev: any) => [...prev, {localUri:result.uri, filename, type}]);

  };
  const submitProject = () => {
    let formData = new FormData();
    images.forEach((item, i) => {
      formData.append(`image_url${i + 1}`, {
        uri: item.localUri,
        type: item.type || "image/jpeg",
        name: item.filename || `filename${i + 1}.jpg`,
      });
    });

    formData.append("situation_report", reportText)

    reportCase({
      formData,
      assigned_case_id: props.route.params?.caseId
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
        style={{paddingTop: 20}}
        >
        <Image 
        alt=""
        source={{uri: image.localUri}}
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