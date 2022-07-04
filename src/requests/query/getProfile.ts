import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "../../../axios"
import endpoints from "../../../endpoints"



const getProfile = async () => {
      try {
        let token: any = await AsyncStorage.getItem("token")
        token  = JSON.parse(token)
       const result = await axios.get(endpoints.profile, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return result.data.data;
      } catch(error: any){
        console.log(error.message)
      }
}

export default getProfile