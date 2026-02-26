import React, { useEffect } from 'react'
import heroimg from '../assets/hero.webp'
import AOS from 'aos';
import 'aos/dist/aos.css'

function Hero() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    })
  }, []);

  return (
    <div
      id='hero'
      className='relative w-full min-h-screen bg-cover bg-center flex items-center justify-center'
      style={{ backgroundImage: `url(${heroimg})` }}
    >

      <div className="absolute inset-0 bg-black/40"></div>

      <div className='relative z-10 flex flex-col justify-center items-center gap-6 text-white px-6 text-center'>
        
        <h1 data-aos="zoom-in" data-aos-delay="100"
          className='lg:text-7xl text-4xl capitalize font-fakhwang font-bold'>
          Explore every beautiful <br /> Destination
        </h1>

        <button
          data-aos="zoom-in"
          data-aos-delay="300"
          className='bg-orange-600 hover:bg-black hover:text-white px-8 py-3 font-semibold capitalize rounded mt-5 cursor-pointer'>
          Book Now
        </button>

      </div>
    </div>
  )
}

export default Hero
