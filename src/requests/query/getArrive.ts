import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "../../../axios"
import endpoints from "../../../endpoints"


const getArrive = async (caseId: string) => {
      try {
        let token: any = await AsyncStorage.getItem("token")
        token  = JSON.parse(token)
       const result = await axios.get(`${endpoints.report}/f4562a0e-e163-4510-8e1d-32c3b0d833f7/arrive/`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return result;
      } catch(errors: any){
        console.log(errors)
      }
}

export default getArrive