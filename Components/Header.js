import React from 'react'
import Chuck from '../Assets/Chuck.jpg'
import Image from 'next/image'
import HeaderSocials from './HeaderSocials'
import Link from 'next/link'


function Header() {
  return (
    <div className='flex flex-col mx-auto justify-center mb-20'>
      <div className='flex flex-col mt-10'>
        <div className='mx-auto text-center'>

          <div className='text-sm mx-auto text-gray-400'>{`Hello, I'm`}</div>
          <div className='text-3xl font-bold mb-2 text-sky-500'> Michael Norris</div>
          <div className='text-sm text-gray-400'>Fullstack Developer</div>
          
          <div className='mt-6'>
            <div className="flex ">
              <Link
                href='#contact'>
                <a className='rounded bg-transparent border border-sky-500 hover:bg-sky-500 font-light p-3 mr-2 '>Download Resume</a>
              </Link>

              <Link
                href='#contact'>
                <a className='font-light p-3 rounded bg-sky-500 hover:bg-transparent border-sky-500 hover:border-sky-500 border flex mx-4 '>{`Let's Talk`}</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='grid md:grid-cols-3 mt-6 '>
        <div className='hidden md:visible md:flex items-end mx-auto m:p-15 lg:p-10'>
          <HeaderSocials />
        </div>
        <div className=' mx-auto w-60'>
          <Image
            className='rounded-t-full'
            src={Chuck}
            alt="Picture of the author"
            // width={400}
            // height={400}
          />
        </div>

        <Link
          href='#contact'>
          <a className='hidden md:visible text-sky-500 md:flex mx-auto items-end m:p-15 lg:p-10'> Scroll Down</a>
        </Link>
      </div>
    </div>
  )
}

export default Header