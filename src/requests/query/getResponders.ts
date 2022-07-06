import AsyncStorage from "@react-native-async-storage/async-storage"
import { useQuery } from "react-query"
import axios from "../../../axios"
import { GET_ISSUE_KEY } from "../../../constants"
import endpoints from "../../../endpoints"
import ResponseError from "../../../utils/ResponseError"


 export const getResponders = async (params: any) => {
      try {
        let token: any = await AsyncStorage.getItem("token")
        token  = JSON.parse(token)
       const result = await axios.get(`${endpoints.agencies}`,)
        return result.data.data;
      } catch(error: any){
        console.log(error.response.data)
      }
}


