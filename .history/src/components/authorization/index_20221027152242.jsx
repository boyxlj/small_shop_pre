import React from 'react'
import {useLocation,Navigate} from "react-router-dom"
import { useDispatch } from 'react-redux/es/exports'
export default function Authorization(props) {
 const { children } = props
 const location = useLocation()
 const dispatch = useDispatch()
 let token  = localStorage.getItem("token")
  return token ? (
    <>{children}</>
  ) : (
  // 未登录用户重定向到 login 页面
    // <Navigate
    //   replace={true}
    //   to="/login"
    //   state={{ from: `${location.pathname}${location.search}` }}
    // />
  )
}