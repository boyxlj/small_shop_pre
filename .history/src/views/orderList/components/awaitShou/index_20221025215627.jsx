import React from 'react'
import style from "./style/index.module.scss"
import {selectUserOrder} from "../../../../api/request"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemList from '../itemList'
export default function AwaitShou() {
  const userId = useSelector(state => state.userInfo.userId)
  const [data,setData] = useState([])
  useEffect(()=>{
    getOrderList()
  },[])
  //获取待支付订单列表
  const getOrderList = async()=>{
    const {data:res} = await selectUserOrder(userId,"3")
    if(res.code!=200) return setData([])
    setData(res.data)
  }

  return (
    <>
    <ItemList data={data} reSearch={()=>reSearch()/>
    </>
  )
}
