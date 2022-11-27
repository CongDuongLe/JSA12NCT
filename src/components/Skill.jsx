import React from 'react'
import {FaReact} from 'react-icons/fa'
import {SiNextdotjs,SiTailwindcss} from 'react-icons/si'
import HTML from '../assets/html.png';
import Next from '../assets/next.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Redux from '../assets/redux.png';


function Skill() {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 px-4'>
    {/* Container */}
    <div className='max-w-[1024px] mx-auto p-4 flex flex-col justify-center h-screen w-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
            <p className='py-4 font-Quicksand'>Some technologies I've worked with</p>
        </div>
        {/* Libraries and FrameWork */}
        <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-6 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML 5</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="JS icon" />
                <p className='my-4'>JAVASCRIPT ES 6+</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                <p className='my-4'>REACT JS + NATIVE</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GitHub} alt="Git icon" />
                <p className='my-4'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt="TW icon" />
                <p className='my-4'>TAILWIND CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={FireBase} alt="FireBase icon" />
                <p className='my-4'>FIREBASE</p>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Skill