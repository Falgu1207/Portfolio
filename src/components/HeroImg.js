import './HeroImg.css';
import React from 'react'
import IntroImg from '../assets/intro.jpg'
import {Link} from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className="mask">
            <img className='intro-img' src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <h1>React Developer</h1>
            <div>
              <Link to="/project" className='btn'>projects</Link>
              <Link to="/contact" className='btn btn-light'>contact</Link>
            </div>
        </div>
        
    </div>
  )
}

export default HeroImg
