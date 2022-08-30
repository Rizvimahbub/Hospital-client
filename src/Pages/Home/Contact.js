import React, { useRef, useState } from "react";
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from "../Shared/PrimaryButton";
import emailjs from '@emailjs/browser'; import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {
  AOS.init();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_z5pslco', e.target, 'BsqmGmClZmW0w82A2')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <div style={{
      background: `url(${appointment})`
    }} className='bg-primary px-10 py-14 mt-5'>
      <div className='text-center pb-14 text-white'>
        <p data-aos="fade-up"
          data-aos-duration="2500" className='text-xl font-bold text-[#6350f2] bg-clip-text bg-gradient-to-br from-accent to-secondary'>
          Contact Us
        </p>
        <h1 data-aos="fade-up"
          data-aos-duration="2500" className='text-4xl'>Stay connected with us</h1>
      </div>
      <form data-aos="fade-up"
        data-aos-duration="2500" onSubmit={sendEmail} className='grid grid-cols-1 justify-items-center gap-5'>
        <input
          type='text'
          placeholder='Email Address'
          className='input w-full max-w-md'
        />
        <input
          type='text'
          placeholder='Subject'
          className='input w-full max-w-md'
        />
        <textarea
          className='textarea w-full max-w-md'
          placeholder='Your message'
          rows={6}
        ></textarea>
        <PrimaryButton>Submit</PrimaryButton>
      </form>
    </div>
  );
};

export default Contact;