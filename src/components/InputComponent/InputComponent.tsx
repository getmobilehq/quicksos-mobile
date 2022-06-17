import { View, Text } from 'react-native'
import React from 'react'
import { Input, Stack } from 'native-base'
import { primaryColors } from '../../../constants'

const InputComponent = (props: any) => {
  return (
    <Stack  space={4} w="100%"  py={5}> 
    <Text style={{color: primaryColors.primaryGray, fontWeight: "400" }}>{props.title}</Text>
    <Input variant="underlined" placeholder={props.placeholder}   accessibilityLabel='Unit' />
</Stack>
  )
}

export default InputComponent