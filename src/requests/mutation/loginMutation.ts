import axios from "axios"
import endpoints from "../../../endpoints"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import { registerIndieID } from "native-notify";

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


const LoginUser = async (body:LoginDetails) => {

      try {
       const result = await axios.post("https://quicksos-api.herokuapp.com/v1/account/users/auth/", body, {
            headers: {
                'Content-Type': 'application/json',
                accept: "application/json",
            }
        })
        Toast.show({
          type: 'success',
          text1: 'Login Successfully',
          text2: "You've successfully logged in."
        });
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
        const tokens = {
          token: formatedData.accessToken,
          refresh: formatedData.refresh
        }
        await AsyncStorage.setItem('token', JSON.stringify(tokens))
        await AsyncStorage.setItem('user', JSON.stringify(formatedData))
       await  registerIndieID(`${formatedData.userId}`, 3242, 'lgbXFD7du7UwUNgzXPC7ic');
        console.log(formatedData.userId)

        return formatedData;
      } catch(error:any){
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          Toast.show({
            type: 'error',
            text1: 'Login Error',
            text2: error.response.data.error
          });
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
      }
}

export default LoginUser