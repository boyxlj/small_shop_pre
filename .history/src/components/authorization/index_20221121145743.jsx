import React from 'react'
import { useLocation, Navigate } from "react-router-dom"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import "./index.css"
export default function Authorization(props) {
  const { children } = props
  const location = useLocation()
  let token = localStorage.getItem("token")
  return token ? (
    <>
      <SwitchTransition mode="out-in">
        <CSSTransition key={Math.random()} timeout={3000} classNames="fade" nodeRef={null}>
          {children}
        </CSSTransition>
      </SwitchTransition>

    </>
  ) : (
    // 未登录用户重定向到 login 页面
    <Navigate
      replace={true}
      to="/"
      state={{ from: `${location.pathname}${location.search}` }}
    />
  )
}