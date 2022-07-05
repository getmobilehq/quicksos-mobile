import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, Box, Button, Popover } from 'native-base';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import routes from '../../routes';
import useAuthContext from '../../checkUserIsVerified';
import AvatarComponent from '../Avatar';
import { primaryColors } from '../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';


const PopoverComponent = (props: any) => {
    const initialFocusRef = React.useRef(null);
    // const [isOpen, setIsOpen] = React.useState(false)
  const {setUser} = useAuthContext()

  const logOut = async () => {
    try { 
      props.setIsOpen(false)
      await AsyncStorage.removeItem("token")
      await AsyncStorage.removeItem("user")
      setUser(null)
    } catch (err) {
      console.log("there is an error")
    }
  }

    const navigation = useNavigation()
  return (
    <Box w="100%" alignItems="center">
      <Popover 
      isOpen={props.isOpen}
      placement='top right'
      shouldOverlapWithTrigger
      shouldFlip
      initialFocusRef={initialFocusRef} trigger={triggerProps => {
      return <Button 
   
      style={{width: 50, height: 50, borderRadius: 25}}
      {...triggerProps}
      onPress={() => props.setIsOpen(true)}
      >
      <AvatarComponent 
      backgroundColor={props.backgroundColor}
      color={props.color}
     
      />
        </Button>
    }}>
        <Popover.Content width="56" >
        
        <View style={{backgroundColor: "#fff", paddingVertical: 10,}}>
            <View style={styles.popoverHeader}> 
            <TouchableOpacity>
            <AvatarComponent backgroundColor={primaryColors.naturalColor} color={primaryColors.white}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.setIsOpen(false)}>
            <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
            </View>
            <View> 
                <TouchableOpacity
                onPress={() =>{
                    props.setIsOpen(false)
                    navigation.navigate(routes.profile)
                }}
                > 
                <Text style={styles.popoverText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {
                    props.setIsOpen(false)
                    navigation.navigate(routes.ResetPassword)
                } }
                >
                <Text style={styles.popoverText}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={logOut}
                > 
                <Text style={styles.popoverText}>Logout</Text>
                </TouchableOpacity>

            </View>
        </View>
          {/* <Popover.Header>Personal Details</Popover.Header>
          <Popover.Body> 

          </Popover.Body> */}
        </Popover.Content>
      </Popover>
    </Box>
  )
}

export default PopoverComponent