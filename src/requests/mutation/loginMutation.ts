import axios from "../../../axios"
import endpoints from "../../../endpoints"
import {request} from "../../utilitis/axios"
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
    refresh: string;
    role: string;


}
// request({url: endpoints.login, method: "POST", data}).then(response => console.log(response)).catch(err => console.log(err));

const LoginUser = async (body:LoginDetails) => {
    // const body ={
    //     email: "Pelumiogundipe905@gmail.com",
    //     password: "?"
    //   }
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
        refresh: result.data.data.refresh,
        role: result.data.data.role,
        message:result.data.message,
        }
        await AsyncStorage.setItem('token', JSON.stringify(formatedData.accessToken))
        await AsyncStorage.setItem('user', JSON.stringify(formatedData))

        // console.log(formatedData.accessToken)
        return formatedData;
      } catch(error:any){
        return error?.message
      }
}

export default LoginUser