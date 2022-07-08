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
    const [user, setUser] = React.useState<UserDetails>()

 const getDataFromStore = async ()  => {
    const jsonValue:any =  await AsyncStorage.getItem('user')
   setUser(JSON.parse(jsonValue))
   const token: string | null =  await AsyncStorage.getItem('token')
    if (!JSON.parse(jsonValue) && !token ){
      setUser(null)
    }
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
