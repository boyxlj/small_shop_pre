import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import UpdateTitle from '../../components/updateTitle'
import style from "./style/index.module.scss"
import AllOrder from "./components/allOrder"
import AwaitPay from "./components/awaitPay"
import AwaitShou from "./components/awaitShou"
import Recyle from "./components/recyle"
import { useSearchParams } from 'react-router-dom'
export default function OrderList() {
  const menus = [
    {id:0,name:"全部有效订单"},
    {id:2,name:"待支付"},
    {id:3,name:"待收货"},
    {id:4,name:"订单回收站"},
  ]
  const [selectState,setSelectState] = useState(menus[0].id)
  const [params] = useSearchParams()
  console.log(params.get(""))
  useEffect(()=>{
    
    document.documentElement.scrollTop=0
    const nums = sessionStorage.getItem('orderListNum')
    if(nums){
      setSelectState(nums)
    }else{
      setSelectState(menus[0].id)
    }
  },[])
  //点击选项
  const clickOrder = async(value)=>{
    sessionStorage.setItem("orderListNum",value)
    setSelectState(value)
  }

  return (
    <div>
       <UpdateTitle title="我的订单"/>
      <div className={style.orderList}>
        <p className={style.title}>我的订单</p>
      <div className={style.select}>
        {menus.map(item=>(
          <li onClick={()=>clickOrder(item.id)} key={item.id} className={selectState==item.id?style.liActive:""}>
            {item.name}
          </li>
        ))}
      </div>
      {selectState==0 && <AllOrder />}
        {selectState==2 && <AwaitPay />}
        {selectState==3 && <AwaitShou />}
        {selectState==4 && <Recyle/>}
      </div>
    </div>
  )
}
