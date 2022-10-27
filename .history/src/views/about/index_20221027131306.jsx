import React,{useState} from 'react'
import UpdateTitle from '../../components/updateTitle'
import style from "./style/index.module.scss"
import Editor from './components/Editor'
import {getAbout} from "../../api/smallshop"
import { useEffect } from 'react'
export default function About() {
  const [content,setContent] = useState("")
  useEffect(()=>{
    aboutContent()
  },[])
  const aboutContent =async()=>{
    const {data:res} = await getAbout()
    if(res.code!=200) return setContent("")
    let Content = res.content.replace(/shuangyinghao/g, '"').replace(/danyinhao/g, "'"); // 双引号
    setContent(Content)
    // let Content = res.data[0].artContent.replace(/shuangyinghao/g, '"').replace(/danyinhao/g, "'"); // 双引号
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
