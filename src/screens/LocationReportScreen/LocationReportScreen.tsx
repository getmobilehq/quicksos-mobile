import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { Box, Button, Image, Input, ScrollView, Stack } from 'native-base'
import { primaryColors } from '../../../constants'
const Image1 = require("../../../assets/Image-2.png")
const Image2 = require("../../../assets/Image-3.png")
import { Ionicons } from '@expo/vector-icons';

const locationReportScreen = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
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
        <Box alignItems="center" width="100%" py="10">
          <Button isLoading={false} 
          bgColor={primaryColors.white} 
           width="300" _text={{color: "black", fontWeight: "bold"}}>
        {"Solved"}
          </Button>
      </Box>
    </TouchableOpacity>
    <Text style={styles.requestText}>Request for other responders</Text>
    </ScrollView>
    {/* </ScrollView> */}
</SafeAreaView>
  )
}

export default locationReportScreen