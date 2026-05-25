// import React from 'react'
import { useEffect } from 'react'
import cta1 from '../assets/cta1.png'
import{FaPlay} from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css'

function CtaOne() {

  useEffect(() => {
            AOS.init({
                duration:800,
                delay:200,
                once:false,
        })
        },[]);
  return (
    <div id='cta1'    
    style={{ backgroundImage: `url(${cta1})` }} 
    className=' relative w-full h-screen
    lg:p-24 p-10 flex flex-col justify-center items-center gap-5 bg-center bg-cover bg-no-repeat'>
     {/* black overlay */}
     <div className='absolute inset-0 bg-black/50'></div>
      {/* CtaOne */}

      {/* content part */}
      <div className='relative z-10 flex flex-col justify-center items-center gap-5'>
        <h1 data-aos ='zoom-in' data-aos-delay='100' className=' lg:text-5xl text-3xl
        font-fakhwan font-semibold text-white lg:w-[60%] w-full text-center capitalize'>Experience breathtaking destinations, unforgettable adventures, and luxurious journeys crafted to inspire your soul.....</h1>
        <p data-aos ='zoom-in' data-aos-delay='200' className='text-white lg:w-[50%] w-full text-lg text-center'>
          Discover hidden wonders, luxury escapes, and adventures that inspire your soul.</p>
           <div className="w-12 h-12 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center">
         <FaPlay className="text-orange-600 text-xl lg:text-3xl" />
</div>

</div>

      </div>
      
      
  )
}

export default CtaOne
