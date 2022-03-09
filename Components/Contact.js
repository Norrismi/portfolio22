import { RiLinkedinLine } from 'react-icons/ri'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'

function Contact() {
  return (
    <div className='lg:mb-10 lg:mt-10'>
      <div className='text-sm text-gray-400 text-center'>Get In Touch</div>
      <div className='text-3xl text-sky-500 text-center'>Contact Me</div>



      <div className="grid grid-cols-2 lg:mt-10">
        <div className='grid grid-rows-2 text-center justify-end lg:w-10/12'>

          <div className='flex flex-row justify-end'>
            <button className=' w-28 h-28 mb-5 rounded-xl bg-indigo-800 flex flex-col justify-center'>

              <div className='mx-auto'>
                <div className='text-sky-500 flex justify-center p-1'><AiOutlineMail size={30} /></div>
                <div className='mt-2'>Email</div>
                <div className=' text-gray-400 text-sm'>Michael</div>
              </div>

            </button>
          </div>

          <div className='flex flex-row'>
            <button className=' w-28 h-28 rounded-xl bg-indigo-800 flex flex-col justify-center'>

              <div className='mx-auto'>
     
                <div className='text-sky-500 flex justify-center p-1'><RiLinkedinLine size={30} /></div>
                <div className='mt-2 justify-center'>LinkedIn</div>
                <div className=' text-gray-400 text-sm'>Michael</div>
              </div>

            </button>
            <div className='w-28 h-28'></div>
          </div>
        </div>


        <div className="flex flex-col">
          <form action="" className='flex flex-col lg:w-8/12 '>

            <input type="text" id="fname" placeholder="Your Full Name" className="mb-5 border-2 border-sky-500 rounded-lg bg-black text-gray-400 p-2 fname" />
            <input type="text" id="lname" placeholder="Your Email" className="mb-5 border-2 border-sky-500 rounded-lg bg-black text-gray-400 p-2 lname" />


            <textarea id="w3review" name="w3review" placeholder="Your Message" rows="4" cols="50" className="mb-5 border-2 border-sky-500 rounded-lg bg-black p-2 lname text-gray-400">

            </textarea>
          </form>

        </div>


      </div>
    </div>
  )
}

export default Contact