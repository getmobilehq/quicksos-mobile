import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Pressable} from 'react-native'
import React from 'react'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { Box, Button, Input,  Stack, Image } from 'native-base'
import { primaryColors } from '../../../constants'
import styles from "./stylesAlert"
import AppHeader from '../../components/AppHeader/AppHeader'
import { useQuery } from 'react-query'
import getArrive from '../../requests/query/getArrive'
import getRespond from '../../requests/query/getRespond'
import routes from '../../routes'
import axios from "axios"
import LabelComponnt from '../../components/LabeComponent/LabelComponnt'
import { scale } from 'react-native-size-matters'
const FireImage = require("../../../assets/Image.png")

const AlertScreen = (props: any) => {
  const [buttonText, setButtonText] = React.useState("Respond")
  const [loading, setLoading] = React.useState(false)
  const CaseDetails = props.route.params.data.case_detail
  const MoreDetails:any = props.route.params.data
  // const {isLoading, data, isError, error} = useQuery("arrive",
  // () => getArrive(MoreDetails.id), 
  // {enabled: true})
  // console.log(data, error, isError)

  // React.useEffect(() => {
    const fetchData = () => {
      setLoading(true)
      axios.get(`https://quicksos-api.herokuapp.com/v1/messages/assigned/${MoreDetails.id}/respond/`).then(res => {
        setLoading(false)
        console.log(res)
      } ).catch(function (error) {
        setLoading(false)
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response)
          console.log(error.response.data);
          console.log(error.response.status);
          // console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      })

    }

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
          <LabelComponnt
          headerStyle={styles.label}
          contentStyle={styles.contentStyle}
          bottomColor={primaryColors.white}
              title="Name of Reporter"
              content={!!CaseDetails.name && CaseDetails.name }
              />
        </Stack>
        <Stack  space={4} w="100%" py={5}> 
             <LabelComponnt
          headerStyle={styles.label}
          contentStyle={styles.contentStyle}
          bottomColor={primaryColors.white}
              title="Emergency"
              content={!!MoreDetails.issue && MoreDetails.issue }
              />
        </Stack>

        <Stack  space={4} w="100%" py={5}> 
               <LabelComponnt
          headerStyle={styles.label}
          contentStyle={styles.contentStyle}
          bottomColor={primaryColors.white}
              title="Location"
              content={!!CaseDetails.address && CaseDetails.address}
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
        {buttonText === "Respond" ? 
            <Box alignItems="center" width="100%" py="10">
              <Button 
              onPress={() =>  {
                    setButtonText("Arrived") 
                    fetchData()
              }}
              isLoading={loading} 
              bgColor={primaryColors.white} 
               width="300" _text={{color: "black", fontWeight: "bold"}}>
            Respond
              </Button>
              </Box>
              :
          <Box alignItems="center" width="100%" py="10">
            <Button 
           onPress={() =>  {
            setButtonText("Arrived") 
        props.navigation.navigate(routes.Location, {
          caseId: MoreDetails?.id
        })
        } }
            isLoading={false} 
            bgColor={primaryColors.white} 
             width="300" _text={{color: "black", fontWeight: "bold"}}>
          Arrived
            </Button>
        </Box>
        }
        </ScrollView>
        {/* </ScrollView> */}
    </SafeAreaView>
  )
}

export default AlertScreen