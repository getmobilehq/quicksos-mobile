import axios from "../../../axios"
import endpoints from "../../../endpoints"
import {request} from "../../utilitis/axios"
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ReportDetails {
    // mark_complete: boolean;
    situation_report: string;
    imageUrl1: string;
    imageUrl2: string;
    // isActive: boolean;
    assigned_case: string;
    assigned_case_id: string;


}

// {
//     mark_complete*	boolean
//     title: Mark complete
//     situation_report*	string
//     title: Situation report
//     minLength: 1
//     image_url1	string($uri)
//     title: Image url1
//     maxLength: 200
//     x-nullable: true
//     image_url2	string($uri)
//     title: Image url2
//     maxLength: 200
//     x-nullable: true
//     is_active	boolean
//     title: Is active
//     assigned_case	string($uuid)
//     title: Assigned case
//     x-nullable: true
     
//     }
// request({url: endpoints.login, method: "POST", data}).then(response => console.log(response)).catch(err => console.log(err));

const ReportCases = async (body:ReportDetails) => {
    let token:any = await AsyncStorage.getItem("token")
    token  = JSON.parse(token)
      try {
       const result = await axios.post(`${endpoints.report}/${body.assigned_case_id}/add_report/`, body, {
            headers: {
                'Content-Type': 'application/json',
                accept: "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        console.log(result)
      } catch(error:any){
        return error?.message
      }
}

export default ReportCases