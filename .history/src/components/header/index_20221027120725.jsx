import React,{useState,useMemo, useEffect} from 'react'
import style from "./style/index.module.scss"
import { useNavigate,useLocation } from 'react-router-dom'
import { changeLoginDialogShow, setPrePath, changeRegisterDialogShow, isSureLogin } from '../../store/reducer/login'
import { setPageOn } from '../../views/goods/store/pageNation'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { Dropdown, Menu, Popconfirm, Tabs,Input } from "antd"
import "../../assets/css/iconfont/iconfont.css"
const { Search } = Input;
const { TabPane } = Tabs;
const operations = <a>Extra Action</a>;

export default function Header() {
  const carTotal = useSelector(state => state.global.carTotal)
  const sureLogin = useSelector(state => state.loginDialog.sureLogin)
  const userName = useSelector(state => state.userInfo.name)
  const avatar = useSelector(state => state.userInfo.avatar)
  const dispatch = useDispatch()
  const router = useNavigate()
  const location = useLocation()
  //搜索按下回车或点击搜索按钮
  const onSearch = (value) =>{
    if(!value) return
    dispatch(setPageOn(1))
    router(`/goods?keyword=${value}`)
   
  }
  
  //点击logo
  const clickLogo = (e)=>{
    e.preventDefault()
    router("/")
  }
  const OperationsSlot = {
    left: <a href='#' className={style.left} onClick={(e)=>clickLogo(e)}>Small Shop</a>,
    right: <Search
    placeholder="请输入搜索内容"
    className={style.right}
    onSearch={onSearch}
    size="large"
    style={{
      width: 300,
    }} />
  };
  

  const login = (e) => {
    e.preventDefault()
    dispatch(changeLoginDialogShow())
  }
  const register = (e) => {
    e.preventDefault()
    dispatch(changeRegisterDialogShow())
  }

  const completeLogin = (e) => {
    e.preventDefault()
  }
  const tiao = (e, value) => {
    e.preventDefault()
    if (!sureLogin) {
      dispatch(changeLoginDialogShow())
      dispatch(setPrePath(value))
    } else {
      router(value)
    }
  }
  const cancelLogin = (e) => {
    e.preventDefault()
    dispatch(isSureLogin())
    dispatch(setPrePath(""))
    localStorage.removeItem("token")
    localStorage.removeItem("persist:root")
    router("/")
  }
  //跳转个人中心
  const profile =  (e) => {
    e.preventDefault()
    router("/order/profile")
  }
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target="_blank"  href='#' onClick={(e)=>profile(e)} >
              个人中心
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <Popconfirm placement="bottom"
              title="确认退出登录嘛？" onConfirm={(e) => cancelLogin(e)}
              okText="是的" cancelText="取消">
              <a href='#'>
                退出登录
              </a>
            </Popconfirm>
          ),
        },
      ]}
    />
  );
  //切换选项卡
  const onChange = (key) => {
    router(key)
  };
  const [position, setPosition] = useState(['left', 'right']);
  const slot = useMemo(() => {
    if (position.length === 0) return null;
    return position.reduce(
      (acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }),
      {},
    );
  }, [position]);
  
  //倒计时
  const timer = ()=>{
    // return new Date().toLocaleTimeString()
    setTimeout(()=>{
      return new Date().toLocaleString().replaceAll("/","-")
    },1000)
  }
  return (
    <div className={style.box}>
      <div className={style.headers}>
        <div className={style.timer}>当前时间: {timer()}</div>
        <ul>
          {!sureLogin ? (<li>
            <a href="#" onClick={(e) => { login(e) }}>登录</a>
            <span>|</span>
            <a href="#" onClick={(e) => { register(e) }}>注册</a>
          </li>) : (<li>
            <Dropdown overlay={menu} placement="bottom" arrow>
              <div style={{ display: "flex" }}>
                <div className={style.userImg}>
                  <img src={avatar} alt="" />
                </div>
                <a href="#" onClick={(e) => { completeLogin(e) }}>{userName}</a>
              </div>
            </Dropdown>
          </li>)}
          <li> <a href="#" onClick={(e) => { tiao(e, "/order") }}>我的订单</a></li>
          <li> <a href="#" onClick={(e) => { tiao(e, "/collect") }}>我的收藏</a></li>
          <li className={style.cars} onClick={(e) => { tiao(e, "/car") }}> 
          <i className='iconfont icon-gouwuche'></i>
          <a href="#" onClick={(e) => { tiao(e, "/car") }}>购物车</a>
          <span>{"("} {sureLogin?carTotal:0} {")"}</span>
          </li>
        </ul>
        <Tabs tabBarExtraContent={slot} 
        className={style.tabs} 
        size="large" 
        defaultActiveKey={location.pathname} 
        activeKey={location.pathname}
        onChange={onChange}>
          <TabPane tab="首页" key="/"></TabPane>
          <TabPane tab="全部商品" key="/goods"></TabPane>
          <TabPane tab="关于微商城" key="/about"></TabPane>
        </Tabs>
      </div>
    </div>
  )
}
