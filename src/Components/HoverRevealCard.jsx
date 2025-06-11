import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Web Development",
    image: "https://source.unsplash.com/800x600/?code",
  },
  {
    title: "UI Design",
    image: "https://source.unsplash.com/800x600/?design",
  },
  {
    title: "Team Collaboration",
    image: "https://source.unsplash.com/800x600/?team",
  },
];

const HoverRevealCard = () => {
  const topLine = useRef(null);
  const bottomLine = useRef(null);
  const cardRefs = useRef([]);
  const overlayRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([topLine.current, bottomLine.current], {
        scrollTrigger: {
          trigger: topLine.current,
          start: "top 90%",
        },
        width: 0,
        duration: 1,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const handleEnter = (index) => {
    gsap.to(cardRefs.current[index], { scale: 1.05, duration: 0.3 });
    gsap.to(overlayRefs.current[index], { y: 0, duration: 0.4 });
  };

  const handleLeave = (index) => {
    gsap.to(cardRefs.current[index], { scale: 1, duration: 0.3 });
    gsap.to(overlayRefs.current[index], { y: "100%", duration: 0.4 });
  };

  const handleMobileTap = (index) => {
    const overlay = overlayRefs.current[index];
    const isActive = overlay.dataset.active === "true";
    if (isActive) {
      handleLeave(index);
      overlay.dataset.active = "false";
    } else {
      handleEnter(index);
      overlay.dataset.active = "true";
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f6ef] px-4 sm:px-6 py-12 sm:py-16">
      <div ref={topLine} className="w-full max-w-6xl h-[2px] bg-black mb-6 mx-auto lg:overflow-hidden" />
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">NEWS</h2>
      <div ref={bottomLine} className="w-full max-w-6xl h-[2px] bg-black mb-10 overflow-hidden sm:mb-16 mx-auto" />

      <div className="w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer"
              onMouseEnter={() => handleEnter(index)}
              onMouseLeave={() => handleLeave(index)}
              onClick={() => handleMobileTap(index)}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 sm:h-72 object-cover"
              />
              <div
                ref={(el) => (overlayRefs.current[index] = el)}
                data-active="false"
                className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-end transform translate-y-full"
              >
                <p className="text-white text-base sm:text-lg font-semibold p-4">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverRevealCard;