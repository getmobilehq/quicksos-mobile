import AsyncStorage from "@react-native-async-storage/async-storage"
import endpoints from "../../../endpoints"

 export const getResponders = async (API:any) => {
      try {
        let token: any = await AsyncStorage.getItem("token")
        token  = JSON.parse(token)
       const result = await API.get(`${endpoints.agencies}`,)
        return result.data.data;
      } catch(error: any){
        console.log(error.response.data)
      }
}


