import { Carousel } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import style from "./style/index.module.scss"
export default function Swiper(props) {
  const { swiperList, category } = props
  console.log(category)
  //跳转商品分类
  const navigateCategory = (detailId)=>{
    console.log("跳转商品分类",detailId)
  }
  return (
    <div className={style.swiper}>
      <Carousel className={style.swiperBoss} pause-on-hover={false} autoplay>
        {swiperList?.map(item => (
          <div className={style.swiperBox} key={item.id}>
            <img src={item.imgs} alt="" />
          </div>
        ))}
      </Carousel>
      <div className={style.list}>
        {
          category?.map(item => {
            <li onClick={()=>navigateCategory(item.detailId)} className={style.item}>
              <span>{item.categoryName}</span>
              <span>&gt;</span>
            </li>
          })
        }


      </div>
    </div>
  )
}