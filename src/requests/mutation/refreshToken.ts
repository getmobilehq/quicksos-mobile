import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "../../../axios"
import endpoints from "../../../endpoints"

//     // "Authorization": `Bearer ${token}`
// }


const refreshToken = async () => {
    console.log("from refresh token")
      try {
        const token = await AsyncStorage.getItem("token")
        const result = await axios.post(endpoints.changePassword, {
            refresh: `${token}`
        }, {
            headers: {
                'Content-Type': 'application/json',
                accept: "application/json",
                "Authorization": `Bearer ${token}`
                
            }
        })
        console.log("from resfresh token",result)
      } catch(error){
        console.log(error.message)
      }
}

export default refreshToken