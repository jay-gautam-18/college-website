import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import cap from '/graduationcap.png'
const Loader = () => {
     let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });
  useGSAP(() => {
    const tl = gsap.timeline();

    // Set initial state
    gsap.set("#scholarHat", { scale: 10 });

    // Hat swing + scale animations chained
    tl.to(".loader",{
      position:"fixed"
    })
    tl.to("#scholarHat", {
      scale: 3,
      x: "50vw",
      rotate: -30,
      duration: 0.8,
      ease: "power2.inOut"
    },0)
    .to("#scholarHat", {
      scale: 1.2,
      x: "-30vw",
      rotate: 15,
      duration: 0.7,
      ease: "power2.inOut"
    })
    .to("#scholarHat", {
      scale: 0.6,
      x: "25vw",
      rotate: -15,
      duration: 0.6,
      ease: "power2.inOut"
    })
    .to("#scholarHat", {
      x: "0vw",
      rotate: 0,
      duration: 0.5,
      ease: "power2.inOut"
    })
    .to("#svg2 " ,{
      x:"-100vw",
      duration:3,
      ease:"power2.inOut"
    },0)
    .to("#svg3 " ,{
      x:"-100vw",
      delay:0.2,
      duration:3,
      ease:"power2.inOut"
    },0)
    .to(".loader", {
      top: "-100%",
      delay:2.6,
      duration: 1,
      ease: "Expo.easeInOut",
      onUpdate: function () {
        if (this.progress() >= 2.6) {
          document.querySelector(".loader")?.kill();
          this.kill();
        }
      }
    },1)
    .to("#svg2 " ,{
      x:0,
      duration:1,
      delay:2.6,
      ease:"power2.inOut"
    },1)
    .to("#svg3 " ,{
      x:0,
      delay:2.8,
      duration:1,
      ease:"power2.inOut"
    },1)
    
  }, { dependencies: [showContent] });
  return (
     <>
    <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#674261]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  LNCT
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="https://lnct.ac.in/wp-content/uploads/2021/05/LNCT-Group-of-colleges-20.jpg"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
            />
        </svg>
    </div>
    {showContent && <div className='loader absolute top-0 left-0 z-100 h-[78vh] md:h-screen w-full flex justify-center overflow-hidden scrollbar-hidden'>
      <img id='scholarHat' className='scholarHat absolute md:top-[-20%] z-10'  src={cap} />
    <div className=' md:h-4/5 w-full  bg-[#674261]'>
      <svg id="svg2" className="u-icon u-icon--separator-main js-section-separator-main absolute w-[300vw]   bottom-0 fill-[#674261] z-4" viewBox="0 0 3876 160"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M-174.61 -157V-116.765C-174.61 15.4344 -112.186 139 -3.49988 139C111 139 138.787 62.2189 249.697 62.2189C360.606 62.2189 356 156.175 533.698 156.175C683 156.175 698.557 75.6322 817.699 62.2189C930.436 49.5265 988.565 138.856 1101.7 138.856C1214.83 138.856 1274.79 62.2189 1385.7 62.2189C1496.61 62.2189 1556.57 138.856 1669.7 138.856C1782.84 138.856 1842.79 62.2189 1953.7 62.2189C2064.61 62.2189 2124.57 138.856 2237.7 138.856C2350.84 138.856 2408.57 62.2188 2521.7 62.2189C2634.84 62.2189 2694.8 138.856 2805.71 138.856C2916.61 138.856 2976.57 62.2189 3089.71 62.2189C3202.84 62.2188 3260.57 138.856 3373.71 138.856C3486.84 138.856 3546.8 62.2189 3657.71 62.2189C3768.62 62.2189 3867.02 222.761 3941.71 108.856C3998.61 22.0779 3941.71 -157 3941.71 -157H-174.61Z">
        </path>
      </svg>

      <svg id="svg3" className="u-icon u-icon--separator-secondary js-section-separator-secondary absolute w-[300vw]  bottom-0 bg-[#f9f7f1] fill-[#C2ADC6] z-3" viewBox="0 0 3876 160"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M-196.61 0V21.1232C-196.61 90.5281 -148.913 67.6768 -101.5 115.09C-14.9999 201.59 116.787 115.09 227.697 115.09C338.606 115.09 400.788 152.442 511.698 152.442C622.607 152.442 676.557 122.132 795.699 115.09C908.436 108.426 966.566 155.325 1079.7 155.325C1192.83 155.325 1252.79 115.09 1363.7 115.09C1474.61 115.09 1534.57 155.325 1647.7 155.325C1760.84 155.325 1820.79 115.09 1931.7 115.09C2042.61 115.09 2102.57 155.325 2215.7 155.325C2328.84 155.325 2386.57 115.09 2499.7 115.09C2612.84 115.09 2672.8 155.325 2783.71 155.325C2894.61 155.325 2954.57 115.09 3067.71 115.09C3180.84 115.09 3238.57 155.325 3351.71 155.325C3464.84 155.325 3524.8 115.09 3635.71 115.09C3746.62 115.09 3845.02 185.125 3919.71 125.325C3976.61 79.7659 3919.71 0 3919.71 0H-196.61Z">
        </path>
      </svg>
      </div>
      </div>
      }
    </>
  )
}

export default Loader