import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged,isSignInWithEmailLink, signInWithEmailLink   } from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';

const Home = () => {
    const navigation = useNavigate();
    // state check if have user and show data or show login dialog
    const [user, setUser] = useState(null)
    // initial firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    // handle logout
    const handleLogout = () => {
        signOut(auth)
        .then(() => {
            console.log('logout success')
            navigation('/login')
            // check response and go to Home page
        })
        .catch(err => {
            console.log(err)
        })
    }
  return (
    <div name="home"   className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 md:text-2xl text-xl'>Hi, my name is</p>
        <h1 className='text-5xl md:text-6xl font-bold text-[#ccd6f6] mt-4 tracking-wide'>
         Cong Duong Le
        </h1>
        <h2 className='text-2xl sm:text-5xl font-bold text-[#8892b0] mt-5 leading-10 tracking-wide'>
          I'm a Front-end Web Developer and Mobile Cross-Platform Developer
        </h2>
        <p className='text-[#8892b0] py-6 max-w-[700px]'>
       Building websites and mobile apps with the ability to design and rewrite code for interfaces. I have experience in developing websites and mobile apps using frameworks and libraries that are widely used today such as ReactJS, NextJS, React Native, TailwindCSS,...
        </p>
        {/* Buton */}
        <div className='py-2'>
          <button className='text-white group border-2 md:px-6 md:py-3 px-4 py-2 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 transition-none duration-400 '>
            Look Around
          </button>
        </div>
        {/* end button */}
      </div>
    </div>
  );
}

export default Home;