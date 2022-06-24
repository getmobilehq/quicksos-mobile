import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "../../../axios"
import endpoints from "../../../endpoints"

interface ChangePasswordDetails {
    old_password: string,
    new_password: string,
    confirm_password: string
}

// headers: {
//     // "Authorization": `Bearer ${token}`
// }


const getIssues = async () => {
      try {
        let token = await AsyncStorage.getItem("token")
        token  = JSON.parse(token)
        console.log(token)
       const result = await axios.get(endpoints.issues, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return result.data.data;
      } catch(error){
        console.log(error.message)
      }
}

export default getIssues