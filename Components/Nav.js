import React from 'react'
import Link from 'next/link'
import { BsFillHouseFill } from 'react-icons/bs'
import { BsInfoLg } from 'react-icons/bs'
import { MdComputer } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'


function Nav() {
  return (
    <div className='flex sticky bottom-10'>
      <div className='text-center mx-auto  p-8 backdrop-blur-xl rounded-3xl flex'>

       

        <Link
          href='#' passHref >
          <a className='  px-5 hover:text-sky-500 duration-300' title="Home"><BsFillHouseFill size={20} /></a>
        </Link>
        <Link
          href='#about' passHref >
          <a className='  px-5 hover:text-sky-500 duration-300' title="About"><BsInfoLg size={20} /></a>
        </Link>

        <Link
          href='#portfolio' passHref >
          <a className='  px-5 text-white hover:text-sky-500 duration-300' title="Projects"><MdComputer size={20} /></a>
        </Link>

        <Link
          href='#contact' passHref >
          <a className='  px-5 text-white hover:text-sky-500 duration-300' title="Resume"><BsFillChatDotsFill size={20} /></a>
        </Link>
      </div>

    </div>
  )
}

export default Nav