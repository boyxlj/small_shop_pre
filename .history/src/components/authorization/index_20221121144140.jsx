import React from 'react'
import { useLocation, Navigate } from "react-router-dom"
import {SwitchTransition,CSSTransition} from "react-transition-group"
export default function Authorization(props) {
  const { children } = props
  const location = useLocation()
  let token = localStorage.getItem("token")
  return token ? (
    <>
      <SwitchTransition>
      <CSSTransition
       key={state ? "Goodbye, world!" : "Hello, world!"}
       nodeRef={nodeRef}
       addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
       classNames='fade'
     >
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