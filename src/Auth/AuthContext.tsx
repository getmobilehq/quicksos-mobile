import { View, Text } from 'react-native'
import { createContext } from 'react'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UserDetails } from '../requests/mutation/loginMutation'

export const AuthContext = createContext<| UserDetails | undefined | string>(undefined)

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
    const [user, setUser] = React.useState()

const getDataFromStore = async ()  => {
    const jsonValue: string | null =  await AsyncStorage.getItem('user')
   setUser(JSON.parse(jsonValue))
}   

React.useEffect(() => {
    getDataFromStore()
}, [])

const value: any = "This is a value"

  return (
    <AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider>
  )
}
