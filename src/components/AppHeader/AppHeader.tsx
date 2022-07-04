import { View, Text , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Applogo from '../../Vectors/AppLogo'
const QuickSos = require('../../../assets/QuickSOS.png')
import { Avatar } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import styles from './style'
import PopoverComponent from '../PopupComponent/Popover'
import { primaryColors } from '../../../constants'

const AppHeader = (props:any) => {
  const navigation = useNavigation()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <View style={styles.container}>
        <TouchableOpacity 
        onPress={() => navigation.goBack()}
        style={{width: "40%"}}>
        <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{display: "flex",flex: 1,  width: "100%", }}> 
        <Image
        alt=""
        source={QuickSos}
        style={{
            width:60,
            height:30,
            resizeMode: "contain",
        }}
        />
        </TouchableOpacity>
       
        { props.avatar && <PopoverComponent 
        backgroundColor={primaryColors.naturalColor} 
        color={primaryColors.white}
        isOpen={isOpen} setIsOpen={setIsOpen} 
        />}
    </View>
  )
}

export default AppHeader