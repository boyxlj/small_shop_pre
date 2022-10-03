import Axios from "axios"
import Nprogress from "nprogress"
import "nprogress/nprogress.css"
// Axios.defaults.baseURL = "http://api.11e.top/api"
Axios.defaults.baseURL = "https://www.11e.fun/api"
// Axios.defaults.baseURL = "http://localhost:3303/api"

Axios.interceptors.request.use((config)=>{
  const token = localStorage.getItem("token")
  if(token){
    config.headers.Authorization = token
  }
  Nprogress.start()
  return config
},(err)=>{
  return Promise.reject(err)
})

Axios.interceptors.response.use((res)=>{
  Nprogress.done()
  return res
},(err)=>{
  return Promise.reject(err)
})


export default Axios