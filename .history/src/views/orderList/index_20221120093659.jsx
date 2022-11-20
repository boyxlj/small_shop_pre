import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import UpdateTitle from '../../components/updateTitle'
import style from "./style/index.module.scss"
import AllOrder from "./components/allOrder"
import AwaitPay from "./components/awaitPay"
import AwaitShou from "./components/awaitShou"
import Recyle from "./components/recyle"
import Evaluate from "./components/evaluate"
import { useSearchParams ,useNavigate} from 'react-router-dom'
export default function OrderList() {
  const navigate = useNavigate()
  const menus = [
    {id:0,path:"allOrders",name:"全部有效订单"},
    {id:2,path:"obligations",name:"待付款"},
    {id:3,path:"awaitReceiving",name:"待收货"},
    {id:4,path:"allOrders",name:"待评价"},
    {id:5,path:"allOrders",name:"退款/售后"},
    {id:6,path:"allOrders",name:"订单回收站"},
  ]
  const [selectState,setSelectState] = useState(menus[0].id)
  const [params] = useSearchParams()
  useEffect(()=>{
    document.documentElement.scrollTop=0
    const orderTabsId = params.get("orderTabsId")
    if(!orderTabsId){
      navigate(`/order/orderList?orderTabsId=0`,{replace:true})
      setSelectState(0)
    }else{
      setSelectState(Number(orderTabsId))
    }
  },[params.get("orderTabsId")])
  //点击选项
  const clickOrder = async(value)=>{
    setSelectState(value)
    navigate(`/order/orderList?orderTabsId=${value}`)
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
        {/* {selectState==4 && <Evaluate/>} */}
        {selectState==4 && <Recyle/>}
        {selectState==5 && <Recyle/>}
        {selectState==6 && <Recyle/>}
      </div>
    </div>
  )
}
