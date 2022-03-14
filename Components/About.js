import React from 'react'
import chuck from '../Assets/Chuck.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { FaAward } from 'react-icons/fa'
import { BsPeopleFill } from 'react-icons/bs'
import { AiTwotoneFolderOpen } from 'react-icons/ai'

function About() {
  return (


    <div className='lg:mt-40 text-center' id='about'>
      <div className='text-sm text-gray-400'>
        Get to Know
      </div>
      <div className='text-3xl text-sky-500'>
        Michael Norris
      </div>
      <div className='lg:mt-20 grid grid-cols-2 drop-shadow-lg'>

        <div className='bg-gradient-to-b from-indigo-800  p-5 h-fit rounded-xl mx-auto'>

    

          <Image
            className='rounded-xl bg-white hover:rotate-12 duration-300'
            src={chuck}
            alt="Picture of the author"
            // width={350}
            // height={350}
          />
        </div>

        <div className='mx-auto'>
          <div className='grid grid-rows-3'>
            <div className='flex flex-row'>
              <div className='lg:mr-10 w-40 h-40 rounded-xl bg-indigo-800 flex flex-col justify-center '>


                <div className='text-sky-500 flex justify-center p-1'>
                  <FaAward size={30} />
                </div>
                <div className='p-1'>Experience</div>
                <div className='p-1 text-gray-400'>1+ Years</div>

              </div>
              <div className='lg:mr-10 w-40 h-40 rounded-xl bg-indigo-800 flex flex-col justify-center'>

                <div className='text-sky-500 flex justify-center p-1'>
                  <BsPeopleFill size={30} />
                </div>
                <div className='p-1'>Clients</div>
                <div className='p-1 text-gray-400'>2</div>
              </div>
              <div className='lg:mr-10 w-40 h-40 rounded-xl bg-indigo-800 flex flex-col justify-center'>
                <div className='text-sky-500 flex justify-center p-1'>
                  <AiTwotoneFolderOpen size={30} />
                </div>
                <div className='p-1'>Projects</div>
                <div className='p-1 text-gray-400'>8</div>
              </div>
            </div>

            <div className="text-left mt-10 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sapiente vel voluptate fugit corporis tenetur aliquid in eos vero ad ex modi possimus suscipit ratione aliquam harum, ducimus ipsam. Debitis!
            </div>

            <div className="text-left">
              <Link
                href='#portfolio'>
                <a className='rounded bg-transparent border border-sky-500 hover:bg-sky-500 font-light p-3 mr-2 '>Portfolio</a>
              </Link>
            </div>



          </div>
        </div>

      </div>
    </div>

  )
}

export default About