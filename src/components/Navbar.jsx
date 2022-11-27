import React,{useState} from 'react'
import Logo from "../assets/logo.png"
import {FaBars, FaGithub, FaFacebook,} from 'react-icons/fa'
import {AiOutlineClose,AiFillInstagram} from 'react-icons/ai'
import {SiZalo} from 'react-icons/si'

// react router dom import element
import {Link } from 'react-router-dom'
import { UserAuth} from '../context/AuthContext'
import { useNavigate } from "react-router-dom";


function Navbar() {
    const navigation = useNavigate();
    const [open,setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    // login state change
   
   
    // handle SignOut 
    const { user, SignOut } = UserAuth()
    const handleSignOut = async () => {
        try {
            await SignOut()
            navigation('/')
        } catch (err) {
            console.log(err)
        }
    }
    
    const backToHome = () => {
        navigation('/')
    }



  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]">
       <div onClick={backToHome}>
        <img src={Logo} alt="logo" className ='w-[45px] ' />
       </div>
       {/* Menu items */}
       <div className="text-white hidden md:flex justify-center items-center">
           <ul className="flex flex-row space-x-4 justify-center items-center">
               <li className ='li-section'>
                   {/* react router */}
                   <Link to='home' smooth={true} duration={500} > Home </Link>
                </li>
               <li className ='li-section'>   
                     <Link to='about' smooth={true} duration={500} > About </Link>
               </li>
               <li className ='li-section'>   
                     <Link to='product' smooth={true} duration={500} > Product </Link>
               </li>
               <li className ='li-section'>   
                     <Link to='skill' smooth={true} duration={500} > Skill </Link>
               </li>
                 {/* <li className ='li-section'>   
                     <Link to='academic' smooth={true} duration={500} > Academic </Link>
               </li> */}
               <li className ='li-section'>   
                     <Link to='contact' smooth={true} duration={500} > Contact </Link>
               </li>
               {/* check user, if login is hidden button */}
                {user ?
               ( <li className ='li-section'>
                    <button 
                        onClick={handleSignOut} 
                        className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-xl'>Sign Out</button>
                    {/* <Link to='login' smooth={true} duration={500} onClick={() => {
                        handleSignOut()
                        
                    }}> Sign Out </Link> */}
                </li>)
                : null}     
           </ul>
       </div>
       {/* hamburger menu */}
       <div className="md:hidden" onClick ={handleOpen} >
            {
                open ? <AiOutlineClose className="text-white" size={24}/> : <FaBars className="text-white" size={24} />
            }
             
       </div>
        {/* Mobile dropdown */}
            { 
                open ?  <ul className='absolute top-[80px] left-0 md:hidden flex flex-col text-white items-center w-full h-screen bg-[#0a192f]'>
                <li className='li-sm mt-10 '>
                    <Link to='home' smooth={true} duration={500} onClick={handleOpen}> Home </Link>
                </li>
                <li className='li-sm' >
                    <Link to='about' smooth={true} duration={500} onClick={handleOpen}> About </Link>
                </li>
                <li className='li-sm' >
                    <Link to='product' smooth={true} duration={500} onClick={handleOpen}> Product </Link>
                </li>
                <li className='li-sm' >
                    <Link to='skill' smooth={true} duration={500} onClick={handleOpen}> Skill </Link>
                </li>
                <li className='li-sm' >
                    <Link to='contact' smooth={true} duration={500} onClick={handleOpen}> Contact </Link>
                </li>
                 {/* <button className='button-primary py-4 px-10 mt-8 text-[18px] font-Quicksand font-semibold  '>
                        <Link to='login' smooth={true} duration={500} onClick={handleOpen}> Login </Link>
                 </button> */}
            </ul> : null
            }
         {/* Social media icons */}
          <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
              <ul>
                  <li className='li-social bg-[#006AFF]'>
                      <a
                          className='flex justify-between items-center w-full text-gray-300 px-2 '
                          href='https://www.facebook.com/info.duong.lc' target='_blank'
                            rel='noopener noreferrer'
                      >
                          Facebook <FaFacebook size={30} />
                      </a>
                  </li>
                  <li className='li-social bg-[#333333]'>
                      <a
                          className='flex justify-between items-center w-full text-gray-300 px-2'
                          href='https://github.com/CongDuongLe' target='_blank'
                            rel='noopener noreferrer'
                      >
                          Github <FaGithub size={30} />
                      </a>
                  </li>
                  <li className='li-social bg-[#e1306c]'>
                      <a
                          className='flex justify-between items-center w-full text-gray-300 px-2'
                          href='https://www.instagram.com/00_duong24le03/' target='_blank'
                            rel='noopener noreferrer'
                      >
                          Instagram <AiFillInstagram size={30} />
                      </a>
                  </li>
                  <li className='li-social bg-[#0068FF]'>
                      <a
                          className='flex justify-between items-center w-full text-gray-300 px-2'
                          href='https://zalo.me/0965806207' target='_blank' rel='noopener noreferrer'
                      >
                          Zalo <SiZalo size={30} />
                      </a>
                  </li>
              </ul>
          </div>
    </div>
  )
}

export default Navbar