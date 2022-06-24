import axios from 'axios'

const instance = axios.create({
    baseURL: "https://quicksos-api.herokuapp.com/v1/"
})

export default instance 