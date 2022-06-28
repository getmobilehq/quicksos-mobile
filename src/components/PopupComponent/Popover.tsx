import { View, Text, Touchable } from 'react-native'
import React from 'react'
import { Avatar, Box, Button, Popover } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';


const PopoverComponent = () => {
    const initialFocusRef = React.useRef(null);
  return (
    <Box w="100%" alignItems="center">
      <Popover 
      placement='top right'
      shouldOverlapWithTrigger
      initialFocusRef={initialFocusRef} trigger={triggerProps => {
      return <Button 
      style={{width: 50, height: 50, borderRadius: 25}}
      {...triggerProps}
      >
      <Avatar source={{
        uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg"
      }}>
          L
        </Avatar>
        </Button>
    }}>
        <Popover.Content width="56" height="56">
          {/* <Popover.Arrow /> */}
          <Popover.CloseButton />
          {
          /* @ts-ignore */
        }
        <View style={{backgroundColor: "#fff", paddingVertical: 10}}>
            <TouchableOpacity>
            <Avatar source={{
        uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg"
            }}>
           </Avatar>
            </TouchableOpacity>
            <View> 
                <Text>Profile</Text>
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