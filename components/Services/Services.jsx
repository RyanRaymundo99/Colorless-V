import { BsShieldLockFill } from 'react-icons/bs'
import { FaServer, FaShoppingCart, FaKeyboard, FaWordpress } from 'react-icons/fa'
import { IoMdChatboxes } from 'react-icons/io'


function Services() {
  return (
    <div className="services">
        <section class="text-gray-400 body-font">
            <div class="container px-5 py-10 mx-auto">
                <div class="text-center mb-20">
                <p class="text-base text-gray-200 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-10">The best way to pick a web hosting provider is to try the services. All our plans come with a 30-day money back guarantee. If you do not like what you get - we will refund your purchase. No questions asked.</p>
                <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-white">Our services include:</h1>
                </div>
                <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div class="p-2 sm:w-1/2 w-full">
                    <div class="bg-gray-300 rounded flex p-4 h-full items-center">
                     <BsShieldLockFill className='react-icons' />   
                    <span class="title-font font-medium text-black">Free SSL</span>
                    </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                    <div class="bg-gray-300 rounded flex p-4 h-full items-center">
                    <FaServer className='react-icons' /> 
                    <span class="title-font font-medium text-black">Backups</span>
                    </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                    <div class="bg-gray-300 rounded flex p-4 h-full items-center">
                    <FaShoppingCart className='react-icons' /> 
                    <span class="title-font font-medium text-black">eCommerce Optimization</span>
                    </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                    <div class="bg-gray-300 rounded flex p-4 h-full items-center">
                    <FaKeyboard className='react-icons' /> 
                    <span class="title-font font-medium text-black">Access Management</span>
                    </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                    <div class="bg-gray-300 rounded flex p-4 h-full items-center">
                    <IoMdChatboxes className='react-icons' /> 
                    <span class="title-font font-medium text-black">24/7/365 Tech Support</span>
                    </div>
                </div>
                <div class="p-2 sm:w-1/2 w-full">
                    <div class="bg-gray-300 rounded flex p-4 h-full items-center">
                    <FaWordpress className='react-icons' /> 
                    <span class="title-font font-medium text-black">LiteSpeed WordPress Module</span>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services