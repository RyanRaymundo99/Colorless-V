import { useState } from 'react';

import { motion } from 'framer-motion'

import { CgLogOff, CgMenuRight } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';

import logo from '../../assets/logo.svg'

const Menu = () => (
  <>
  <p><a href='/'>Home</a></p>
  <p><a href='#Hosting'>Hosting</a></p>
  <p><a href='#Pricing'>Pricing</a></p>
  <p><a href='#Domain'>Domain</a></p>

  </>
)

const pathVariants = {
  hidden: {
    pathLength: 0
  },
  visible: {
    pathLength: 1,
    transition: {
      duration:3,
      ease: "easeInOut",
      delay: 0.6
    }
  }
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
      <motion.div className='talk-hub__navbar'
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeInOut', duration: .6, delay: 0.6 }}>

          <div className='talk-hub__navbar-links'>
              <div className='talk-hub__navbar-links_logo'>
                <svg width="60" height="60" viewBox="0 0 23 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M1 1L9 31L20 1H22L14 23" stroke="black"/>
                </svg>
              </div>

              <div className='talk-hub__navbar-links_container'>
                 <Menu />
              </div>
              
          </div>

          <div className='login_button bg-white bg-opacity-20'>
            <p><a href="">Login</a></p>
          </div>
          
          <div className='login_button bg-white bg-opacity-20'>
            <p><a href="">Sign Up</a></p>
          </div>

          <div className='talk-hub__navbar-menu'>
              {toggleMenu
                  ?<IoMdClose color="Black" size="27" onClick={() => setToggleMenu(false)}/>
                  :<CgMenuRight color="Black" size="27" onClick={() => setToggleMenu(true)}/>
              }
              {toggleMenu && (
                  <div className='talk-hub__navbar-menu_container scale-up-center'>
                      <div className='talk-hub__navbar-menu_container-links'>
                          <Menu />
                      </div>
                  </div>
              )}
          </div>     

      </motion.div>
  )
}

export default Navbar