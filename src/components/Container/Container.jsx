import React from 'react'
import bgimg from '../../assets/img/container.png'
import './Container.css'
import img1 from '../../assets/img/image1.png'
import img2 from '../../assets/img/image2.png'

const Container = () => {
  return (
    <div>
        <div className='container'>
            <img className='container-img' src={bgimg} alt="" />
            <div>
            <div className='container-text'>
                <span>We crush  your  competitors, goals, and sales records - without  the B.S. <br /> </span>
                <button className='button'>Get free consultation</button>
            </div>
            </div>
        </div>

        <div className="content">
            <div className='content-box'>
                <img src={img2} alt="" />
                <div className='content-text'>
                    <span>Web & Mobile App Development</span>
                    <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                    <button className='button'>LEARN MORE</button>
                </div>
            </div>
            <div className='content-box1'>
                <div className='content-text'>
                    <span>Digital Strategy Consulting</span>
                    <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                    <button className='button'>LEARN MORE</button>
                </div>
                <img src={img1} alt="" />
            </div>
        </div>

        <div className='Question'>
            <div className='Question-header'>Frequently asked questions</div>
            <div className='Question-top'>
                <div className='Question-top-in'>
                    <div>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</div>
                    <div><b>-</b></div>
                </div>
                <div>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</div>
            </div>
            <div  className='Question-box'>
                <div>Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?</div>
                <div>+</div>
            </div>
            <div  className='Question-box'>
                <div>Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?</div>
                <div>+</div>
            </div>
        </div>
    </div>
  )
}

export default Container