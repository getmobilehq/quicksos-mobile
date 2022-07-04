import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "../../../axios"
import endpoints from "../../../endpoints"

const getRespond = async (caseId: string) => {
  console.log(caseId)
      try {
        let token: any = await AsyncStorage.getItem("token")
        token  = JSON.parse(token)
       const result = await axios.get(`${endpoints.report}/e80f89bb-9551-4bda-a413-03f21427dca9/respond/`, {
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