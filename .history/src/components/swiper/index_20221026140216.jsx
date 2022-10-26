import { Carousel } from 'antd';
import React from 'react';
import { useState } from 'react';
import style from "./style/index.module.scss"
import { useNavigate } from 'react-router-dom';
export default function Swiper(props) {
  const { swiperList, category } = props
  const [isShowShopList,setIsShowShopList] = useState(true)
  const [content,setContent] = useState(0)
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
    if(category){
      const res = category?.filter(item=>item.detailId==detailId)
      console.log("123",res[0]?.children)
    }
    setContent(detailId)
  }
  //鼠标移出商品分类
  const leaveCategory = () => {
    console.log("鼠标移出商品分类")
    // setIsShowShopList(false)
    // setContent()
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
              onMouseEnter={()=>enterCategory(item.detailId)} 
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
          isShowShopList&&(
            <div className={style.right} >
              {/* <h1>Contents-----{content}</h1> */}
              <li className={style.contentItem}>
                <img src="https://img14.360buyimg.com/n1/jfs/t1/210902/35/25956/18752/631921e2Ec9898853/e72dc32de89a32d4.jpg" alt="" />
                <span>iPhone 14 Pro 256GB</span>
              </li>
              <li className={style.contentItem}>
                <img src="https://img14.360buyimg.com/n1/jfs/t1/210902/35/25956/18752/631921e2Ec9898853/e72dc32de89a32d4.jpg" alt="" />
                <span>iPhone 14 Pro 256GB</span>
              </li>
              <li className={style.contentItem}>
                <img src="https://img14.360buyimg.com/n1/jfs/t1/210902/35/25956/18752/631921e2Ec9898853/e72dc32de89a32d4.jpg" alt="" />
                <span>iPhone 14 Pro 256GB</span>
              </li>
              <li className={style.contentItem}>
                <img src="https://img14.360buyimg.com/n1/jfs/t1/210902/35/25956/18752/631921e2Ec9898853/e72dc32de89a32d4.jpg" alt="" />
                <span>iPhone 14 Pro 256GB</span>
              </li>
              <li className={style.contentItem}>
                <img src="https://img14.360buyimg.com/n1/jfs/t1/210902/35/25956/18752/631921e2Ec9898853/e72dc32de89a32d4.jpg" alt="" />
                <span>iPhone 14 Pro 256GB</span>
              </li>
              <li className={style.contentItem}>
                <img src="https://img14.360buyimg.com/n1/jfs/t1/210902/35/25956/18752/631921e2Ec9898853/e72dc32de89a32d4.jpg" alt="" />
                <span>iPhone 14 Pro 256GB</span>
              </li>
              <li className={style.contentItem}>
                <img src="https://img14.360buyimg.com/n1/jfs/t1/210902/35/25956/18752/631921e2Ec9898853/e72dc32de89a32d4.jpg" alt="" />
                <span>iPhone 14 Pro 256GB</span>
              </li>
              <li className={style.contentItem}>
                <img src="https://img14.360buyimg.com/n1/jfs/t1/210902/35/25956/18752/631921e2Ec9898853/e72dc32de89a32d4.jpg" alt="" />
                <span>iPhone 14 Pro 256GB</span>
              </li>
              <li className={style.contentItem}>
                <img src="https://img14.360buyimg.com/n1/jfs/t1/210902/35/25956/18752/631921e2Ec9898853/e72dc32de89a32d4.jpg" alt="" />
                <span>iPhone 14 Pro 256GB</span>
              </li>
              <li className={style.contentItem}>
                <img src="https://img14.360buyimg.com/n1/jfs/t1/210902/35/25956/18752/631921e2Ec9898853/e72dc32de89a32d4.jpg" alt="" />
                <span>iPhone 14 Pro 256GB</span>
              </li>
            </div>
          )
        }
      </div>

    </div>
  )
}