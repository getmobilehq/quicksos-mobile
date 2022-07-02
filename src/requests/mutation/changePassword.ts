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


const ChangePassword = async (body:ChangePasswordDetails) => {

      try {
        let token: any = await AsyncStorage.getItem("token")
        token  = JSON.parse(token)
        const result = await axios.post(endpoints.changePassword, body, {
          headers: {
              "Authorization": `Bearer ${token}`
          }
      })
        return result.data;
      } catch(error: any){
        console.log(error.message)
      }
}

export default ChangePassword