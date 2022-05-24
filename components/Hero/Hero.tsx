import { motion } from 'framer-motion';

import internet from '../../assets/internet.svg'


const svgVariants = {
  hidden: {
    rotate: -360,
    originZ: 0,
    transformBox: "fill-box"
  },
  visible: {
    rotate: 0,
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut"
    }
  }
}

const Hero = () => {
  return (
    
    <div className="hero">
      <section className="text-gray-600 body-font hero-text-container">
        <div className="container mx-auto flex py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-7xl text-5xl mb-10 font-xl text-black">Fast and Secure
              <br className="hidden lg:inline-block"/>Web hosting
            </h1>
            <p className="mb-8 text-gray-200 leading-relaxed">We prepared the best web hosting plan for you to start. You will be able to adjust plans as you go - our custom-built algorithm will provide suggestions based on your usage.</p>
            <div className="flex justify-center">
              <button className="login-button inline-flex text-white bg-opacity-20 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 hover:bg-opacity-20 rounded-lg text-lg">Get started</button>
            </div>
          </div>
          <div className="hero-img-container">
            <img src={internet.src} alt="" />  
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero