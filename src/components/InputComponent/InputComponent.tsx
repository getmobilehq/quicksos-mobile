import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Input, Stack } from 'native-base'
import { primaryColors } from '../../../constants'
import { scale } from 'react-native-size-matters'
import { Feather } from '@expo/vector-icons';

      
const InputComponent = (props: any) => {
  // <View style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between"}}> 
  //       <Input isRequired variant="underlined" value={password} width={"100%"} size="lg" onChangeText={(value) => setPassword(value)}placeholder="Enter Password" type={!showPassword ? "password": "text"} accessibilityLabel='Enter Password' />
           
  //       </View>
  return (
    <Stack  space={4} w="100%"  py={5}> 
    <Text style={[props.headerText && props.headerText, {color: props.headerColor ? props.headerColor : primaryColors.primaryGray, fontWeight: "400" }]}>{props.title}</Text>
    <View style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between"}}> 
    <Input size={props.size ? props.size : "lg"} 
    width={"full"}variant="underlined" placeholder={props.placeholder}   accessibilityLabel='Unit' type={props.type}
    placeholderTextColor={props.placeholderTextColor ? props.placeholderTextColor : primaryColors.primaryGray}
    value={props.value}
    onChangeText={props.onChangeText}
    />
    {props.showEye && 
    <>
    {props.showPassword ? 
           <TouchableOpacity
           onPress={() => {
             props.setShowPassword(false)
           }}
           style={{marginLeft: scale(-50)}}
           >
           <Feather 
           name="eye" size={24} color="black" />
           </TouchableOpacity>
           :
           
           <TouchableOpacity
            onPress={() => {
              props.setShowPassword(true)
            }}
           style={{marginLeft: scale(-50)}}

            >
            <Feather name="eye-off" size={24} color="black" />
            </TouchableOpacity>}
    </>
    }
    </View>

</Stack>
  )
}

export default InputComponent