import axios from "../../../axios"
import endpoints from "../../../endpoints"
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LoginDetails {
    email: string,
    password: string,
}

export interface UserDetails {
    userId: string;
    email: string;
    imageUrl: null | string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    accessToken: string;
    message: string;


}

const LoginUser = async (body:LoginDetails) => {
    const data ={
        email: "Pelumiogundipe905@gmail.com",
        password: "4#7V9#PEpoe="
      }
      try {
       const result = await axios.post(endpoints.login, body, {
            headers: {
                'Content-Type': 'application/json',
                accept: "application/json",
            }
        })
        console.log(result)
        const formatedData: UserDetails = {
        userId: result.data.data.id,
        email: result.data.data.email,
        imageUrl: result.data.data.image_url,
        firstName: result.data.data.first_name,
        lastName: result.data.data.last_name,
        phoneNumber: result.data.data.phone,
        accessToken: result.data.data.access,
        message:result.data.message,
        }
        await AsyncStorage.setItem('token', JSON.stringify(formatedData.accessToken))
        await AsyncStorage.setItem('user', JSON.stringify(formatedData))

        console.log(formatedData.accessToken)
        return formatedData;
      } catch(error){
        return error?.message
      }
}

export default LoginUser