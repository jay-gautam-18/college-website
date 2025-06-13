import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home5 from './Home5';

gsap.registerPlugin(ScrollTrigger);

const Home4 = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const taglineRef = useRef(null);
  const lineRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate "How we work"
      gsap.from(taglineRef.current, {
        scrollTrigger: {
          trigger: taglineRef.current,
          start: 'top 90%',
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out',
      });

      // Animate Heading
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 90%',
        },
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
      });

      // Animate Vertical Line
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: lineRef.current,
          start: 'top 80%',
        },
        height: 0,
        duration: 1,
        ease: 'power2.out',
      });

      // Animate Paragraph on Right
      gsap.from(paraRef.current, {
        scrollTrigger: {
          trigger: paraRef.current,
          start: 'top 90%',
        },
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={sectionRef} className="md:w-full flex items-center justify-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-[4fr_0.5fr_2fr] md:w-full max-w-8xl">
          
          {/* Left Side */}
          <div className="md:p-10 mb-10">
            <p
              ref={taglineRef}
              className="uppercase tracking-widest text-lg text-gray-700 mb-4"
            >
              How we work
            </p>
            <h1
              ref={headingRef}
              className="md:text-8xl text-4xl font-thin md:leading-22 tracking-tight text-black"
            >
              We help our Students<br />
              succeed with<br />
              innovative<br />
              strategies.
            </h1>
          </div>

          {/* Custom Vertical Line */}
          <div className="hidden md:flex justify-center">
            <div
              ref={lineRef}
              className="w-px bg-black md:h-[80%] my-auto"
            ></div>
          </div>

          {/* Right Side */}
          <div className="md:p-10 flex flex-col justify-between h-[90vh]">
            <ul className="list-disc pl-5 space-y-4">
              <li>
                <p
                  ref={paraRef}
                  className="md:text-2xl font-light text-gray-800 md:leading-relaxed"
                >
                  Other than Best Academics and Placements, Providing Best Sports facilities also. Producing National & International Players in Drop Row Ball, Base Ball, Throw Ball, Kabbaddi etc.
                </p>
              </li>
              <li>
                <p
                  className="md:text-2xl font-light text-gray-800 md:leading-relaxed"
                >
                  Through careful analysis, creative thinking, and a deep understanding of their goals, we empower businesses to surpass expectations and thrive in today's dynamic and competitive landscape.
                </p>
              </li>
              <li>
                <p
                  className="md:text-2xl font-light text-gray-800 md:leading-relaxed"
                >
                  Through careful analysis, creative thinking, and a deep understanding of their goals, we empower businesses to surpass expectations and thrive in today's dynamic and competitive landscape.
                </p>
              </li>
            </ul>

            <div className="flex justify-center mt-4">
              <a href='https://www.aicte-india.org/feedback/' className="bg-black text-white px-3 py-1 md:px-6 md:py-2 rounded-lg hover:bg-gray-900 transition">
                Aicte Feedback
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home4;