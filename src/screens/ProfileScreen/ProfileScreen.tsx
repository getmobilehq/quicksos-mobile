import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import styles from "./styles"
import AppHeader from '../../components/AppHeader/AppHeader'
import InputComponent from '../../components/InputComponent/InputComponent'
import LabelComponnt from '../../components/LabeComponent/LabelComponnt'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Box, Button, } from 'native-base'
import { primaryColors } from '../../../constants'
import useAuthContext from '../../checkUserIsVerified';


const ProfileScreen = () => {
  const [disable, setDisable] = React.useState()
  const [editSuperVisorName, setEditSuperVisorName] = React.useState(false)
  const [editSuperVisorContact, setEditSuperVisorContact] = React.useState(false)
  // const {user} = useAuthContext()
  // console.log(user)

  const onClickButton = () => {

  }

  const onClickEditButton = (props: string) => {
    if (props === "name") {
      setEditSuperVisorName(true)

    } else {
      setEditSuperVisorContact(true)
    }


  }
  const [isLoading, setIsLoading] = React.useState()
  return (
    <SafeAreaView>
        <AppHeader avatar/>
        <ScrollView> 

        <View style={styles.componentContainer}>
          <LabelComponnt
          title="Unit"
          content="LASAMBUS"
          />
        </View>
        <View style={styles.componentContainer}>
          <LabelComponnt
          title="Branch"
          content="Agege"
          />
        </View>
        <View style={styles.componentContainer}>
          <LabelComponnt
          title="State"
          content="Lagos"
          />
        </View>
        <View style={styles.componentContainer}>
        { !editSuperVisorName 
        ? 
        
         <LabelComponnt
          title="Supervisor-in-charge"
          content="Mr Obanikoro Sanwo-Olu"
          edit
          onClickEdit={() => onClickEditButton("name")}

          />
            :
          <InputComponent
          placeholderTextColor={primaryColors.naturalColorDark}
          size="xl"
          headerText={{fontSize: 16,}} 
          title="Supervisor-in-charge" placeholder="Mr Obanikoro Sanwo-Olu" type="text"
          // onChangeText={(text: string) => setOldPassword(text)}
          />}
        </View>
        <View style={styles.componentContainer}>
          {
          !editSuperVisorContact ? 
        <LabelComponnt
        title="Contact of Supervisor"
        content="+234-9012345678"
        edit
        onClickEdit={() => onClickEditButton("contact")}
        />
        : 

        <InputComponent
        placeholderTextColor={primaryColors.naturalColorDark}
        size="xl"
        headerText={{fontSize: 16,}} 
        title="Contact of Supervisor" placeholder="+234-9012345678" type="text"
        // onChangeText={(text: string) => setOldPassword(text)}
        />

        }
        
        </View>


      <TouchableOpacity onPress={onClickButton}> 
            <Box alignItems="center" width="100%" py="5">
              <Button isLoading={isLoading} 
              isDisabled={disable} variant="solid" width="300">
            Done
              </Button>
          </Box>
        </TouchableOpacity>
        </ScrollView>

    </SafeAreaView>
  )
}

export default ProfileScreen