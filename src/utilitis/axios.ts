import axios from "axios"
const baseURL = "https://quicksos-api.herokuapp.com/v1/"


const client = axios.create({baseURL : "https://quicksos-api.herokuapp.com/v1/"})
interface AxiosOptions {
    uri: string,
    data: any,
    method: string
}



export const request = ({...options}) => {
    client.defaults.headers.common.Authorization = `Bearer Token`
    const onSuccess = (response: any) => {
       return response
    } 
    const onError = (error: any) => {
         console.log("this is coming from the request",error)
    return error
    }

    return client(options).then(onSuccess).catch(onError)
}