import AsyncStorage from "@react-native-async-storage/async-storage"
import endpoints from "../../../endpoints"


const getArrive = async (caseId: string, API:any) => {
        let token: any = await AsyncStorage.getItem("token")
        token  = JSON.parse(token)
        API.get(`${endpoints.report}/${caseId}/arrive/`, {
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