import React from 'react'
import Chuck from '../Assets/Chuck.jpg'
import Image from 'next/image'


function Header() {
  return (





    <div className='flex flex-col mt-20'>
      <div className='m-auto text-center'>


        <div className='text-sm lg:mb-2'>{`Hello, I'm`}</div>
        <div className='text-3xl font-bold lg:mb-3'> Michael Norris</div>
        <div className='text-sm lg:mb-2'>Fullstack Developer</div>

        <div className='lg:mt-10'>
          <button className='btn rounded bg-transparent border border-sky-500 font-light p-3 mr-1'>Download Resume</button>
          <button className='btn rounded bg-sky-500 font-light p-3 mx-4 '>{`Let's Talk`}</button>
        </div>


        <div className='lg:mt-20'>
          <Image
          className='rounded-t-full'
            src={Chuck}
            alt="Picture of the author"
            width={400}
            height={400}
          />
        </div>


      </div>
    </div>


  )
}

export default Header