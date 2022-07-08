import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "../../API/useAxios"
import endpoints from "../../../endpoints"

const getRespond = async (caseId: string, API:any) => {
  let token: any = await AsyncStorage.getItem("token")
  token  = JSON.parse(token)
  API.get(`${endpoints.report}${caseId}/respond/`, {
      headers: {
          "Authorization": `Bearer ${token}`
      }
  })
  .then((res:any) =>  res.data).catch(function (error:any) {
    console.log(error.response.data)
    // throw new Error(error.response.data.errors)

    console.log(error.response.data.errors)
  })
}

export default getRespond