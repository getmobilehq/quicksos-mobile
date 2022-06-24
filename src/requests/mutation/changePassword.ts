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
    const data ={
        email: "Pelumiogundipe905@gmail.com",
        password: "4#7V9#PEpoe="
      }
      try {
        const token = await AsyncStorage.getItem("token")
        console.log(token)
       const result = await axios.post(endpoints.changePassword, body, {
            headers: {
                'Content-Type': 'application/json',
                accept: "application/json",
                "Authorization": `Bearer ${token}`

            }
        })
        return result;
      } catch(error){
        console.log(error.message)
      }
}

export default ChangePassword