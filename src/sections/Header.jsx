import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { IoCloseSharp } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa'

function Header() {
  const[menuOpen,setMenuOpen] = useState(false);
  const[scrolled,setScrolled] = useState(false);

  const menuLinks = [
    { name:"Home", to: "home"},
     { name:"About", to: "about"},
      { name:"Services", to: "services"},
       { name:"Packages", to: "packages"},
        { name:"Contact", to: "contact"}
  ];

  //disable scroll effect when is open
  useEffect(()=>{
    if(menuOpen) return;

    // Window Refactor|Explain| generateJSDoc|
    const handleScroll = () =>{
      setScrolled(window.scrollY> 50);
    };
    window.addEventListener('scroll',handleScroll);
    return() => window.removeEventListener('scroll',handleScroll);

  } ,[menuOpen]);

  // lock body scroll propperly (mobile safe)

  useEffect(() => {
    if(menuOpen){
      document.body.style.overflow = 'hidden';
      document.body.style.height ='100vh'
    }else{
       document.body.style.overflow = '';
      document.body.style.height ='';
    }
    return() => {
      document.body.style.overflow = '';
      document.body.style.height ='';
    };
  },[menuOpen]);
  return (
<>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full py-4 lg:px-[100px] px-7 transition-all duration-300 z-50
        ${menuOpen
          ? 'bg-black'
          : scrolled
            ? 'bg-black/70 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
       <div className=' flex justify-between items-center'>
        {/* logo */}
        <div className=' text-orange-600 font-bold lg:text-4xl text-3xl'>
          GLOBETRAVEL <samp className='text-white'>.</samp>
        </div>
        {/* mobile toggle */}
        <button className='text-white text-2xl md:hidden z-[60]' 
        onClick ={() => setMenuOpen(true)}><FaBars/></button>

        {/* desktop menu */}
        <nav className=' hidden md:block'>
          <ul className='flex space-x-10 text-lg text-white font-poppins'>
            {menuLinks.map((itme) => (
              <li key ={itme.to}>
                <Link to={itme.to} smooth duration={500} className='cursor-pointer
                hover:text-orange-600 transition'>
                  {itme.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
       </div>
      </header>

      {/* mobile fullscreen menu (vertical menu slide  */}
      <div className={`fixed inset-0 bg-black text-white z-[55] transform transition-transform duration-300 ease-out will-change-transform ${menuOpen ? 'translate-y-0' : '-translate-x-full'} flex items-center justify-center overscroll-none`}>
      
      {/* close buttom */}
      <IoCloseSharp className='absolute top-5 right-6 text-3xl cursor-pointer'
      onClick={() => setMenuOpen(false)}/>

      {/* menu items */}
      <ul className='flex flex-col space-y-8 text-2xl text-center font-poppins'>
        {menuLinks.map((item) => (
          <li key={item.to}><Link to={item.to} smooth duration={500} onClick={()=> 
            setMenuOpen(false)} className='cursor-pointer hover:text-red-500
            transition'>{item.name}</Link>
          </li>
        ))}
      </ul>
      </div>
    </>
  )
}
export default Header


