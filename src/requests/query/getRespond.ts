import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "../../../axios"
import endpoints from "../../../endpoints"

const getRespond = async (caseId: string) => {
      try {
        let token: any = await AsyncStorage.getItem("token")
        token  = JSON.parse(token)
       const result = await axios.get(`${endpoints.report}/${caseId}/arrive/`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return result.data;
      } catch(error: any){
        console.log(error.message)
      }
}

export default getRespond