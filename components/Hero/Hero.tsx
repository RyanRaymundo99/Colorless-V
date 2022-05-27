import { motion } from 'framer-motion';

import Web from '../Animated/Web'

import internet from '../../assets/internet.svg'


const Opacity = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    duration: 1
  }
}

const Hero = () => {
  return (
    
    <div className="hero">
      <section className="text-gray-600 body-font hero-text-container">
        <div className="container mx-auto flex py-20 md:flex-row flex-col items-center">
          <motion.div className=" overflow-hidden lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          variants={Opacity} initial='hidden' animate='visible'
          >
            <motion.h1 className=" title-font sm:text-7xl text-5xl mb-2 font-xl text-black"
              initial={{ x: -600 }}
              animate={{ x: 0,
                transition: {
                  ease: [0.6, 0.01, -0.05, 0.95],
                  duration: 1,
                  delay: 0.4,
                  staggerChildren: 0.08
                }
              }}
            
            >
              Fast and Secure
            </motion.h1>  
              <motion.h1 className="title-font sm:text-7xl text-5xl mb-10 font-xl text-black"
                  initial={{ x: -500 }}
                  animate={{ x: 0,
                    transition: {
                      ease: [0.6, 0.01, -0.05, 0.95],
                      duration: 1,
                      delay: 0.8,
                      staggerChildren: 0.08
                    }
                  }}
              >Web hosting
              </motion.h1>
            
            <p className="mb-8 text-gray-200 leading-relaxed">We prepared the best web hosting plan for you to start. You will be able to adjust plans as you go - our custom-built algorithm will provide suggestions based on your usage.</p>
            <div className="flex justify-center">
              <button className="login-button inline-flex text-white bg-opacity-20 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 hover:bg-opacity-20 rounded-lg text-lg">Get started</button>
            </div>
          </motion.div>
          <div className="hero-img-container">
            <Web/> 
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero