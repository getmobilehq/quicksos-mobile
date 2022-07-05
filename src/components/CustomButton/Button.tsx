import { StyleSheet, Text, View } from 'react-native'
import {Button} from "native-base"
import React from 'react'

const CustomButton = (props: any) => {
  return (
    <Button
    size={props.size || "lg"}
      mt={props.marginTop}
      isLoading={props.isLoading}
      isDisabled={props.isDisabled}
      paddingLeft={props.paddingLeft || 10}
      paddingRight={props.paddingRight || 10}
      paddingTop={props.paddingTop || 4}
      paddingBottom={props.paddingBottom || 4}
      borderRadius={props.borderRadius || 5}
      variant={props.variant || "outline"}
      colorScheme={props.colorScheme}
      backgroundColor={props.backgroundColor}
      borderColor={props.borderColor}
      leftIcon={props.LeftIcon}
      onPress={props.onPress}
      _text={{
        color: props.textColor,
      }}
    
    >
        {props.children}
    </Button>
  )
}

export default CustomButton
