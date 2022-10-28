import React from 'react'
import style from "./style/index.module.scss"
import { useEffect,useState } from 'react'
import { Spin,Empty } from 'antd'
export default function AwaitShou() {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },300)
  },[])
   
  return (
    <>
    {loading &&(
      <div className={style.loading} style={{padding:loading?'140px 0':'0'}}>
      <Spin />
    </div>
    )}
    {!loading&&(
      <Empty style={{marginTop:"70px"}} description="暂无数据" />
    )}
  </>
  )
}
