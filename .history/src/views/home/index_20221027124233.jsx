import React, { useEffect, useState } from 'react'
import style from "./style/index.module.scss"
import Swiper from '../../components/swiper'
import IndexShopCategory from '../../components/indexShopCategory'
import { indexSwiper,getCategory } from "../../api/request"
import {setIndexSwiper} from "./store/indexSwiper"
import {useDispatch,useSelector} from "react-redux"
import UpdateTitle from '../../components/updateTitle'
import {Spin} from "antd"
export default function Home() {
  const dispatch = useDispatch()
  const swiperList = useSelector(state=>state.indexSwiper.indexSwiperList)
  // const [swiperList, setSwiperList] = useState([])
  const [category, setCategory] = useState([])
  useEffect(() => {
    getIndexSwiper()
    getCategoryData()
  }, [])

  //查询首页轮播图片
  const getIndexSwiper = async () => {
    const { data: res } = await indexSwiper()
    dispatch(setIndexSwiper(res.data))
  }

  //查询所有分类以及商品
  const getCategoryData = async () => {
    const { data: res } = await getCategory("")
    setCategory(res.data)
  }

  return (
    <div className={style.home}>
      <Spin />
      <UpdateTitle title="首页"/>
      <div className={style.swiperContain}>
      <Swiper className={style.swipers} category={category} swiperList={swiperList} />

      </div>
      <div className={style.sscs}>
        <IndexShopCategory category={category} />
      </div>
    </div>
  )
}
