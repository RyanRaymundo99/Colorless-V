import cloud from '../../assets/cloud.svg'

function CloudHosting() {
  return (
    <div className="cloud-hosting pb-5">
        <section class="text-gray-400 body-font">
        <div class="container px-5 pt-12 mx-auto flex flex-wrap">
            <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div class="w-full sm:p-4 px-4 mb-6">
                <h1 class="title-font font-medium text-2xl mb-2 text-white">Need More Power? Try Cloud Hosting</h1>
                <div class="leading-relaxed text-gray-300">For Startup, Professional, and Enterprise Cloud Hosting plan owners we offer data centers located in: USA, United Kingdom, Brazil, Singapore, Lithuania, India, and the Netherlands.</div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 class="title-font font-medium text-3xl text-white">180.7K</h2>
                <p class="leading-relaxed text-gray-300 text-center">Users</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 class="title-font font-medium text-3xl text-white">10k</h2>
                <p class="leading-relaxed text">Companies</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 class="title-font font-medium text-3xl text-white">18</h2>
                <p class="leading-relaxed text">Countries</p>
            </div>
            </div>
            <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img class="object-cover object-center w-full h-full" src={cloud.src} alt="stats"/>
            </div>
        </div>
        <div className="flex justify-center mb-10">
              <button className=" inline-flex ml-10 text-white bg-opacity-20 bg-white border-0 py-3 px-10 focus:outline-none hover:bg-gray-200 hover:bg-opacity-20 rounded-lg text-lg">See All Plans</button>
        </div>
        </section>
    </div>
  )
}

export default CloudHosting