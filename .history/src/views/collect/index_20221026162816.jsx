import React, { useEffect, useState } from 'react'
import style from "./style/index.module.scss"
import { message, Result, Button,Tooltip  } from "antd"
import { deleteCollect, getUserCollect,addCar } from "../../api/request"
import { useSelector ,useDispatch} from 'react-redux'
import {setCarTotal} from "../../store/reducer/global"
import { setSuccessTip } from '../../store/reducer/global';
import { useNavigate } from 'react-router-dom'
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import UpdateTitle from '../../components/updateTitle'
export default function Collect() {
  const dispatch = useDispatch()
  const userId = useSelector(state => state.userInfo.userId)
  const [collectList, setCollectList] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    getCollectList()
  }, [])
  //取消收藏
  const cancelCollect = (value) => {
    PcancelCollect(value)
  }
  //加入购物车
  const goPay = async(value) => {
    const { data: res } = await addCar(userId, value)
    if (res.code == 403) return message.warning("该商品已在您的购物车里喽")
    if (res.code == 404) return message.error("添加购物车失败")
    dispatch(setSuccessTip({
      successDialogTip: true,
      TipText: "已成功加入购物车！",
      isShowCar: true
    }))
    dispatch(setCarTotal(userId))
  }

  //查询收藏列表
  const getCollectList = async () => {
    const { data: res } = await getUserCollect(userId)
    if (res.code != 200) return setCollectList([])
    setCollectList(res.data)
  }
  //取消收藏
  const PcancelCollect = async (collectId) => {
    const { data: res } = await deleteCollect(collectId)
    if (res.code != 200) return message.error("移除收藏失败")
    message.success("已从我的收藏中移除")
    getCollectList()
  }

  //跳转商品页面
  const tiaoGoods = () => {
    navigate("/goods")
  }
  //跳转商品详情页面
  const tiaoDetail = (value) => {
    navigate(`/details?detailId=${value}`)
  }
  return (
    <div className={style.collect}>
   <div className={style.content}>
   <UpdateTitle title="我的收藏"></UpdateTitle>
      {collectList.length ? collectList?.map(item => (
        <div key={item.collectId} className={style.item}>
          <div className={style.left}>
            <div className={style.img} onClick={() => tiaoDetail(item.detailId)}>
              <img src={item.titleImg} alt="" />
            </div>
            <div className={style.descs}>
              <li className={style.title} onClick={() => tiaoDetail(item.detailId)}>{item.title}</li>
              <li className={style.desc}>{item.descs}</li>
              <li className={style.time}>{item.collectTime.split("T")[0]}
                <span>￥{item.price}元</span>
                <span>{item.prePrice}元</span></li>
            </div>
          </div>
          <div className={style.right}>
          <Tooltip placement="top" color="red" title="移出收藏">
            <p onClick={() => cancelCollect(item.collectId)}><DeleteOutlined/></p></Tooltip>
            <Tooltip title="添加至购物车"><p onClick={() => goPay(item.detailId)}><ShoppingCartOutlined /></p></Tooltip>
          </div>

        </div>
      ))
        : (<Result
          status="403"
          subTitle="您暂未收藏任何商品。"
          extra={<Button type="primary" onClick={tiaoGoods}>逛一逛吧</Button>}
        />)
      }
   </div>

    </div>
  )
}
