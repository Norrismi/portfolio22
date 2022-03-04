import React from 'react'
import Link from 'next/link'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiCodewars } from 'react-icons/si'

function HeaderSocials() {
    return (
        <div > 
            <Link 
                href='https://github.com/Norrismi' passHref >
                <a className=' text-sky-500 m-1 hover:text-white' target="_blank"><BsGithub size={20}  /></a>
            </Link>

            <Link
                href='https://www.codewars.com/users/Norrismi'>
                <a className=' text-sky-500 m-1 hover:text-white' target="_blank"><SiCodewars size={20} /></a>
            </Link>

            <Link
                href='https://www.linkedin.com/in/michael-david-norris/'>
                <a className=' text-sky-500 hover:text-white' target="_blank"><BsLinkedin size={20} /></a>
            </Link>
          

        </div>
    )
}

export default HeaderSocials