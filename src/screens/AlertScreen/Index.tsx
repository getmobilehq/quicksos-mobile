import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Box, Button, Input,  Stack, Image } from 'native-base'
import { primaryColors } from '../../../constants'
import styles from "./stylesAlert"
import AppHeader from '../../components/AppHeader/AppHeader'
import { useQuery } from 'react-query'
import getArrive from '../../requests/query/getArrive'
import getRespond from '../../requests/query/getRespond'
import routes from '../../routes'
import axios from "axios"
const FireImage = require("../../../assets/Image.png")

const AlertScreen = (props: any) => {
  const [buttonText, setButtonText] = React.useState("Respond")
  const CaseDetails = props.route.params.data.case_detail
  const MoreDetails:any = props.route.params.data
  const {isLoading, data, isError, error} = useQuery("arrive",
  () => getArrive(MoreDetails.id), 
  {enabled: true})
  console.log(data, error, isError)

  // React.useEffect(() => {
    const fetchData = () => {
      axios.get(`https://quicksos-api.herokuapp.com/v1//messages/assigned/${MoreDetails.id}/arrive/`).then(res => console.log(res)).catch(e => console.log(e));

    }
    fetchData()
  // }, [])
// const onClickButton = () => {

// }
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
            alt="Images"
            source={{uri: MoreDetails?.img_url}}
            style={styles.stretch}
            />
            </View>
        </View>}
        <TouchableOpacity onPress={() =>  {
            // setButtonText("Arrived") 
            fetchData()
        props.navigation.navigate(routes.Location, {
          caseId: MoreDetails?.id
        })
        } }> 
            <Box alignItems="center" width="100%" py="10">
              <Button isLoading={isLoading} 
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