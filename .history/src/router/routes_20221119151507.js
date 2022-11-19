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
  { path: '/car', element: <Authorization><Suspense fallback={<h1></h1>}><Car /></Suspense></Authorization> },
  { path: '/About', element: <Suspense fallback={<h1></h1>}><About /></Suspense>},
  { path: '/order', element: <Authorization><Suspense fallback={<h1></h1>}><Order /></Suspense></Authorization>,children:[
    { path: 'profile', element: <Authorization><Suspense fallback={<h1></h1>}><Profile /></Suspense></Authorization> },
    { path: 'orderList', element: <Authorization><Suspense fallback={<h1></h1>}><OrderList /></Suspense></Authorization> },
    { path: '/order', element: <Authorization><Suspense fallback={<h1></h1>}><Navigate to="orderList"/></Suspense></Authorization> },
    { path: 'orderDetails', element: <Authorization><Suspense fallback={<h1></h1>}><OrderDetails/></Suspense></Authorization> },
  ] },
  { path: '/details', element: <Suspense fallback={<h1></h1>}><Details /></Suspense>},
  { path: '/collect', element: <Authorization><Suspense fallback={<h1></h1>}><Collect /></Suspense></Authorization> },
  { path: '/checkout', element: <Authorization><Suspense fallback={<h1></h1>}><Checkout /></Suspense></Authorization> },
  { path: '/confirm', element: <Authorization><Suspense fallback={<h1></h1>}><Confirm /></Suspense></Authorization> },
]


function LazyLoad(path){
  const Comp = lazy(()=>import(`../views/${path}`))
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Comp/>
    </Suspense>
  )
}