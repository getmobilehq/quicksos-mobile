import { View, Text , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Applogo from '../../Vectors/AppLogo'
const QuickSos = require('../../../assets/QuickSOS.png')
import { Avatar } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import styles from './style'

const AppHeader = (props:any) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <TouchableOpacity 
        onPress={() => navigation.goBack()}
        style={{width: "40%"}}>
        <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{display: "flex",flex: 1,  width: "100%", }}> 
        <Image
        source={QuickSos}
        style={{
            width:60,
            height:30,
            resizeMode: "contain",
        }}
        />
        </TouchableOpacity>
       
           {/* <Avatar source={{
      uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg"
    }}>
        L
      </Avatar> */}
    </View>
  )
}

export default AppHeader