import Authorization from "../components/authorization"
import { lazy, Suspense } from "react"
import Home from "../views/home"
import {Navigate} from "react-router-dom"
const Goods = lazy(() => import("../views/goods"))
const Car = lazy(() => import("../views/car"))
const Order = lazy(() => import("../views/order"))
const About = lazy(() => import("../views/about"))
const Details = lazy(() => import("../views/details"))
const Collect = lazy(() => import("../views/collect"))
const Checkout = lazy(() => import("../views/checkout"))
const Confirm = lazy(() => import("../views/confirm"))
const Profile = lazy(() => import("../views/profile"))
const OrderList = lazy(() => import("../views/orderList"))
const OrderDetails = lazy(() => import("../views/orderDetails"))


export default [
  { path: '/', element: <Home /> },
  { path: '/goods', element: LazyLoad("goods")},
  { path: '/car', element: <Authorization>{ LazyLoad("car")}</Authorization> },
  { path: '/about', element:  LazyLoad("about")},
  { path: '/order', element: <Authorization>{LazyLoad("order")}</Authorization>,children:[
    { path: 'profile', element: <Authorization>{LazyLoad("profile")}</Authorization> },
    { path: 'orderList', element: <Authorization>{LazyLoad("orderList")}</Authorization> },
    { path: '/order', element: <Authorization><Suspense fallback={<h1></h1>}><Navigate to="orderList"/></Suspense></Authorization> },
    { path: 'orderDetails', element: <Authorization>{LazyLoad("orderDetails")}</Authorization> },
  ] },
  { path: '/details', element: LazyLoad("details")},
  { path: '/collect', element: <Authorization>{LazyLoad("collect")}</Authorization> },
  { path: '/checkout', element: <Authorization>{LazyLoad("checkout")}</Authorization> },
  { path: '/confirm', element: <Authorization>{LazyLoad("confirm")}</Authorization> },
]


function LazyLoad(path){
  const Comp = lazy(()=>import(`../views/${path}`))
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Comp/>
    </Suspense>
  )
}