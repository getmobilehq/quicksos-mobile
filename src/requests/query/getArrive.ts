import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "../../../axios"
import endpoints from "../../../endpoints"


const getArrive = async (caseId: string) => {
      try {
        let token: any = await AsyncStorage.getItem("token")
        token  = JSON.parse(token)
       const result = await axios.get(`${endpoints.report}/b1b61e84-12b2-4572-b034-e3eff880f6ed/arrive/`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return result.data;
      } catch(errors: any){
        console.log(errors)
      }
}

export default getArrive