import React, { useEffect, useState } from 'react'
import style from "./style/index.module.scss"
import GoodTabs from './goodTabs'
import { getCategoryShop, getCategoryalls, getShopSearch } from "../../api/request"
import IndexShop from "../../components/indexShop"
import { Empty, Spin, Pagination } from "antd"
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { setPageTotal, setPageOn } from './store/pageNation'
import UpdateTitle from '../../components/updateTitle'
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
export default function Goods() {
  const navigate = useNavigate()
  const [itemShopList, setItemShopList] = useState([])
  const [disabledTabs, setDisabledTabs] = useState(false)
  const [loading, setLoading] = useState(false)
  const [pageNationDisable, setPageNationDisable] = useState(false)
  const [params] = useSearchParams()
  const categoryId = params.get("category")
  const keyword = params.get("keyword")
  //分页相关
  //统一修改状态
  const pageOn = useSelector((state) => state.pageNation.pageOn)
  const pageCount = useSelector((state) => state.pageNation.pageCount)
  const pageTotal = useSelector((state) => state.pageNation.pageTotal)
  const dispatch = useDispatch()

  //切换分页
  const changePageNation = (value) => {
    document.documentElement.scrollTop = 0
    dispatch(setPageOn(value))
    if (keyword) {
      getShopsearch({ key: keyword, pageOn: value, pageCount })
      return
    }
    if (categoryId) {
      getShops({ detailId: categoryId, pageOn: value, pageCount })
    } else {
      getShopsAll({ pageOn: value, pageCount })
    }
  }
  useEffect(() => {
    document.documentElement.scrollTop = 0
    if (keyword) {
      getShopsearch({ key: keyword, pageOn, pageCount })
      return
    }
    if (categoryId) {
      getShops({ detailId: categoryId, pageOn, pageCount })
    } else {
      getShopsAll({ pageOn, pageCount })
    }
  }, [categoryId, keyword])
  //查询分类下的商品
  const getShops = async (obj) => {
    setDisabledTabs(true)
    setLoading(true)
    setPageNationDisable(true)
    const { data: res } = await getCategoryShop(obj).finally(
      () => {
        setDisabledTabs(false)
        // setLoading(false)
        setPageNationDisable(false)
      })
    if (res.code != 200) return setItemShopList([])
    setItemShopList(res.data)
    dispatch(setPageTotal(res.total))
  }
  //查询所有商品
  const getShopsAll = async (obj) => {
    setDisabledTabs(true)
    setLoading(true)
    setPageNationDisable(true)
    const { data: res } = await getCategoryalls(obj).finally(
      () => {
        setDisabledTabs(false)
        // setLoading(false)
        setPageNationDisable(false)
      })
    if (res.code != 200) return setItemShopList([])
    dispatch(setPageTotal(res.total))
    setItemShopList(res.data)
  }
  //搜索查询商品
  const getShopsearch = async (obj) => {
    setDisabledTabs(true)
    setPageNationDisable(true)
    const { data: res } = await getShopSearch(obj).finally(
      () => {
        setDisabledTabs(false)
        setLoading(false)
        setPageNationDisable(false)
      })
    if (res.code != 200) return setItemShopList([])
    dispatch(setPageTotal(res.total))
    setItemShopList(res.data)
  }
  //返回首页
  const backIndex = () => {
    navigate("/")
  }
  return (
    <div className={style.goods}>
      <UpdateTitle title="全部商品" />
      <div className={style.route1}>
        <span onClick={backIndex}>首页</span>
        <span className={style.gt}>{">"}</span>
        <span>全部商品</span>
        <span className={style.gt}>{">"}</span>
        <span>{keyword ? "搜索" : "分类"}</span>
        {keyword && <span className={style.gt}>{">"}</span>}
        {keyword && <span>{keyword}</span>}
      </div>

      <div className={style.routeTabs}><GoodTabs disabledTabs={disabledTabs} /></div>
      <div className={style.allShops}>
        {loading && (<Spin />)} 
        {itemShopList?.length ? (<IndexShop itemShopList={itemShopList} hiddenTile={true} />) : (<Empty description="暂无商品" style={{ paddingTop: "80px" }} />)}
        {itemShopList?.length > 0 &&
          <ConfigProvider locale={zhCN}>
            <Pagination
              onChange={changePageNation}
              className={style.pageNation}
              current={pageOn}
              disabled={pageNationDisable}
              total={pageTotal}
              pageSize={pageCount}
            />
          </ConfigProvider>
        }
      </div>
    </div>
  )
}
