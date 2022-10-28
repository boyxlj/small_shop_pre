import React from 'react'
import {useLocation,Navigate} from "react-router-dom"
import { useDispatch } from 'react-redux/es/exports'
import { message } from 'antd'
export default function Authorization(props) {
 const { children } = props
 const location = useLocation()
 const dispatch = useDispatch()
 let token  = localStorage.getItem("token")
  return token ? (
    <>{children}</>
  ) : (
  // 未登录用户重定向到 login 页面
  // console.log()
    <Navigate
      replace={true}
      to="/"
      state={{ from: `${location.pathname}${location.search}` }}
    />
  )
}