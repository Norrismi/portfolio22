import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'

function Experience() {

  let arr = ['JavaScript', 'React.js', 'Next.js', 'Redux', 'Node', 'Express', 'Firebase', 'MongoDB', 'RESTfull APIs', 'GIT', 'Unit Testing', 'Mocha/Jest', 'HTML5', 'CSS3/SASS', 'Tailwind CSS', 'Bootstrap'];

  return (
    <div className='text-center mt-20 md:-mt-20' id='experience'>
      <div className='text-sm text-gray-400'>Skills</div>
      <div className='text-3xl text-sky-500'>My Experience</div>


      <div className="w-fit h-fit p-5 bg-indigo-800 hover:bg-opacity-50	 mx-auto mt-10 rounded-xl">
        <div className="grid grid-cols-2  md:grid md:grid-cols-4">

      
          {arr.map((skill) => (

            <div key={skill} className='flex p-4 md:p-6'>
              <BsFillPatchCheckFill className='h-auto align-middle text-sky-500' />
              <div className="ml-2">{skill}</div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Experience