import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Box, Button, Image, Input, ScrollView, Stack } from 'native-base'
import { primaryColors } from '../../../constants'
const Image1 = require("../../../assets/Image-2.png")
const Image2 = require("../../../assets/Image-3.png")
import { Ionicons } from '@expo/vector-icons';
import App from '../../../App'
import AppHeader from '../../components/AppHeader/AppHeader'
import RequestResponder from '../../components/RequestResponderModal/RequestResponderModal'

const locationReportScreen = (props: any) => {
  const [showModal, setShowModal] = useState(false)

  const onClickButton = () => {
    setShowModal(false)
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
        <Ionicons name="add-circle-outline" size={24} color={primaryColors.white} />
        </View>
        <Input 
        multiline
        variant="underlined" color={primaryColors.white}
          placeholderTextColor={primaryColors.white}
         
         placeholder="Emergency has been calmed, casulties have been evacuated and injured persons have been attended to" 
         size={"md"}
        />
    </Stack>

    <View>
        <View style={styles.headerStyle}> 
        <Text style={styles.label}>Multimedia</Text>
        <Ionicons name="add-circle-outline" size={24} color={primaryColors.white} />
        </View>
        <View style={{paddingTop: 10}}> 
        <Image 
        alt=""
        source={Image1}
        style={styles.stretch}
        />
        </View>
        <View
        style={{paddingTop: 20}}
        >

        <Image 
        alt=""
        source={Image2}
        style={styles.stretch}
        />
        </View>
      
    </View>
    <TouchableOpacity onPress={() => props.navigation.navigate("ResetPassword")} > 
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