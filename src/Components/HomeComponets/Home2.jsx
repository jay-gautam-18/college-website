import React from 'react'
import Home3 from './Home3'

const Home2 = () => {
  return (
    <>
    <div className=" py-8 px-4 ">
        <div className="max-w-screen-xl mx-auto flex md:flex-row flex-col items-center  gap-8">
            {/* Left Label */}
            <div className="flex items-center md:border-none border-b-1 justify-center border-black gap-4 min-w-fit">
            <span className="text-2xl mr-4 tracking-[1px] font-[350] mb-5">OUR CLIENTS</span>
            <div className="w-px md:block hidden h-18 bg-black" />
            </div>
            {/* Logos */}
            <div className="flex flex-wrap justify-center gap-8 flex-1">
            {/* Repeat this block for each client logo */}
            <img src="/logos/superfood.png" alt="Super Food" className="h-18 object-contain" />
            <img src="/logos/creative-studio.png" alt="Creative Studio" className="h-18 object-contain" />
            <img src="/logos/in-motion.png" alt="In Motion" className="h-18 object-contain" />
            <img src="/logos/abstract.png" alt="Abstract" className="h-18 object-contain" />
            <img src="/logos/vision-studio.png" alt="Vision Studio" className="h-18 object-contain" />
            <img src="/logos/invision-square.png" alt="Invision Square" className="h-18 object-contain" />
            </div>
        </div>
    </div>
    <hr />
     <div className=" bg-[#fdfbf6] py-10 px-2">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-10">
        
        {/* Left Heading */}
        <div className="min-w-[150px]">
        <p className="text-2xl tracking-[2px] font-[350]">WHAT WE DO</p>
        </div>

        {/* Vertical Divider */}
        <div className="w-px bg-black hidden md:block" />

        {/* Right Grid of Services */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
        
        {/* Branding */}
        <div className="flex items-start gap-4 pr-4 md:border-r md:border-black">
            <img src="/icons/branding.svg" alt="Branding Icon" className="h-6 w-6" />
            <div>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl">BRANDING</h3>
            <p className="text-lg tracking-wide">We craft compelling brand identities that leave a lasting impression.</p>
            </div>
        </div>

        {/* Design */}
        <div className="flex items-start gap-4">
            <img src="/icons/design.svg" alt="Design Icon" className="h-6 w-6" />
            <div>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl">DESIGN</h3>
            <p className="text-lg tracking-wide">Innovative and aesthetic designs that bring your ideas to life.</p>
            </div>
        </div>

        {/* Video */}
        <div className="flex items-start gap-4 pr-4 md:border-r md:border-black">
            <img src="/icons/video.svg" alt="Video Icon" className="h-6 w-6" />
            <div>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl">VIDEO</h3>
            <p className="text-lg tracking-wide">Captivating visual storytelling that engages and resonates with your audience.</p>
            </div>
        </div>

        {/* Content */}
        <div className="flex items-start gap-4">
            <img src="/icons/content.svg" alt="Content Icon" className="h-6 w-6" />
            <div>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl">CONTENT</h3>
            <p className="text-lg tracking-wide">Engaging and persuasive content that captures attention and sparks meaningful connections.</p>
            </div>
        </div>

        </div>
    </div>
    </div>
    <hr />
    <Home3/>
    </>
  )
}

export default Home2