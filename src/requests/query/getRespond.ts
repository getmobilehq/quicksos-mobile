import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "../../../axios"
import endpoints from "../../../endpoints"

const getRespond = async (caseId: string) => {
  let token: any = await AsyncStorage.getItem("token")
  token  = JSON.parse(token)
 axios.get(`${endpoints.report}${caseId}/respond/`, {
      headers: {
          "Authorization": `Bearer ${token}`
      }
  })
  .then(res =>  res.data).catch(function (error) {
    console.log(error.response.data)
    // throw new Error(error.response.data.errors)

    console.log(error.response.data.errors)
  })
}

export default getRespond