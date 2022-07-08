import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "../../API/useAxios"
import endpoints from "../../../endpoints"

//     // "Authorization": `Bearer ${token}`
// }


const refreshToken = async (API:any) => {
      try {
        // let token:any = await AsyncStorage.getItem("token")
        //   token = JSON.parse(token)
        const result = await API.post(endpoints.refresh, {
            // refresh: token
        },)

        console.log("from refresh token",result)
      } catch(error: any){
        console.log("from refreshToken",error.message)
      }
}

export default refreshToken