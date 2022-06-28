import { View, Text, Touchable } from 'react-native'
import React from 'react'
import { Avatar, Box, Button, Popover } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import routes from '../../routes';
import useAuthContext from '../../checkUserIsVerified';


const PopoverComponent = (props: any) => {
    const initialFocusRef = React.useRef(null);
    // const [isOpen, setIsOpen] = React.useState(false)
  const {setUser} = useAuthContext()

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
      <Avatar source={{
        uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg"
      }}>
          L
        </Avatar>
        </Button>
    }}>
        <Popover.Content width="56" >
        
        <View style={{backgroundColor: "#fff", paddingVertical: 10,}}>
            <View style={styles.popoverHeader}> 
            <TouchableOpacity>
            <Avatar source={{
        uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg"
            }}>
           </Avatar> 
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
                onPress={() => {
                    props.setIsOpen(false)
                    setUser(null)
                } }
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