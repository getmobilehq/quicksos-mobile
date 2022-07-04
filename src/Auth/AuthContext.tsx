import { View, Text } from 'react-native'
import { createContext } from 'react'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UserDetails } from '../requests/mutation/loginMutation'

export const AuthContext = createContext<{
  user:UserDetails;
  setUser: () => void;
} | undefined>(undefined)

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
    const [user, setUser] = React.useState()

const getDataFromStore = async ()  => {
    const jsonValue: string | null =  await AsyncStorage.getItem('user')
    console.log(jsonValue)
   setUser(JSON.parse(jsonValue))
   const token: string | null =  await AsyncStorage.getItem('token')
  //  console.log()
}   

React.useEffect(() => {
    getDataFromStore()
}, [])

const value = {
  user,
  setUser,
}

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
