import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import { Alert } from 'react-native';
import endpoints from './endpoints';
import refreshToken from './src/requests/mutation/refreshToken';
import routes from './src/routes';

const instance = axios.create({
    baseURL: "https://quicksos-api.herokuapp.com/v1/"
})


// instance.interceptors.request.use(async function (config) {
//     console.log("this is a request before it runs", config)
//     const token = await AsyncStorage.getItem("token")
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

instance.interceptors.response.use(function (response) {
    console.log("from the interceptors response", response.data, response.headers)
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function async (error) {
    error.message
    console.log("from the interceptors error", error.message)
    if (error.response.status == 401) {
      // instance.post(endpoints.refresh, data: {token : ""})
      // console.log("it is 401")
      //  refreshToken()

      Alert.alert(error.message)
    }

    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default instance 