import React from 'react'
import Chuck from '../Assets/Chuck.jpg'
import Image from 'next/image'
import HeaderSocials from './HeaderSocials'
import Link from 'next/link'


function Header() {
  return (
    <div className='flex flex-col mx-auto justify-center w-max mb-20'>
      <div className='flex flex-col mt-5'>
        <div className='mx-auto text-center'>

          <div className=' mx-auto mb-2'>{`Hello, I'm`}</div>
          <div className='text-3xl font-bold mb-3'> Michael Norris</div>
          <div className='text mb-3'>Fullstack Developer</div>
          
          <div className='lg:mt-10'>
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

      <div className='grid grid-cols-3 mt-10 '>
        <div className='flex items-end mx-auto m:p-15 lg:p-10'>
          <HeaderSocials />
        </div>
        <div className='mx-auto'>
          <Image
            className='rounded-t-full'
            src={Chuck}
            alt="Picture of the author"
            width={400}
            height={400}
          />
        </div>

        <Link
          href='#contact'>
          <a className='text-sky-500 flex mx-auto items-end m:p-15 lg:p-10'> Scroll Down</a>
        </Link>
      </div>
    </div>
  )
}

export default Header