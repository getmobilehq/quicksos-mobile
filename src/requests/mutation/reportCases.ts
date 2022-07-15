import endpoints from "../../../endpoints"
import {request} from "../../utilitis/axios"
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ReportDetails {
    formData: {
      situation_report: string[];
      imageUrl1: any;
      imageUrl2: any;
    }
    assigned_case_id: string;
}



const ReportCases = async (body:ReportDetails, API:any) => {
    let token:any = await AsyncStorage.getItem("token")
    token  = JSON.parse(token)
      try {
       const result = await API.post(`${endpoints.report}${body.assigned_case_id}/add_report/`, body.formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
        })
      } catch(error:any){
        console.log(error?.message)
      }
}

export default ReportCases