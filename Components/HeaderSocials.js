import React from 'react'
import Link from 'next/link'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiCodewars } from 'react-icons/si'

function HeaderSocials() {
    return (
        <div className='flex'> 
            <Link 
                href='https://github.com/Norrismi' passHref >
                <a className=' text-sky-500 mr-4 hover:text-white' title="GitHub Profile" target="_blank"><BsGithub size={20}  /></a>
            </Link>
            <Link
                href='https://www.codewars.com/users/Norrismi'>
                <a className=' text-sky-500 mr-4 hover:text-white' title="Codewar Profile" target="_blank"><SiCodewars size={20} /></a>
            </Link>
            <Link
                href='https://www.linkedin.com/in/michael-david-norris/'>
                <a className=' text-sky-500 mr-4 hover:text-white' title="LinkedIn Profile" target="_blank"><BsLinkedin size={20} /></a>
            </Link>
        </div>
    )
}

export default HeaderSocials