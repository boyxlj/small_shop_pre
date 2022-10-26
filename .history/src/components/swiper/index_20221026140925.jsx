import { Carousel } from 'antd';
import React from 'react';
import { useState } from 'react';
import style from "./style/index.module.scss"
import { useNavigate } from 'react-router-dom';
export default function Swiper(props) {
  const { swiperList, category } = props
  const [isShowShopList, setIsShowShopList] = useState(true)
  const [content, setContent] = useState([])
  const navigate = useNavigate()
  // console.log(category)
  //跳转商品分类
  const navigateCategory = (detailId) => {
    console.log("跳转商品分类", detailId)
    navigate(`/goods?category=${detailId}`)
  }
  //鼠标进入商品分类
  const enterCategory = (detailId) => {
    console.log("鼠标进入商品分类", detailId)
    setIsShowShopList(true)
    if (category) {
      const res = category?.filter(item => item.detailId == detailId)
      console.log("123", res[0]?.children)
      setContent(res)
    }
  }
  //鼠标移出商品分类
  const leaveCategory = () => {
    console.log("鼠标移出商品分类")
    // setIsShowShopList(false)
  }

  //跳转商品详情
  const navigateDetail = (detailId)=>{
    console.log("跳转商品详情,",detailId)

  }
  return (  //pause-on-hover={false}
    <div className={style.swiper}>
      <Carousel className={style.swiperBoss} autoplay >
        {swiperList?.map(item => (
          <div className={style.swiperBox} key={item.id}>
            <img src={item.imgs} alt="" />
          </div>
        ))}
      </Carousel>
      <div className={style.list} onMouseLeave={leaveCategory} >
        <div className={style.left}>
          {
            category?.slice(0, 8).map(item => (
              <li
                onMouseEnter={() => enterCategory(item.detailId)}
                onClick={() => navigateCategory(item.detailId)}
                key={item.detailId} className={style.item}>
                <span>{item.categoryName}</span>
                <span>&gt;</span>
              </li>
            )
            )
          }
        </div>
        {
          isShowShopList && (
              <div className={style.right}>
                {content?.map(item => (
                  <li onClick={()=>navigateDetail(item.detailId)} key={item.detailId}  className={style.contentItem}>
                  <img src={item.titleImg} alt="" />
                  <span>{item.title}123123</span>
                </li>
                ))}
              </div>
            )
        }
      </div>
    </div>
  )
}