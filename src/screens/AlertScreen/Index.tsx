import { View, Text, SafeAreaView, Image, ScrollView} from 'react-native'
import React, { PropsWithChildren } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Box, Button, Input,  Stack } from 'native-base'
import { primaryColors } from '../../../constants'
import styles from "./stylesAlert"
import AppHeader from '../../components/AppHeader/AppHeader'
const FireImage = require("../../../assets/Image.png")

const AlertScreen = (props: any) => {
  const [buttonText, setButtonText] = React.useState("Respond")
  const CaseDetails = props.route.params.data.case_detail
  const MoreDetails = props.route.params.data

  console.log(MoreDetails.img_url)



  // React.useEffect(() => {
  //   props.navigation.navigate("Location")
  // })
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingVertical:10}}>
      <AppHeader />
      </View>

        <ScrollView style={styles.alertContainer}>
        <Text style={styles.alertHeader}>Alerts</Text>
      <Stack  space={4} w="100%" py={5}> 
            <Text style={styles.label}>Name of Reporter</Text>
            <Input variant="underlined" color={primaryColors.white}
              placeholderTextColor={primaryColors.white}
             placeholder="Thomas Johson" 
             value={CaseDetails.name}
             size={"lg"}
            />
        </Stack>
        <Stack  space={4} w="100%" py={5}> 
            <Text style={styles.label}>Emergency</Text>
            <Input variant="underlined" color={primaryColors.white}
              placeholderTextColor={primaryColors.white}
             placeholder="Gas Explosion" size={"lg"}
            />
        </Stack>

        <Stack  space={4} w="100%" py={5}> 
            <Text style={styles.label}>Location</Text>
            <Input variant="underlined" color={primaryColors.white}
              placeholderTextColor={primaryColors.white}
             placeholder="Thomas Johson" 
             value={CaseDetails.address}
             size={"lg"}
            />
        </Stack>
       {MoreDetails?.img_url !== "" && <View>
            <Text style={styles.label}>Multimedia</Text>
            <View style={{paddingTop: 10}}> 
            <Image 
            source={{uri: MoreDetails?.img_url}}
            style={styles.stretch}
            />
            </View>
        </View>}
        <TouchableOpacity onPress={() =>  {
            // setButtonText("Arrived")  
        props.navigation.navigate("Location")
        } }> 
            <Box alignItems="center" width="100%" py="10">
              <Button isLoading={false} 
              bgColor={primaryColors.white} 
               width="300" _text={{color: "black", fontWeight: "bold"}}>
            {buttonText}
              </Button>
          </Box>
        </TouchableOpacity>
        </ScrollView>
        {/* </ScrollView> */}
    </SafeAreaView>
  )
}

export default AlertScreen