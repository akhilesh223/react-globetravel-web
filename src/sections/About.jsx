import React,{useEffect} from 'react'
import aboutimg1 from '../assets/about1.webp'
import aboutimg2 from '../assets/about2.webp'
import{ FaGlobeAmericas} from 'react-icons/fa'
import{ IoIosPricetag } from 'react-icons/io'
import AOS from 'aos';
import 'aos/dist/aos.css'

function About() {
    useEffect(() => {
          AOS.init({
              duration:800,
              delay:200,
              once:false,
      })
      },[]);
  return (
    <div id='about' className='flex lg:flex-row flex-col justify-between
    items-center gap-16 lg:py-24 px-5 lg:px-24'>

      <div className='flex flex-col justify-center items-start'>

        <img  data-aos="zoom-in" data-aos-delay="100" src={aboutimg1}
        className ='rounded-md'alt='' />

        <img  data-aos="zoom-in" data-aos-delay="200" src={aboutimg2}
        className ='rounded-md w-[40%] border-8 border-white mt-[150px]-ml-[30px]-rotate-2'alt='' />
         </div>
      <div className='flex flex-col gap-5'>
        <h1 data-aos="zoom-in" data-aos-delay="300" className='text-md  bg-gray-600'> About us</h1>
        <h1 data-aos="zoom-in" data-aos-delay="400" className='lg:text-5xl text-3xl
        font-fakhwang font-semibold text-black'> Embark on a hilarious journey with our travel experts </h1>

     <p data-aos="zoom-in" data-aos-delay="500" className='text-gray-700 font-semibold'>
At Akhil Technologies, we craft unforgettable travel experiences for every adventurer. From stunning destinations to seamless bookings, our team ensures every trip is stress-free, exciting, and tailored to your needs. !</p>

      <p data-aos="zoom-in" data-aos-delay="500" className='text-gray-500'>We believe travel should be simple, enjoyable, and full of memories. Whether you’re planning a solo getaway, a family vacation, or an adventurous tour, we provide guidance, support, and expertise at every step.</p>
      
      <hr className=' w-full border-t border-gray-300' />

      <div data-aos=" zoom-in" data-aos-delay="600" id='iconbox' className='w-full
      grid lg:grid-cols-2 grid-cols-1 justify-between items-center lg:gap-5 gap-10' >
        <div id='left' className='flex lg:flex-row flex-col justify-between
        lg:items-center items-end gap-4'>
          <div id='icon' className='w-[20%] flex justify-center items-center
          bg-orange-600 hover:bg-black cursor-pointer p-4 rounded-md'>
            <FaGlobeAmericas className='text-3xl text-white'/>
          </div>
          <div className='w-[80%] flex flex-col justify-center items-start gap-1'>
            <h1 className='text-black text-xl font-medium'> Best Destination</h1>
            <p className='text-sm text-gray-500'>Explore top travel spots around the world, carefully selected by our experts to provide the perfect mix of adventure, relaxation, and culture.</p>
          </div>
        </div>
        <div id='right' className='flex lg:flex-row flex-col justify-between
        lg:items-center items-end gap-4'>
          <div id='icon' className='w-[20%] flex justify-center items-center
          bg-orange-600 hover:bg-black cursor-pointer p-4 rounded-md'>
            <IoIosPricetag className='text-3xl text-white'/>
          </div>
             <div className='w-[80%] flex flex-col justify-center items-start gap-1'>
            <h1 className='text-black text-xl font-medium'>Affordable Price</h1>
            <p className='text-sm text-gray-500'>Enjoy premium travel experiences without breaking the bank. We offer competitive rates and flexible packages to suit every budget</p>
            </div>
        </div>
      </div>
      
      </div>
    </div>
  )
}

export default About

