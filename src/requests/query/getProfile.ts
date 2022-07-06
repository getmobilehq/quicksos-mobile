import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "../../../axios"
import endpoints from "../../../endpoints"



const getProfile = async () => {
      try {
       const result = await axios.get(endpoints.profile,)
        return result.data.data;
      } catch(error: any){
        console.log(error.message)
      }
}

export default getProfile