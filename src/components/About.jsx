import React,{useRef, useEffect} from 'react'
import { useSpring, animated } from 'react-spring'

function About() {
    // get event when scroll to About section and useSpring to animate
    const aboutRef = useRef(null)
    const aboutSpring = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        delay: 200,
        config: { duration: 800 }
    })
    // scroll event listener
    const handleScroll = () => {
        const aboutSection = aboutRef.current.getBoundingClientRect().top
        const screenHeight = window.innerHeight
        if (aboutSection < screenHeight) {
            
        } else {
           
        }
    }
    // useEffect to add event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
   


    const props = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, -40px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        delay: 0,
        config: { duration: 1000 }
    })

    const n = useRef(0)
    const styles = useSpring({
      from: { x: -200, opacity: 0.8 },
      to: { x: 0, opacity: 1 },
      // duration
        config: { duration: 600 },

      
    })

    const styles2 = useSpring({
        from: { x: 200, opacity: 0.8 },
        to: { x:0, opacity: 1 },
        config: { duration: 800 },
        
        })




  return (
    <div name='about' className="w-full h-screen bg-[#0a192f]" 
        onScroll={handleScroll}
    >
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1024px] w-full grid grid-cols-2 gap-8">
                  <div className='text-center md:text-right pb-8 pl-4 text-[#ccd6f6]'>
                      <p className='text-3xl md:text-4xl font-bold inline border-b-4 border-pink-600'>
                          About
                      </p>
                  </div>
                  {/* spacing div */}
                  <div></div>
                  </div>
                  {/* Content about */}
                    <div className=' w-full grid grid-cols-2 max-w-[1024px] px-4 mx-auto md:space-x-5'>
                        <animated.div style={{
                            ...aboutSpring
                        }} 
                            ref={aboutRef} 
                                   

                        className='text-right  font-Quicksand px-3'>
                            <p className=' text-[16px] md:text-xl text-[#8892b0]'>
                                Hi. I'm Cong Duong Le. I'm a Front-end Web Developer and Mobile Cross-Platform App Developer. Please take a look around
                            </p>
                        </animated.div>
                        <animated.div 
                        style={{
                            ...styles2,
                        }}
                        ref={aboutRef}
                        className='text-left font-Quicksand '>
                        <p className=' text-[16px] md:text-xl text-[#8892b0]'>
                            I'm an intern in UI/UX development on website and mobile with the ability to design and rewrite code for interfaces. I have experience in developing websites and mobile apps using frameworks and libraries that are widely used today such as ReactJS, NextJS, React Native, TailwindCSS,...
                        </p>
                        </animated.div>
                    </div> 
        </div>
    </div>
  )
}

export default About