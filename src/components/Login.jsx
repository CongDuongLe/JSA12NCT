import React, {useState, useEffect, useContext} from 'react'
import { getAuth, signInWithEmailAndPassword  } from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';
import { useNavigate } from "react-router-dom";
import { GoogleButton } from 'react-google-button';
import { UserAuth} from '../context/AuthContext'

function Login() {
    const navigation = useNavigate();
    // initial state for email, password
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // initial firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const {googleSignIn, SignOut, user} = UserAuth()
    // handle login
    const handleLogin = () => {
        signInWithEmailAndPassword(auth,email, password)
        .then(() => {
            console.log('login success')
            navigation('/home')
            // check response and go to Home page
        })
        .catch(err => {
            console.log(err)
        })
    }
    // handle Google signIn
    const handleGoogleSignIn =  async () => {
      try {
        await googleSignIn()

      } catch (err) {
        console.log(err)
      }
    };
    useEffect(() => {
        if(user){
            navigation('/home')
        }
    }, [user])


  return (
    <div name='login' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 top-[90px]'>
      {/* Login section */}
        <div className='flex flex-col w-1/3 h-1/2 rounded-md'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Login</p>
            <p className='text-gray-300 py-4'>Please enter your email and password</p>
            <input type='email' className='bg-[#ccd6f6] p-2 rounded-md' placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' className='my-4 p-2 bg-[#ccd6f6] rounded-md' placeholder='Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-8 py-2 mt-8 mx-auto flex items-center rounded-lg'
            onClick={handleLogin}>Login</button>
            <p className='text-gray-300 py-4 text-center'>or Sign In with Google</p>
            <GoogleButton 
                className='text-white border-2 mx-auto flex items-center rounded-xl'
            onClick={() => {
                handleGoogleSignIn()
                console.log('google login')
            }} />
        </div>
        {/* Google button */}
        

</div>
  )
}

export default Login