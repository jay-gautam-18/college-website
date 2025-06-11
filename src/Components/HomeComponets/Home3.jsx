import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Home4 from './Home4'
gsap.registerPlugin(ScrollTrigger);



const Home3 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = containerRef.current.querySelectorAll(".slide-in");

    sections.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <>
    <div className="min-h-screen bg-[#f8f6ef] px-4 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Static Side */}
        <div className="w-full md:w-2/5 md:sticky  md:top-24 md:h-[calc(70vh-6rem)] flex flex-col justify-center p-6  ">
         <div className=" mr-5 md:w-1/3 sticky space-y-6">
            <div >
                <h2 className="md:text-7xl text-5xl font-[400] leading-tight">FEATURED<br />WORK</h2>
                <p className="mt-2 tracking-wide  text-2xl text-gray-700 w-[70vw] md:max-w-[20vw]">
                Showcasing our standout projects that blend creativity, strategy, and cutting-edge design.
                </p>
            </div>
            <button className="md:text-xl text-lg border bg-black text-white font-[300] px-10  md:px-6 md:py-1.5 rounded-lg hover:bg-transparent hover:text-black transition">See All Work</button>
        </div>
        <div className='h-auto w-[1px]  bg-black'></div>
        </div>
        {/* Right Scroll Side */}
        <div ref={containerRef} className="w-full md:w-4/5 border-l pl-4 space-y-12">
             {/* Large Featured Image */}
        <div>
            <img src="https://lnct.ac.in/wp-content/uploads/2021/05/LNCT-Group-of-colleges-20.jpg" alt="Dancing Stars" className="rounded-2xl w-full" />
            <div className="flex justify-between text-sm mt-3">
            <span className="text-black md:text-2xl">Dancing Stars</span>
            <span className="text-gray-500 md:text-2xl">2022</span>
            </div>
        </div>
            <hr />
        {/* 2 Rows with 2 Columns each */}
        <div className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-4">
            <div>
                <img src="https://lnct.ac.in/wp-content/uploads/2021/05/LNCT-Group-of-colleges-20.jpg" alt="Enjoy Silence" className="rounded-2xl" />
                <div className="flex justify-between md:text-2xl mt-2">
                <span>Enjoy Silence</span>
                <span className="text-gray-500">2022</span>
                </div>
            </div>
            <div>
                <img src="https://lnct.ac.in/wp-content/uploads/2021/05/LNCT-Group-of-colleges-20.jpg" alt="Pure Vision" className="rounded-2xl" />
                <div className="flex justify-between md:text-2xl mt-2">
                <span>Pure Vision</span>
                <span className="text-gray-500">2022</span>
                </div>
            </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-4">
            <div>
                <img src="https://lnct.ac.in/wp-content/uploads/2021/05/LNCT-Group-of-colleges-20.jpg" alt="Boring Brand" className="rounded-2xl" />
                <div className="flex justify-between md:text-2xl mt-2">
                <span>Boring Brand</span>
                <span className="text-gray-500">2022</span>
                </div>
            </div>
            <div>
                <img src="https://lnct.ac.in/wp-content/uploads/2021/05/LNCT-Group-of-colleges-20.jpg" alt="New Culture" className="rounded-2xl" />
                <div className="flex justify-between md:text-2xl mt-2">
                <span>New Culture</span>
                <span className="text-gray-500">2022</span>
                </div>
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    <hr />
    <Home4/>
    </>
  );
};

export default Home3;