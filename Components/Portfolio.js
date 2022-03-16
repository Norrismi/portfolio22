import React from 'react'
import Image from 'next/image'
import chuck from '../Assets/Chuck.jpg'
import dtKitchen from '../Assets/dtKitchen.jpg'
import JarvisCreek from '../Assets/JarvisCreek.jpg'
import StHillaireProd from '../Assets/StHillaire_Prod.jpg'
import TallGrassland from '../Assets/TallGrassland.jpg'
import Link from 'next/link'
import data from './Data'


function Portfolio() {
  return (
    <div className="mx-auto text-center mt-20" id='portfolio'>
      <div className="text-3xl text-sky-500 mb-10">Portfolio</div>

      <div className='md:grid md:grid-cols-2 lg:w-10/12  mx-auto'>
        {data.map((project) => (
          <div key={project.id} className="bg-indigo-800  w-fit  rounded-3xl p-5 m-5">
            <Image
              className='rounded-3xl'
              src={project.source}
              alt="Picture of the author"
            />
            <h3 className='text-2xl text-left mt-2'>{project.title}</h3>

            <p className='text-left mt-2'>{project.description}</p>
            <div className='text-left'>


              <button className='border-2 border-sky-500 hover:border-white p-4 mr-4 mt-4 rounded-xl'>
                <Link href={project.link} >
                  <a target="_blank">Hosted Site</a>
                </Link>
              </button>
            </div>
          </div>

        ))}

      </div>
    </div>
  )
}

export default Portfolio