import AsyncStorage from "@react-native-async-storage/async-storage"
import useAxios from "../../API/useAxios"
import endpoints from "../../../endpoints"



const getProfile = async (API:any) => {
      try {
       const result = await API.get(endpoints.profile,)
       
        return result.data.data;
      } catch(error: any){
        console.log(error.message)
      }
}

export default getProfile