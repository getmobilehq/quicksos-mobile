import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "../../../axios"
import endpoints from "../../../endpoints"


const getArrive = async (caseId: string) => {
        let token: any = await AsyncStorage.getItem("token")
        token  = JSON.parse(token)
       axios.get(`${endpoints.report}/f4562a0e-e163-4510-8e1d-32c3b0d833f7/arrive/`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(res => console.log(res)).catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        })
}

export default getArrive