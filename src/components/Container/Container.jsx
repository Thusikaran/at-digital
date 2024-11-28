import React from 'react'
import bgimg from '../../assets/img/container.png'
import './Container.css'
import img1 from '../../assets/img/image1.png'
import img2 from '../../assets/img/image2.png'
import { containerData } from '../../content/content'

const Container = () => {
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
            <div className='Question-top'>
                <div className='Question-top-in'>
                    <div>{containerData.Question.text1}</div>
                    <div><b>-</b></div>
                </div>
                <div>{containerData.Question.text2}</div>
            </div>
            <div  className='Question-box'>
                <div>{containerData.Question.text3}</div>
                <div>+</div>
            </div>
            <div  className='Question-box'>
                <div>{containerData.Question.text4}</div>
                <div>+</div>
            </div>
        </div>
    </div>
  )
}

export default Container