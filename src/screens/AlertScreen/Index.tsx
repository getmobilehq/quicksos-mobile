import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Pressable} from 'react-native'
import React from 'react'
import axios from "../../../axios"
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { Box, Button, Input,  Stack, Image } from 'native-base'
import { primaryColors } from '../../../constants'
import styles from "./stylesAlert"
import AppHeader from '../../components/AppHeader/AppHeader'
import { useQuery } from 'react-query'
import getArrive from '../../requests/query/getArrive'
import getRespond from '../../requests/query/getRespond'
import routes from '../../routes'
import LabelComponnt from '../../components/LabeComponent/LabelComponnt'
import { scale } from 'react-native-size-matters'
import AsyncStorage from '@react-native-async-storage/async-storage'
import endpoints from '../../../endpoints'
import Toast from 'react-native-toast-message';

const AlertScreen = (props: any) => {
  const [loading, setLoading] = React.useState(false)
  const CaseDetails = props.route.params.data.case_detail
  const MoreDetails:any = props.route.params.data
  const [buttonText, setButtonText] = React.useState(!MoreDetails.arrived ? "Arrived":"Respond")
  console.log(MoreDetails.responded, MoreDetails.arrived)


  const getRespond = async (caseId: string) => {
    setLoading(true)
    let token: any = await AsyncStorage.getItem("token")
    token  = JSON.parse(token)
   axios.get(`${endpoints.report}${caseId}/respond/`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(res =>  {
      setButtonText("Arrived") 
      console.log(res.data)
      Toast.show({
        type: 'success',
        text1: 'Successfully responded to case',
        text2: "Admin will be notified"
      });
    } ).catch(function (error) {
      // console.log(error.response.data)
      Toast.show({
        type: 'error',
        text1: 'Failed to respond to case',
        text2: error.response.data.errors
      });
    }).finally(() => {
      setLoading(false)
    })
  }

  const getArrive = async (caseId: string) => {
    setLoading(true)
    let token: any = await AsyncStorage.getItem("token")
    token  = JSON.parse(token)
   axios.get(`${endpoints.report}${caseId}/arrive/`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(res =>  {
      Toast.show({
        type: 'success',
        text1: 'Successfully arrived at the scene',
        text2: "Admin will be notified"
      });
      props.navigation.navigate(routes.Location, {
        case: MoreDetails
      })
    } ).catch(function (error) {
      Toast.show({
        type: 'error',
        text1: 'Failed',
        text2: error.response.data.errors
      });
    }).finally(() => {
      setLoading(false)

    })
  }


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
              onPress={async () =>  {
                    // fetchData()
                    // refetch()
                  await getRespond(MoreDetails.id)
      setButtonText("Arrived") 

                 
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
           onPress={async () =>  {
            await getArrive(MoreDetails.id)

          // props.navigation.navigate(routes.Location, {
          // case: MoreDetails
          //  })
          }}
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