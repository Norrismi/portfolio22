import { RiLinkedinLine } from 'react-icons/ri'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'
import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {

  const form = useRef()
  const [success, setSuccess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    let data = {
      service: process.env.NEXT_PUBLIC_SERVICE,
      template: process.env.NEXT_PUBLIC_TEMPLATE,
      user: process.env.NEXT_PUBLIC_USER
    }

    emailjs.sendForm(data.service, data.template, form.current, data.user)

    setSuccess(true)
    console.log(success)
    e.target.reset();
  };




  return (
    <div className='mt-20' id='contact'>
      <div className='text-sm text-gray-400 text-center'>Get In Touch</div>
      <div className='text-3xl text-sky-500 text-center'>Contact Me</div>



      <div className="md:grid md:grid-cols-2 mt-10">
        <div className='flex justify-center w-screen  md:grid md:grid-rows-2 text-center md:justify-end  md:w-9/12'>

          <div className='md:flex md:flex-row justify-end'>
            <div className='w-28 h-28 mb-5 rounded-xl m-2 bg-indigo-800 flex flex-col justify-center'>

              <div className='mx-auto'>
                <Link href="mailto:norrismi.email@gmail.com" >
                  <a target='_blank' className='text-sky-500 flex justify-center p-1 hover:text-white'  ><AiOutlineMail size={30} /></a>
                </Link>
                <div className='mt-2'>Email</div>
                <div className=' text-gray-400 text-sm'>Michael</div>
              </div>
            </div>
          </div>

          <div className='flex flex-row'>
            <div className=' w-28 h-28 rounded-xl m-2 bg-indigo-800 flex flex-col justify-center'>

              <div className='mx-auto'>
                <Link href="https://www.linkedin.com/in/michael-david-norris/" >
                  <a target='_blank' className='text-sky-500 flex justify-center p-1 hover:text-white'  ><RiLinkedinLine size={30} /></a>
                </Link>

                <div className='mt-2 justify-center'>LinkedIn</div>
                <div className=' text-gray-400 text-sm'>Michael</div>
              </div>

            </div>
            <div className='md:w-28 md:h-28'></div>
          </div>
        </div>


        {success == true ? (
          <div className="text-white text-3xl flex justify-center mt-20 ">Thanks your info was submitted!</div>
        ) : (
          <div className="p-6 flex flex-col">
            <form ref={form} onSubmit={sendEmail} className='flex flex-col lg:w-2/3 '>
              <input type="text" name="name" placeholder="Your Full Name" required className="mb-5 border-2 border-sky-500 rounded-lg bg-black text-gray-400 p-2 fname" />
              <input type="email" name="email" placeholder="Your Email" required className="mb-5 border-2 border-sky-500 rounded-lg bg-black text-gray-400 p-2 lname" />
              <textarea name="message" placeholder="Your Message" rows="4" cols="50" required className="mb-5 border-2 border-sky-500 rounded-lg bg-black p-2 lname text-gray-400">
              </textarea>
              <button type='submit'className='w-5/12 font-light px-1 py-2 rounded bg-sky-500 hover:bg-transparent border-sky-500 hover:border-sky-500 border '>Send Message</button>
            </form>
          </div>

        )}

      </div>
    </div>
  )
}

export default Contact