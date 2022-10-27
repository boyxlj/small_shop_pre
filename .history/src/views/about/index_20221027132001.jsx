import React,{useState} from 'react'
import UpdateTitle from '../../components/updateTitle'
import style from "./style/index.module.scss"
import Editor from './components/Editor'
import {getAbout} from "../../api/smallshop"
import { useEffect } from 'react'
import { Spin } from 'antd'
export default function About() {
  const [content,setContent] = useState("")
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    aboutContent()
  },[])
  const aboutContent =async()=>{
    setLoading(true)
    const {data:res} = await getAbout().finally(()=>{
      setTimeout(() => {
        setLoading(false)
      }, 500);
    })
    if(res.code!=200) return setContent("")
    let Content = res.content.replace(/shuangyinghao/g, '"').replace(/danyinhao/g, "'"); // 双引号
    setContent(Content)
  }
  return (
    <div>
      <UpdateTitle title="关于"/>
      
      <div className={style.box}>
        <div className={style.content}>
        <div className={style.editor}>
          <Editor  content={content}/>
        </div>
        </div>
      </div>
    </div>
  )
}
