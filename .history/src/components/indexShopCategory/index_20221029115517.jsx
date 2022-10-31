import React from 'react';
import style from "./style/index.module.scss"
import {useNavigate} from "react-router-dom"
import {randomSort} from "../../utils/randomSort"
export default function IndexShopCategory(props) {
  const { category } = props
  const navigate = useNavigate()

  //点击加载更多
  const moreMany = (value)=>{
    navigate(`/goods?category=${value}`)
  }

  const clickDetail = (value)=>{
    navigate(`/details?detailId=${value}`)
  }

  return (
    <div>
      
      {category?.map(item => (item.children && 
        <div key={item.detailId} className={style.box}>
          <p className={style.topTitle}><span>{item.categoryName}</span><span onClick={()=>moreMany(item.detailId)}>查看更多<i className='iconfont icon-xiayiyeqianjinchakangengduo-xianxingyuankuang
'></i></span></p>
          <div className={style.itemBox}>
            <ul>
              {item.children?.slice(0,8).map(item1 => (
                <li onClick={()=>clickDetail(item1.detailId)} key={item1.detailId} >
                  <div className={style.imgs}>
                    <img src={item1.titleImg} alt="" />
                  </div>
                  <div className={style.title}>{item1.title}</div>
                  <div className={style.desc}>{item1.descs}</div>
                  <div className={style.price}><span>{item1.price}</span>元起 <span>{item1.prePrice}元</span></div>
                </li>
              ))
              }
            </ul>
          </div>
        </div>
      ))}
    </div>


  )
}