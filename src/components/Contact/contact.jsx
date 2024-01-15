import React, { useRef } from 'react'
import FaceBook from '../../assets/facebook-icon.png';
import Insta from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedIn.png'
import Github from '../../assets/github.png';
// import { IoMdCall } from "react-icons/io";
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_rcvy0tg', 'template_f5j93in', form.current, 'oNFL6prSQ1WpFLmEd')
      .then((result) => {
          e.target.reset();
          alert('Email Sent Successfully !!');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
   <section id="contact">
    <h1 className="contactTitle">
        Contact Me
    </h1>
    <span className="contactDesc">

        Please Fill out the form below to discuss with me.
    </span>
    <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder='Your Name' name='from_name'/>
<input type="email" className="email" placeholder='Your Email' name='from_email'/>
<textarea className='message' name='message' rows="5" placeholder='Your Message'></textarea> 
<button type='submit'  value='Send' className="submitButton">Submit</button>
<div className="links">
{/* <IoMdCall className='call' /> */}
<a href='https://www.linkedin.com/in/dhinakaran-r-8574461bb/' target="_blank">
    <img src={LinkedIn} alt="linkedIn"  className="link" /></a>
    <a href='https://github.com/Dhina0508' target="_blank">
    <img src={Github} alt="Github" className="link" /></a>
    <a href='https://www.instagram.com/_imagination_king_05/' target="_blank">
    <img src={Insta} alt="Insta" className="link" /></a>
    <a href='https://www.facebook.com/profile.php?id=100024288769685' target="_blank">
    <img src={FaceBook} alt="Facebook" className="link" /></a>

</div>
   </form>
   </section>
  )
}

export default Contact