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


const locationReportScreen = (props: any) => {
  const [showModal, setShowModal] = useState(false)

  const [reports, setReports] = useState([{
    value: "yooo"
  }])
  const [text, setTexts] = useState("")
  const [reportText, setReportText] = useState<string[]>([])
  const [images, setImages] = useState([])

  const onClickButton = () => {
    setShowModal(false)
  }

  console.log(images)


  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImages((prev: any) => [...prev, result.uri]);
    }
  };

  const onPressAddIcon = () => { 
    // setReports(prev => [...prev, "reports1"])
    setReports((prev: any) => ([...prev, {value: "yoo"}]))
  // console.log(reportText)


  }

  console.log(reports)


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
        
        <TouchableOpacity
        onPress={onPressAddIcon}
        >
        <Ionicons name="add-circle-outline" size={24} color={primaryColors.white} />
        </TouchableOpacity>
        
        </View>
       {reports.map((value, index) =>(
        <View style={styles.inputStyles}>
          <Input 
          width={"85%"}
          multiline
          onChangeText={(text: string) => setReportsText((prev) => [...prev, {value: text}])}
        _focus={{borderColor: "white"}}
          variant="underlined" color={primaryColors.white}
          placeholderTextColor={primaryColors.white}
        placeholder="Emergency has been calmed, casulties have been evacuated and injured persons have been attended to" 
        size={"md"}
        />
        <View style={styles.inputIcons}> 
        <AntDesign name="closecircleo" size={18} color="#fff" />
        {/* <AntDesign name="check" size={18} color="#fff" /> */}
        </View>
          </View>
       )
      
       )}
    </Stack>

    <View>
        <View style={styles.headerStyle}> 
        <Text style={styles.label}>Multimedia</Text>
        <TouchableOpacity onPress={pickImage}>
        <Ionicons name="add-circle-outline" size={24} color={primaryColors.white} />
        </TouchableOpacity>
        </View>
        {/* <View style={{paddingTop: 10}}> 
        <Image 
        alt=""
        source={image ? {uri: image}: Image1}
        style={styles.stretch}
        />
        </View> */}
       {images.reverse().map((image) => (
        <View
        style={{paddingTop: 20}}
        >
        <Image 
        alt=""
        source={{uri: image}}
        style={styles.stretch}
        />
        </View>
       ) ) }
      
    </View>
    <TouchableOpacity onPress={() => props.navigation.navigate(routes.profile)} > 
        <Box alignItems="center" width="100%" py="5">
          <Button isLoading={false} 
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

export default locationReportScreen