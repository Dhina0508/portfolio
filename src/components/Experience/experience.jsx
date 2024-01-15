import React from 'react';
import './experience.css';
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAndroid, } from '@fortawesome/free-solid-svg-icons';
import 'react-vertical-timeline-component/style.min.css';
import { FaPython } from "react-icons/fa6";
import { DiDart } from "react-icons/di";
import { SiFlutter } from "react-icons/si";

const Experience = () => {
  return (
   <section id="experience">
     <span className="myexperience">
        Intern Experience
    </span>
<VerticalTimeline lineColor='#fff'>
    <VerticalTimelineElement className='timeline' iconStyle={{background:"#000",color:'#fff'}} icon={<SiFlutter/>} date='March 2022 - August 2022' dateClassName='period'>
 <h3 className='experienceTitle'>Mobile Application Developer</h3> 
 <h5 className='companyname'>@ Earth and Air Company, Chennai</h5>
 
 {/* <p className='experienceDesc'>Remote</p> */}
    </VerticalTimelineElement>
    
    <VerticalTimelineElement className='timeline' iconStyle={{background:"#000",color:'#fff'}} icon={<FaPython />} date='February 2023 - April 2023' dateClassName='period'>
 <h3 className='experienceTitle'>Python Developer</h3> 
 <h5 className='companyname'>@ Externs Club, Chennai</h5>
 {/* <p className='experienceDesc'></p> */}
    </VerticalTimelineElement>

    <VerticalTimelineElement className='timeline' iconStyle={{background:"#000",color:'#fff'}} icon={<DiDart />} date='July 2023 - December 2023' dateClassName='period'>
 <h3 className='experienceTitle'>Flutter Developer</h3> 
 <h5 className='companyname'>@ Ricoz Solution Private Limited, New Delhi</h5>
 {/* <p className='experienceDesc'></p> */}
    </VerticalTimelineElement>

    <VerticalTimelineElement className='timeline' iconStyle={{background:"#000",color:'#fff'}} icon={<FontAwesomeIcon icon={faMobileAndroid} />} date='November 2023 - January 2024' dateClassName='period'>
 <h3 className='experienceTitle'>Full Stack Developer</h3> 
 <h5 className='companyname'>@ Duly Care, Singapore</h5>
 {/* <p className='experienceDesc'></p> */}
    </VerticalTimelineElement>

</VerticalTimeline>
   </section>
  )
}

export default Experience