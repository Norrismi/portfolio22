import React from 'react'
import chuck from '../Assets/Chuck.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { FaAward } from 'react-icons/fa'
import { BsPeopleFill } from 'react-icons/bs'
import { AiTwotoneFolderOpen } from 'react-icons/ai'

function About() {
  return (


    <div className='text-center' id='about'>
      <div className='text-sm text-gray-400'>
        Get to Know
      </div>
      <div className='text-3xl text-sky-500'>
        Michael
      </div>


      <div className='mt-10 flex md:grid-cols-2 drop-shadow-lg'>

        {/* <div className='hidden lg:inline-block bg-gradient-to-b from-indigo-800  p-5 h-fit rounded-xl mx-auto'>
          <Image
            className='rounded-xl bg-white hover:rotate-12 duration-300'
            src={chuck}
            alt="Picture of the author"
          // width={350}
          // height={350}
          />
        </div> */}

        <div className='mx-auto'>
          <div className='h-min md:grid md:grid-rows-3'>


            <div className='flex flex-col mx-auto md:flex-row'>
              <div className=' w-40 h-40 m-4 rounded-xl bg-indigo-800 flex flex-col justify-center '>


                <div className='text-sky-500 flex justify-center p-1'>
                  <FaAward size={30} />
                </div>
                <div className='p-1'>Experience</div>
                <div className='p-1 text-gray-400'>1+ Year</div>

              </div>
              <div className='w-40 h-40 m-4 rounded-xl bg-indigo-800 flex flex-col justify-center'>

                <div className='text-sky-500 flex justify-center p-1'>
                  <BsPeopleFill size={30} />
                </div>
                <div className='p-1'>Clients</div>
                <div className='p-1 text-gray-400'>2</div>
              </div>
              <div className='w-40 h-40 m-4 rounded-xl bg-indigo-800 flex flex-col justify-center'>
                <div className='text-sky-500 flex justify-center p-1'>
                  <AiTwotoneFolderOpen size={30} />
                </div>
                <div className='p-1'>Projects</div>
                <div className='p-1 text-gray-400'>8</div>
              </div>
            </div>

            <div className='md:flex md:justify-center'>
              <p className="hidden md:flex md:w-7/12 lg:w-5/12 text-left mt-10 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sapiente vel voluptate fugit corporis tenetur aliquid in eos vero ad ex modi possimus suscipit ratione aliquam harum, ducimus ipsam. Debitis!
              </p>
            </div>

            <div className="hidden md:flex md:justify-center md:h-fit md:-mt-6   ">
              <Link
                href='#portfolio'>
                <a className='rounded bg-transparent border border-sky-500 hover:bg-sky-500 font-light px-2 py-2 mr-2 '>Portfolio</a>
              </Link>
            </div>



          </div>
        </div>

      </div>
    </div>

  )
}

export default About