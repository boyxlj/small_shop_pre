import React from 'react'
import style from "./style/index.module.scss"
import {selectUserOrder} from "../../../../api/request"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemList from '../itemList'
import { Spin } from 'antd'
export default function AwaitSPay() {
  const userId = useSelector(state => state.userInfo.userId)
  const [data,setData] = useState([])
  useEffect(()=>{
    getOrderList()
  },[])
  //获取待支付订单列表
  const getOrderList = async()=>{
    setLoading(true)
    const {data:res} = await selectUserOrder(userId,"2").finally(()=>{
      setTimeout(() => {
        setLoading(false)
      }, 500);
    })
    if(res.code!=200) return setData([])
    setData(res.data)
  }

    //刷新页面
    const reSearch = ()=>{
      getOrderList()
    }


  return (
    <>
      {loading &&(
        <div className={style.loading} style={{padding:loading?'140px 0':'0'}}>
        <Spin />
      </div>
      )}
      {!loading&&(
        <ItemList data={data} reSearch={() => reSearch()} />
      )}
    </>
  )
}
