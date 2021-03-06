import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { AntDesign } from '@expo/vector-icons';
import { primaryColors } from '../../../constants';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const LabelComponnt = (props: any) => {
  return (
    
    <View style={[styles.container, {borderBottomColor: props.bottomColor ? props.bottomColor : primaryColors.naturalColorDark,}]}>
        <Text style={[styles.title, !!props.headerStyle && props.headerStyle]}>{props.title}</Text>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: "space-between"}}> 
          <Text style={[styles.content, !!props.contentStyle && props.contentStyle]}>{props.content}</Text>
       {!!props.edit &&
       <TouchableOpacity onPress={props.onClickEdit}>
        <AntDesign name="edit" size={24} color={primaryColors.naturalColorDark}/>
       </TouchableOpacity>
        }
        </View>
    </View>
  )
}

export default LabelComponnt