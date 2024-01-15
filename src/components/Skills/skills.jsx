import React from 'react'
import './skills.css';
import UIDesignImg from '../../assets/ui-design.png';
import WebDesignImg from '../../assets/website-design.png';
import AppDesignImg from '../../assets/app-design.png';



const Skills = () => {
  return (
  <section id="skills">
    <span className="skillTitle">
        My Skills
    </span>
    <span className="skillDesc">
    Experienced full-stack developer proficient in web and mobile app development. Equipped with comprehensive knowledge of both frontend and backend technologies, I bring a versatile skill set to create seamless, end-to-end solutions. Specialized in crafting engaging user interfaces and robust server-side functionalities. Adept at transforming ideas into fully functional, responsive applications.
    </span>
    <div className="skillBars">
       
         <div className="skillBar">
            <img src={AppDesignImg} alt="App" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Mobile App Development</h2>
                <p>Versatile mobile app developer with a flair for creating engaging and user-friendly applications, blending technical proficiency with a focus on delivering high-performance.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={WebDesignImg} alt="Web" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Web App Development</h2>
                <p>Seasoned web app developer adept at crafting efficient and scalable solutions, combining frontend and backend expertise to deliver seamless user experiences</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={UIDesignImg} alt="UI" className="skillBarImg" />
            <div className="skillBarText">
                <h2>UI/UX Design</h2>
                <p>Dedicated to creating visually stunning and intuitively designed digital experiences.</p>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Skills;