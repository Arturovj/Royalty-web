import axios from 'axios'
import { getAccessToken } from '../store/AccesTokenStore'



const createHttp = (useAccessToken = false) => {
    const http = axios.create({
        baseURL: 'http://localhost:3001/api'
    })


    http.interceptors.request.use(
        (request) => {
            if (useAccessToken && getAccessToken()) {
                request.headers.common.Authorization = `Bearer ${getAccessToken()}`
            }
            return request
        }
    )
    
    http.interceptors.response.use(
        (response) => response.data
    )
    return http
}





export default createHttp