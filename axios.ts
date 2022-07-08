import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import { Alert } from 'react-native';
import endpoints from './endpoints';
import refreshToken from './src/requests/mutation/refreshToken';
import routes from './src/routes';
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs';

const authToken = async () => {
  return await AsyncStorage.getItem("token") ? await AsyncStorage.getItem("token") : null
} 



const instance = axios.create({
    baseURL: "https://quicksos-api.herokuapp.com/v1/",
})


instance.interceptors.request.use(async function (req: any) {
  let token:any = await authToken()
  token = JSON.parse(token)
  if (!token) {
   token = await authToken()
   req.headers.Authorization = "Bearer " + token.token
  }
  req.headers.Authorization = "Bearer " + token.token

  const user:any = jwt_decode(token.token)
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1
  if(!isExpired) return req

  const body = {
    refresh: token.refresh
  }
  const response  = await axios.post("https://quicksos-api.herokuapp.com/v1/account/users/auth/refresh/", body).then((data) => data).catch((error) => {
  })
  await AsyncStorage.setItem('token', JSON.stringify(response?.data))
  req.headers.Authorization = "Bearer " + response?.data.token
  return req
  });

instance.interceptors.response.use(async function (response) {
    // console.log("from the interceptors response", response.data, response.headers)
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, async function  (error) {
    if (error.response.status == 401) {
      // instance.post(endpoints.refresh, data: {token : ""})
      console.log("it is 401")
      //  refreshToken()
      // await AsyncStorage.removeItem("token")
      // await AsyncStorage.removeItem("user")

      // Alert.alert(error.message)
    }

    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default instance 