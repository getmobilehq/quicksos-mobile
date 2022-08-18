import AsyncStorage from "@react-native-async-storage/async-storage"
import endpoints from "../../../endpoints"
import Toast from 'react-native-toast-message';

export interface ChangePasswordDetails {
    old_password: string,
    new_password: string,
    confirm_password: string
}


const ChangePassword = async (body:ChangePasswordDetails, API: any) => {

      try {
        const result = await API.post(endpoints.changePassword, body)
        return result.data;
      } catch(error: any){
        Toast.show({
          type: 'error',
          text1: 'An error occured',
          text2: error.response.data.error
        });
      }
}

export default ChangePassword