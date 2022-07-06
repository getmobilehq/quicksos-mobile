import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "../../../axios"
import endpoints from "../../../endpoints"

//     // "Authorization": `Bearer ${token}`
// }


const refreshToken = async () => {
      try {
        // let token:any = await AsyncStorage.getItem("token")
        //   token = JSON.parse(token)
        const result = await axios.post(endpoints.refresh, {
            // refresh: token
        },)

        console.log("from refresh token",result)
      } catch(error: any){
        console.log("from refreshToken",error.message)
      }
}

export default refreshToken