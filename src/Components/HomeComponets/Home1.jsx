import React from 'react'
import Home2 from './Home2'

const Home1 = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row  justify-between px-8 py-16  h-auto w-full gap-10">
        {/* Left content - Text */}
        <div className="md:w-1/2 space-y-6 mt-5">
            <h1 className="text-6xl md:text-8xl tracking-[1px] font-light leading-tighter">
            We are a digital <br /> agency from <br /> Lisbon.
            </h1>
            <p className="text-3xl  text-gray-700">
            Elevating brands through creative digital <br />
            solutions, proudly representing Lisbon's <br />
            vibrant innovation.
            </p>
        </div>

        {/* Right content - Image */}
        <div className="md:w-1/2">
            <div className="rounded-2xl  overflow-hidden shadow-md">
            <img src="https://lnct.ac.in/wp-content/uploads/2021/05/LNCT-Group-of-colleges-20.jpg" alt="Team Working" className=" md:h-[32vw]" />
            </div>
        </div>
    </div>
    <hr />
    <Home2/>
    </>

  )
}

export default Home1