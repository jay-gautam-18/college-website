import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: 'power2.out',
      });

      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: lineRef.current,
          start: 'top 80%',
        },
        scaleY: 0,
        transformOrigin: 'top center',
        duration: 1,
        ease: 'power2.out',
      });

      gsap.to([ bottomLineRef.current], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
        },
        scaleX: 1,
        transformOrigin: 'left center',
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="md:h-[70vh]  w-full px-4 md:px-10 py-20 relative"
    >
      {/* Top Horizontal Line */}
      {/* <div
        ref={topLineRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-black scale-x-0 origin-center"
      ></div> */}

      {/* Bottom Horizontal Line */}
      <div
        ref={bottomLineRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[2px] bg-black scale-x-0 origin-left"
      ></div>

      <div className="max-w-[100%] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <div className="md:w-4/5">
          <p className="uppercase text-sm tracking-widest mb-4 h-14 flex items-center">Contact</p>
          <h1
            ref={titleRef}
            className="text-4xl md:text-7xl font-normal leading-tight"
          >
            LET'S BRING YOUR BRAND TO THE NEXT LEVEL
          </h1>
        </div>

        {/* Vertical Line */}
        <div className="hidden md:flex justify-center items-center">
          <div
            ref={lineRef}
            className="w-[1px] h-[70%] md:min-h-[200px] bg-black mx-6"
          ></div>
        </div>

        {/* Right Text */}
        <div ref={textRef} className="md:w-1/2">
          <p className="text-base md:text-2xl text-gray-800 leading-relaxed">
            Together, let's elevate your brand to new heights by unleashing its
            full potential and captivating your target audience.
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white text-xs tracking-widest rounded">
            OUR SERVICES
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;