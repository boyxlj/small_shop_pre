import React from 'react'
import style from "./style/index.module.scss"
import { useEffect,useState } from 'react'
import { Spin } from 'antd'
export default function AwaitShou() {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setLoading(true)
  },[])
   
  return (
    <>
    {loading &&(
      <div className={style.loading} style={{padding:loading?'140px 0':'0'}}>
      <Spin />
    </div>
    )}
    {!loading&&(
      <h2 style={{textAlign:"center",marginTop:"50px"}}>暂无数据</h2>
    )}
  </>
  )
}
