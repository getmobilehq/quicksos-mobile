import axios from 'axios'
import useAuthContext from "../checkUserIsVerified"
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthContext';



const useAxios = () => {
  const {user, setUser} = useAuthContext()
  const instance = axios.create({
    baseURL: "https://quicksos-api.herokuapp.com/v1/",
    headers: { Authorization : "Bearer " + user.accessToken },  
     
})

// instance.interceptors.request.use(async function (req: any) {
  
//   // if (accessToken) {
//   //  token = await authToken()
//   //  req.headers.Authorization = "Bearer " + token.token
//   // }
//   req.headers.Authorization = "Bearer " + user?.accessToken

//   const user:any = jwt_decode(user?.accessToken)
//   const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1
//   if(!isExpired) return req

//   setUser(null)


//   // const body = {
//   //   refresh: token.refresh
//   // }
//   // const response  = await axios.post("https://quicksos-api.herokuapp.com/v1/account/users/auth/refresh/", body).then((data) => data).catch((error) => {
//   // })
//   // await AsyncStorage.setItem('token', JSON.stringify(response?.data))
//   // req.headers.Authorization = "Bearer " + response?.data.token
//   return req
//   });

  instance.interceptors.response.use(async function (response) {
    // console.log("from the interceptors response", response.data, response.headers)
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, async function  (error) {
    if (error.response.status == 401) {
      console.log("it is 401")
      setUser(null)
    }
    return Promise.reject(error);
  });

  return instance
}

export default useAxios

