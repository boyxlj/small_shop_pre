import { Carousel } from 'antd';
import React from 'react';
import style from "./style/index.module.scss"
export default function Swiper(props) {
  const { swiperList } = props
  return (
    <div className={style.swiper}>
      <Carousel className={style.swiperBoss} pause-on-hover={false} autoplay>
        {swiperList?.map(item => (
          <div className={style.swiperBox} key={item.id}>
            <img src={item.imgs} alt="" />
          </div>
        ))}
      </Carousel>
      <div className={style.list}></div>
    </div>
  )
}