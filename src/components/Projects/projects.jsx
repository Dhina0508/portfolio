import React, { useState } from 'react'
import './projects.css';
import Tourism from '../../assets/travel.jpg';
import Blood from '../../assets/blood.jpg';
import Notes from '../../assets/notes.jpg';
import ECYC from '../../assets/community.jpg';
import Flood from '../../assets/flood.jpg';
import Medical from '../../assets/medical.jpg';
import Barber from '../../assets/barber.jpg';
import GroupChat from '../../assets/chat.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileText,faDownload } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [showMore,setShowMore]=useState(false);
  return (
   <section id="projects">
  <h2 className="projectTitle">
    My Projects
  </h2>
  <span className="projectDesc">
  Successfully developed and deployed a feature-rich web application, showcasing my expertise in both frontend and backend technologies. Implemented responsive design and scalable architecture for an optimal user experience.
  </span>
  <div className="projectContainers">
  <div className="projectContainer">
    <img src={Tourism} alt="Travel" className="projectImg" />
    <div className="projectText">
    <h4 className="projectInfo">
        Tourism App   </h4>

        {/* <p className="projectDetails">
        Application allows you to seamless booking hotels, rent vehicles, explore renowned eateries, and discover iconic destinations all on a single platform.
        </p> */}
        <div className="buttons">
        <a href='https://github.com/Dhina0508/tourism_app/tree/master' target="_blank">
          <button className='button'><FontAwesomeIcon icon={faFileText} /> Source Code</button></a>
          <a href='https://drive.google.com/file/d/1d1k8oSRfdlBYbYsbhV0YtzWLRaLJ-s35/view?usp=sharing' target="_blank">
          <button className='button'> <FontAwesomeIcon icon={faDownload} /> Apk Download</button></a>
        </div>

        </div>
  </div>
  <div className="projectContainer">
    <img src={Blood} alt="Blood Donation" className="projectImg" />
    <div className="projectText"> <h4 className="projectInfo">
        Blood Donation App   </h4>
        <div className="buttons">
        <a href='https://github.com/Dhina0508/Blood-Donation-app' target="_blank">
          <button className='button'><FontAwesomeIcon icon={faFileText} /> Source Code</button></a>
          <a href='https://drive.google.com/file/d/1DUYAke_uIw-PAkPGncgqAi6lFyF57hwM/view?usp=sharing' target="_blank">
          <button className='button'> <FontAwesomeIcon icon={faDownload} /> Apk Download</button></a>
        </div>
  </div></div>
  <div className="projectContainer">
    <img src={Notes} alt="Notes" className="projectImg" />
    <div className="projectText"><h4 className="projectInfo">
        Notes App   </h4>
        <div className="buttons">
        <a href='https://github.com/Dhina0508/NotesApp' target="_blank">
          <button className='button'><FontAwesomeIcon icon={faFileText} /> Source Code</button></a>
          <a href='https://drive.google.com/file/d/1e7esuub0JIdmsZDpP-sbqwjTEPMRjZW8/view?usp=sharing' target="_blank">
          <button className='button'> <FontAwesomeIcon icon={faDownload} /> Apk Download</button></a>
        </div>
  </div></div>
  <div className="projectContainer">
    <img src={ECYC} alt="community" className="projectImg" />
    <div className="projectText"> <h4 className="projectInfo">
        Community App - ECYC   </h4>
        <div className="buttons">
        <a href='https://github.com/Dhina0508/community-app' target="_blank">
          <button className='button'><FontAwesomeIcon icon={faFileText} /> Source Code</button></a>
          <a href='https://drive.google.com/file/d/1JsLFsyn9fZEWSLGOT4M8TiEWabArzF1v/view?usp=sharing' target="_blank">
          <button className='button'> <FontAwesomeIcon icon={faDownload} /> Apk Download</button></a>
        </div>
  </div></div>
  <div className="projectContainer">
    <img src={Flood} alt="flood" className="projectImg" />
    <div className="projectText">  <h4 className="projectInfo">
        Flood Prediction App   </h4>
        <div className="buttons">
        <a href='https://github.com/Dhina0508/Flood-foresight-app-SIH-project-' target="_blank">
          <button className='button'><FontAwesomeIcon icon={faFileText} /> Source Code</button></a>
          <a href='https://drive.google.com/file/d/1Jpl4HRff_MzJkrxzSDiufHCShsl9Z5ue/view?usp=drive_link' target="_blank">
          <button className='button'> <FontAwesomeIcon icon={faDownload} /> Apk Download</button></a>
        </div>
  </div></div>
  <div className="projectContainer">
    <img src={Medical} alt="medical" className="projectImg" />
    <div className="projectText"> <h4 className="projectInfo">
        Medical Tracker App   </h4>
        <div className="buttons">
        <a href='https://github.com/Dhina0508/Medical-Tracker-App' target="_blank">
          <button className='button'><FontAwesomeIcon icon={faFileText} /> Source Code</button></a>
          <a href='https://drive.google.com/file/d/1d1k8oSRfdlBYbYsbhV0YtzWLRaLJ-s35/view?usp=sharing' target="_blank">
          <button className='button'> <FontAwesomeIcon icon={faDownload} /> Apk Download</button></a>
        </div>
  </div></div>
  <div className="projectContainer"  style={{display: showMore?'grid':'none'}}>
    <img src={Barber} alt="barber" className="projectImg" />
    <div className="projectText"> <h4 className="projectInfo">
        Beauty parlour and Salon App</h4>
        <div className="buttons">
        <a href='https://github.com/Dhina0508/barbar_shop' target="_blank">
          <button className='button'><FontAwesomeIcon icon={faFileText} /> Source Code</button></a>
          <a href='https://drive.google.com/file/d/1d1k8oSRfdlBYbYsbhV0YtzWLRaLJ-s35/view?usp=sharing' target="_blank">
          <button className='button'> <FontAwesomeIcon icon={faDownload} /> Apk Download</button></a>
        </div>
  </div></div>
  <div className="projectContainer" style={{display: showMore?'grid':'none'}}>
    <img src={GroupChat} alt="chat" className="projectImg" />
    <div className="projectText"> <h4 className="projectInfo">
        Professional Group Chat App   </h4>
        <div className="buttons">
          <button className='button'><FontAwesomeIcon icon={faFileText} /> Source Code</button>
          <button className='button'> <FontAwesomeIcon icon={faDownload} /> Apk Download</button>
        </div>
  </div></div>

  </div>
  <button className="seeMore" onClick={()=>setShowMore(!showMore)}  style={{display: !showMore?'flex':'none'}}>See More</button>
  <button className="seeMore" onClick={()=>setShowMore(!showMore)}  style={{display: showMore?'flex':'none'}}>See Less</button>
   </section>
  )
}

export default Projects