import { Carousel } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import style from "./style/index.module.scss"
import { useNavigate } from 'react-router-dom';
export default function Swiper(props) {
  const { swiperList, category } = props
  const navigate = useNavigate()
  console.log(category)
  //跳转商品分类
  const navigateCategory = (detailId) => {
    console.log("跳转商品分类", detailId)
    navigate(`/goods?category=${detailId}`)
  }
  return (  //pause-on-hover={false}
    <div className={style.swiper}>
      <Carousel className={style.swiperBoss}  autoplay>
        {swiperList?.map(item => (
          <div className={style.swiperBox} key={item.id}>
            <img src={item.imgs} alt="" />
          </div>
        ))}
      </Carousel>
      <div className={style.list}>
        {
          category?.slice(0,8).map(item => (
            <>
            <li onClick={() => navigateCategory(item.detailId)} key={item.detailId} className={style.item}>
              <span>{item.categoryName}</span>
              <span>&gt;</span>
            </li>
            <div className={style.content}>
        <h1>Content</h1>
      </div>
            </>
           
          )
          )
        }
       
      </div>
      
    </div>
  )
}