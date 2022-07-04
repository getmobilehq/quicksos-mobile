import { View, Text } from 'react-native'
import React from 'react'
import { Input, Stack } from 'native-base'
import { primaryColors } from '../../../constants'
      
const InputComponent = (props: any) => {
  return (
    <Stack  space={4} w="100%"  py={5}> 
    <Text style={[props.headerText && props.headerText, {color: props.headerColor ? props.headerColor : primaryColors.primaryGray, fontWeight: "400" }]}>{props.title}</Text>
    <Input size={props.size ? props.size : "lg"} variant="underlined" placeholder={props.placeholder}   accessibilityLabel='Unit' type={props.type}
    placeholderTextColor={props.placeholderTextColor ? props.placeholderTextColor : primaryColors.primaryGray}
    value={props.value}
    onChangeText={props.onChangeText}
    />
</Stack>
  )
}

export default InputComponent