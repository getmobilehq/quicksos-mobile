import AsyncStorage from "@react-native-async-storage/async-storage"
import endpoints from "../../../endpoints"

//     // "Authorization": `Bearer ${token}`
// }


const refreshToken = async (API:any) => {
      try {
        const result = await API.post(endpoints.refresh, {
        },)
      } catch(error: any){
        console.error(error.message)
      }
}

export default refreshToken