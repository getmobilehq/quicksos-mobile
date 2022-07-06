import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "../../../axios"
import endpoints from "../../../endpoints"
import Toast from 'react-native-toast-message';


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
        const result = await axios.post(endpoints.changePassword, body)
        return result.data;
      } catch(error: any){
        console.log(error.response.data)
        Toast.show({
          type: 'error',
          text1: 'An error occured',
          text2: error.response.data.error
        });
      }
}

export default ChangePassword