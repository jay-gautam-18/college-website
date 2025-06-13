import React from 'react'
import Home3 from './Home3'
import { FaAws } from "react-icons/fa";
import { SiCisco, SiGodaddy, SiVmware } from 'react-icons/si';
import Ourservices from '../Ourservices';
const Home2 = () => {

  return (
    <>
    <div className=" py-8 px-4 ">
        <div className="max-w-screen-xl mx-auto flex md:flex-row flex-col items-center  gap-8">
            {/* Left Label */}
            <div className="flex items-center md:border-none border-b-1 justify-center border-black gap-4 min-w-fit">
            <span className="text-2xl mr-4 tracking-[1px] font-[350] mb-5">OUR Tie-Ups</span>
            <div className="w-px md:block hidden h-18 bg-black" />
            </div>
            {/* Logos */}
            <div className="flex flex-wrap justify-center gap-8 flex-1">
            {/* Repeat this block for each client logo */}
            <FaAws className='text-7xl mx-5' />
            <SiCisco className='text-7xl mx-5' />
            <SiVmware className='text-7xl mx-5' />
            <SiGodaddy className='text-7xl mx-5' />
            <img src="/logos/abstract.png" alt="Abstract" className="h-18 object-contain" />
            <img src="/logos/vision-studio.png" alt="Vision Studio" className="h-18 object-contain" />
            <img src="/logos/invision-square.png" alt="Invision Square" className="h-18 object-contain" />
            </div>
        </div>
    </div>
    <hr />
    <Ourservices/>
     <div className=" bg-[#fdfbf6] py-10 px-2">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-10">
        
        {/* Left Heading */}
        <div className="min-w-[150px]">
        <p className="text-2xl tracking-[2px] font-[350]">WHAT WE OFFER</p>
        </div>

        {/* Vertical Divider */}
        <div className="w-px bg-black hidden md:block" />

        {/* Right Grid of Services */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
        
        <div className="flex items-start gap-4 pr-4 md:border-r md:border-black">
            <div>
            <h1 className='crore text-6xl'>1.12cr.</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-2xl">Highest Package</h3>
            </div>
        </div>

        <div className="flex items-start gap-4 pr-4 md:border-r md:border-black">
            <div>
            <h1 className='crore text-6xl'>1600+</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl">Offers For 2024 Batch</h3>
            </div>
        </div>

        <div className="flex items-start gap-4 pr-4 ">
             <div>
            <h1 className='crore text-6xl'>9877+</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl">Offers For 2024 Batch</h3>
            </div>
        </div>

        <div className="flex items-start gap-4 pr-4 md:border-r md:border-black">
             <div>
            <h1 className='crore text-6xl'>208+</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl">Offers 10 Lakhs & Above</h3>
            </div>
        </div>
        <div className="flex items-start gap-4 pr-4 md:border-r md:border-black">
             <div>
            <h1 className='crore text-6xl'>171</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl">NIRF All India Rank</h3>
            </div>
        </div>
        <div className="flex items-start gap-4 pr-4 ">
             <div>
            <h1 className='crore text-6xl'>500+</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl">Top Recruiters</h3>
            </div>
        </div>
        <div className="flex items-start gap-4 pr-4 md:border-r md:border-black">
             <div>
            <h1 className='crore text-6xl'>191+</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl ">Patent Publications</h3>
            </div>
        </div>
        <div className="flex items-start gap-4 ">
             <div>
            <h1 className='crore text-6xl'>211+</h1>
            <h3 className="font-[350] mb-3 tracking-wide text-3xl">Ph.D Faculties</h3>
            </div>
        </div>
        </div>
    </div>
    </div>
    <hr />
    </>
  )
}

export default Home2