import React, { useState } from 'react'
import bgimg from '../../assets/img/container.png'
import './Container.css'
import img1 from '../../assets/img/image1.png'
import img2 from '../../assets/img/image2.png'
import { containerData } from '../../content/content'

const Container = () => {
    const [open1,setOpen1]=useState(false)
    const [open2,setOpen2]=useState(false)
    const [open3,setOpen3]=useState(false)
  return (
    <div>
        <div className='container'>
            <img className='container-img' src={bgimg} alt="" />
            <div>
            <div className='container-text'>
                <span>{containerData.containerText} <br /> </span>
                <button className='button'>Get free consultation</button>
            </div>
            </div>
        </div>

        <div className="content">
            <div className='content-box'>
                <img src={img2} alt="" />
                <div className='content-text'>
                    <span>{containerData.content[0].title}</span>
                    <p>{containerData.content[0].text}</p>
                    <button className='button'>LEARN MORE</button>
                </div>
            </div>
            <div className='content-box1'>
                <div className='content-text'>
                    <span>{containerData.content[1].title}</span>
                    <p>{containerData.content[1].text}</p>
                    <button className='button'>LEARN MORE</button>
                </div>
                <img src={img1} alt="" />
            </div>
        </div>

        <div className='Question'>
            <div className='Question-header'>{containerData.Question.title}</div>
            <div className={open1?'Question-top':''}>
                <div className={open1?'Question-top-in':'Question-box'}>
                    <div>{containerData.Question.text1}</div>
                    <div onClick={()=>setOpen1(!open1)}>{open1?<b>-</b>:<b>+</b>}</div>
                </div>
                {open1 && (
                <div>{containerData.Question.text2}</div>
                   )}
            </div>

            <div className={open2?'Question-top':''}>
                <div className={open2?'Question-top-in':'Question-box'}>
                    <div>{containerData.Question.text3}</div>
                    <div onClick={()=>setOpen2(!open2)}>{open2?<b>-</b>:<b>+</b>}</div>
                </div>
                {open2 && (
                <div>{containerData.Question.text2}</div>
                   )}
            </div>

            <div className={open3?'Question-top':''}>
                <div className={open3?'Question-top-in':'Question-box'}>
                    <div>{containerData.Question.text4}</div>
                    <div onClick={()=>setOpen3(!open3)}>{open3?<b>-</b>:<b>+</b>}</div>
                </div>
                {open3 && (
                <div>{containerData.Question.text2}</div>
                   )}
            </div>
           
        </div>
    </div>
  )
}

export default Container