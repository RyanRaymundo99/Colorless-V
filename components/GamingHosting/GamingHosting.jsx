import  server from '../../assets/server.svg';
import gaming from '../../assets/gaming.svg';

import {AiOutlineCloudServer} from 'react-icons/ai';
import {GiConsoleController} from 'react-icons/gi'


function GamingHosting() {
  return (
    <div className="gaming-hosting">
        <section className="text-gray-400 body-font">
                <h1 className="sm:text-3xl text-2xl font-medium py-2 text-center title-font text-white">To fast and robust Gaming hosting</h1>
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 mb-5 lg:mb-0 h-1/2 overflow-hidden">
                    <img alt="feature" className=" object-center h-full w-full" src={server.src}/>
                </div>
                <div className="mt-20 flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                    <div className="flex flex-col mb-10 lg:items-start items-center">
                    <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-gray-300 text-indigo-400 mb-5">
                    <AiOutlineCloudServer className='react-icons-web-hosting'/>
                    </div>
                    <div className="flex-grow">
                        <h2 className="text-white text-lg title-font font-medium mb-3">Light speed</h2>
                        <p className="leading-relaxed text-gray-200 text-base">Our VPS uses premium hardware to create fast and lag-free servers, with terabytes of SSD storage and industry-standard Intel Xeon Processors.</p>
                        <a className="mt-3 text-gray-100 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                    </div>
                    </div>
                </div>
                </div>

                <div className="container px-5 py-20  mx-auto flex flex-wrap">
                <div className="lg:w-1/2 mb-5 lg:mb-0 h-1/2 overflow-hidden">
                    <img alt="feature" className=" object-center h-full w-full" src={gaming.src}/>
                </div>
                <div className="mt-20 flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                    <div className="flex flex-col mb-10 lg:items-start items-center">
                    <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-gray-300 text-indigo-400 mb-5">
                    <GiConsoleController className='react-icons-web-hosting'/>
                    </div>
                    <div className="flex-grow">
                        <h2 className="text-white text-lg title-font font-medium mb-3">Minecraft server</h2>
                        <p className="leading-relaxed text-gray-200 text-base">Fully Customizable Minecraft Server Hosting</p>
                        <a className="mt-3 text-gray-100 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default GamingHosting