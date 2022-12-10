import React from 'react'
import style from "./style/index.module.scss"
export default function NotFound() {
  return (
    <div className={style.notFound}>
      <div className={style.bg}>
        <img src="../../assets/images/404/notFound.png" alt="" />
      </div>
    </div>
  )
}
