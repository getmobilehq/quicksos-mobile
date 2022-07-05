import AsyncStorage from "@react-native-async-storage/async-storage"
import { useQuery } from "react-query"
import axios from "../../../axios"
import { GET_ISSUE_KEY } from "../../../constants"
import endpoints from "../../../endpoints"
import ResponseError from "../../../utils/ResponseError"

interface ChangePasswordDetails {
    old_password: string,
    new_password: string,
    confirm_password: string
}

// headers: {
//     // "Authorization": `Bearer ${token}`
// }

// {
//   "case": "8d299952-ef7d-4272-880f-90e838bcccc4",
//   "case_detail": Object {
//     "address": "Epe",
//     "agent": "4dbb043c-fdb8-4700-a2e1-6a29da32279e",
//     "agent_note": null,
//     "date_escalated": "2022-06-27T17:22:38.273206Z",
//     "is_active": true,
//     "is_emergency": false,
//     "name": "Hello",
//     "phone": "+2348137659336",
//     "provider": "whatsapp",
//     "status": "assigned",
//   },
//   "date_created": "2022-06-27T18:24:49.835502+01:00",
//   "escalator_note": "This is another esacalator note",
//   "id": "e80f89bb-9551-4bda-a413-03f21427dca9",
//   "is_active": true,
//   "responder": "4ed99221-03f2-4e3b-88d4-8f16dad082cd",
//   "status": "pending",
// },
export interface Case {
  case: string,
  case_detail:  {
    address: string | null,
    agent: string | null,
    agent_note: string | null,
    date_escalated: string,
    is_active: boolean,
    is_emergency: boolean,
    name: string,
    phone: string,
    provider: string | null,
    status: string,
  },
  date_created: string,
  escalator_note: string
  id: string,
  is_active: boolean,
  responder: string,
  status: string,
}

 export const getIssues = async (params: any) => {
      try {
        let token: any = await AsyncStorage.getItem("token")
        token  = JSON.parse(token)
       const result = await axios.get(`${endpoints.issues}?filterBy=${params}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        return result.data.data;
      } catch(error: any){
        console.log(error.response.data)
      }
}


// export default async function useGetIssues(params:Record<string, any>){
//   return useQuery(GET_ISSUE_KEY, () =>  getIssues(params))
// }