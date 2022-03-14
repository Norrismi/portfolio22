import React from 'react'
import Link from 'next/link'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiCodewars } from 'react-icons/si'

function Footer() {
  return (
    <div className='bg-sky-500 p-10 
    bg-gradient-to-t from-sky-500  to-black
    ' style={{ marginBottom: '-100px' }}>

      <div className="flex justify-evenly w-6/12 mx-auto mb-10 lg:mt-5 ">
        <Link
          href='#about'>
          <a className='text-white text-lg hover:text-sky-500'>About</a>
        </Link>

        <Link
          href='#experience'>
          <a className='text-white text-lg hover:text-sky-500'>Experience</a>
        </Link>

        <Link
          href='#portfolio'>
          <a className='text-white text-lg hover:text-sky-500'>Portfolio</a>
        </Link>

        <Link
          href='#contact'>
          <a className='text-white text-lg hover:text-sky-500'>Contact</a>
        </Link>
      </div>
 
      <div className="flex justify-evenly lg:w-4/12 mx-auto lg:mb-28">
        <div className="bg-indigo-800 p-5 rounded-xl">
          <Link
            href='https://github.com/Norrismi'>
            <a className='text-sky-500 hover:text-white' title="GitHub Profile" target="_blank"><BsGithub size={20} /></a>
          </Link>
        </div>

        <div className="bg-indigo-800 p-5 rounded-xl">
          <Link
            href='https://www.codewars.com/users/Norrismi'>
            <a className='text-sky-500 hover:text-white' title="GitHub Profile" target="_blank"><SiCodewars size={20} /></a>
          </Link>
        </div>

        <div className="bg-indigo-800 p-5 rounded-xl">
          <Link
            href='https://www.linkedin.com/in/michael-david-norris/'>
            <a className='text-sky-500 hover:text-white' title="GitHub Profile" target="_blank"><BsLinkedin size={20} /></a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer