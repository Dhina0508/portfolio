import React from 'react'
import './intro.css'
import bg from '../../assets/dhina.png'
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span> 
        <span className="introText">I'm <span className="introName">Dhinakaran R</span><br/>Mobile and Web App Developer</span>
        <p className='introPara'>I am a skilled Full Stack Mobile and Web Application Developer with experience in creating<br/> an application from scratch to production</p>
      <Link>
      <button className="btn" onClick={()=>{
         document.getElementById('skills').scrollIntoView({behavior:'smooth'});
      }}><img className='btnImg' src={btnImg} alt="Know more" />Know More
      </button></Link>  </div>
        <img  src={bg} alt="Profile" className="bg" />
    </section>

  )
}

export default Intro