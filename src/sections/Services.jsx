// import React from 'react'
import { useEffect } from 'react'

import service1 from '../assets/service1.webp'
import service2 from '../assets/service2.webp'
import service3 from '../assets/service3.webp'
import service4 from '../assets/service4.png'
import service5 from '../assets/service5.webp'
import service6 from '../assets/service6.webp'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { TbBackground } from 'react-icons/tb'
import {FaPlay} from 'react-icons/fa'


function Services() {

     useEffect(() => {
            AOS.init({
                duration:800,
                delay:200,
                once:false,
        })
        },[]);
  return (
    <div id='services' className='w-full bg-gray-200 lg:px-24 px-5 lg:py-24 py-28
    flex flex-col justify-between lg:items-center items-start gap-5'>
      <h1 data-aos='zoom-in' data-aos-delay='100' className='lg:text-6xl text-4xl
      font-fakwang font-semibold'> Discover your next dream destination </h1>
      <p data-aos='zoom-in' data-aos-delay='200' className= ' text-gray-500 lg:w-[60%] w-full flex lg:text-center text-left'>
        Unforgettable trips. Perfectly planned. Just for you .Adventure awaits – your perfect trip starts here!
      </p>
      <hr data-aos='zoom-in' data-aos-delay='300' className='lg:w-[7%] w-[20%]
      border-2 border-orange-600' />
      {/* services ggrids here */}
      {/* first row start here */}
      <div data-aos='zoom-in' data-aos-delay='400' id='first-row' className='w-full
      flex lg:flex-row flex-col justify-between items-center gap-5 mt-5'>
        {/* left start here */}
        <div id='left' className='lg:w-[50%] w-full flex lg:flex-row flex-col
        justify-between items-center gap-5'>
          <div style= {{backgroundImage:`url(${service1})`}} className='relative bg-cover
          bg-center w-full h-[350px]  rounded-md p-8 flex justify-center items-end'>
         {/* gradient overlay */}
            <div className=' absolute rounded-md inset-0 bg-gradient-to-t
             from-black/60 via-black/40 to-white/10'></div>
            {/* gradiend ends */}
            <div className=' relative z-10 w-full flex lg:flex-row flex-col
            justify-between items-start lg:gap-1 gap-3'>
              <div  className='lg:w-[80%] w-full'>
                <h1 className='text-orange-500 text-2xl font-semibold'> padar Island</h1>
                <p className='text-white text-lg'> Indonasia</p>
              </div>
             <div className='w-[20%] bg-white rounded-full flex justify-center items-center p-3'>
               <FaPlay className='lg:text-2xl text-xl'/>
             </div>
            </div>
            </div>
            <div style= {{backgroundImage:`url(${service2})`}} className='relative bg-cover
          bg-center w-full h-[350px]  rounded-md p-8 flex justify-center items-end'>
           <div className=' absolute rounded-md inset-0 bg-gradient-to-t
             from-black/60  via-black/10 to-white/10'></div>
            {/* gradiet ends */}
            <div className=' relative z-10 w-full flex lg:flex-row flex-col
            justify-between items-start lg:gap-1 gap-3'>
              <div  className='lg:w-[80%] w-full'>
                <h1 className='text-orange-500 text-2xl font-semibold'>Eiffel Tower </h1>
                <p className='text-white text-lg'> Paris, France</p>
              </div>
             <div className='w-[20%] bg-white rounded-full flex justify-center 
             items-center p-3'>
               <FaPlay className='lg:text-2xl text-xl'/>
             </div>
            </div>
            </div>
             {/* left ends here */}
            </div>
            {/* right starts here */}
            <div id='right' className='lg:w-[50%] w-full'>
              <div style= {{backgroundImage:`url(${service3})`}} className='relative bg-cover
          bg-center w-full h-[350px]  rounded-md p-8 flex justify-center items-end'>
            {/* gradient overlay */}
            <div className=' absolute rounded-md inset-0 bg-gradient-to-t
             from-black/60 via-black/40 to-white/10'></div>
            {/* gradiet ends */}
            <div className=' relative z-10 w-full flex lg:flex-row flex-col
            justify-between items-start lg:gap-1 gap-3'>
              <div  className='lg:w-[80%] w-full'>
                <h1 className='text-orange-500 text-2xl font-semibold'>The Great Wall</h1>
                <p className='text-white text-lg'> china</p>
              </div>
             <div className='lg:w-[10%] w-[20%] bg-white rounded-full flex justify-center items-center p-3'>
               <FaPlay className='lg:text-2xl text-xl'/>
             </div>
             {/* right ends here */}
            </div>
            </div>
            
            </div>
          </div> 

          {/* first row ends here */}

          {/* 2nd row start here */}
<div data-aos='zoom-in' data-aos-delay='400' id='first-row' className='w-full
      flex lg:flex-row-reverse flex-col justify-between items-center gap-5 mt-5'>
        {/* left start here */}
        <div id='left' className='lg:w-[50%] w-full flex lg:flex-row flex-col
        justify-between items-center gap-5'>
          <div style= {{backgroundImage:`url(${service4})`}} className='relative bg-cover
          bg-center w-full h-[350px]  rounded-md p-8 flex justify-center items-end'>
         {/* gradient overlay */}
            <div className=' absolute rounded-md inset-0 bg-gradient-to-t
             from-black/60 via-black/40 to-white/10'></div>
            {/* gradiend ends */}
            <div className=' relative z-10 w-full flex lg:flex-row flex-col
            justify-between items-start lg:gap-1 gap-3'>
              <div  className='lg:w-[80%] w-full'>
                <h1 className='text-orange-500 text-2xl font-semibold'>Elafonissi Beach in Crete</h1>
                <p className='text-white text-lg'>Greece</p>
              </div>
             <div className='w-[20%] bg-white rounded-full flex justify-center items-center p-3'>
               <FaPlay className='lg:text-2xl text-xl'/>
             </div>
            </div>
            </div>
            <div style= {{backgroundImage:`url(${service5})`}} className='relative bg-cover
          bg-center w-full h-[350px]  rounded-md p-8 flex justify-center items-end'>
           <div className=' absolute rounded-md inset-0 bg-gradient-to-t
             from-black/60  via-black/10 to-white/10'></div>
            {/* gradiet ends */}
            <div className=' relative z-10 w-full flex lg:flex-row flex-col
            justify-between items-start lg:gap-1 gap-3'>
              <div  className='lg:w-[80%] w-full'>
                <h1 className='text-orange-500 text-2xl font-semibold'>Nachi Falls & Seiganto-ji Temple</h1>
                <p className='text-white text-lg'>Japan</p>
              </div>
             <div className='w-[20%] bg-white rounded-full flex justify-center 
             items-center p-3'>
               <FaPlay className='lg:text-2xl text-xl'/>
             </div>
            </div>
            </div>
             {/* left ends here */}
            </div>
            {/* right starts here */}
            <div id='right' className='lg:w-[50%] w-full'>
              <div style= {{backgroundImage:`url(${service6})`}} className='relative bg-cover
          bg-center w-full h-[350px]  rounded-md p-8 flex justify-center items-end'>
            {/* gradient overlay */}
            <div className=' absolute rounded-md inset-0 bg-gradient-to-t
             from-black/60 via-black/40 to-white/10'></div>
            {/* gradiet ends */}
            <div className=' relative z-10 w-full flex lg:flex-row flex-col
            justify-between items-start lg:gap-1 gap-3'>
              <div  className='lg:w-[80%] w-full'>
                <h1 className='text-orange-500 text-2xl font-semibold'>Merlion Park,Singapore</h1>
                <p className='text-white text-lg'>Singapore</p>
              </div>
             <div className='lg:w-[10%] w-[20%] bg-white rounded-full flex justify-center items-center p-3'>
               <FaPlay className='lg:text-2xl text-xl'/>
             </div>
             {/* right ends here */}
            </div>
            </div>
            </div>
          </div> 
          {/* 2nd row ends here */}
        </div>
 

  )
}

export default Services

