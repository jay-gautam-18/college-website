import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LnctFooter = () => {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate brand and columns
      gsap.from(".footer-brand, .footer-column", {
        scrollTrigger: {
          trigger: ".footer-section",
          start: "top 80%",
        },
        y: 50,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.2,
        ease: "power2.out",
      });

      // Animate horizontal line
      gsap.from(".horizontal-line", {
        scrollTrigger: {
          trigger: ".horizontal-line",
          start: "top 90%",
        },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
         delay: 0.2,
        ease: "power2.out",
      });

      // Animate vertical line
      gsap.from(".vertical-line", {
        scrollTrigger: {
          trigger: ".vertical-line",
          start: "top 80%",
        },
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.5,
         delay: 0.2,
        ease: "power2.out",
      });
    }, footerRef);

    return () => ctx.revert(); // Clean up animations
  }, []);

  return (
    <footer
      ref={footerRef}
      className="footer-section bg-[#f9f6ef] text-black px-8 py-12 overflow-hidden"
    >
      {/* Top Section */}
       <div
        className="horizontal-line border-t border-black my-8"
        style={{ height: "2px" }}
      />
       <div
        className="horizontal-line border-t border-black my-8"
        style={{ height: "2px" }}
      />
      <div className="flex flex-col md:flex-row justify-between border-b border-black pb-12 relative">
        {/* Left Brand */}
        <div className="footer-brand max-w-xs space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-4 h-4 border-[5px] border-black" />
            <h2 className="text-2xl font-semibold">FYLLA</h2>
          </div>
          <p>
            Fylla Digital Agency<br />
            Main Street 16<br />
            Lisbon
          </p>
          <div className="flex space-x-2 pt-2">
            {["TW", "IN", "BE"].map((label) => (
              <span
                key={label}
                className="border border-black w-9 h-9 rounded-full flex items-center justify-center"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Vertical Line */}
        <div className="relative hidden md:flex items-stretch px-10">
          <div
            className="vertical-line bg-black"
            style={{ width: "1px", minHeight: "200px" }}
          />
        </div>

        {/* Right Columns */}
        <div className="flex flex-wrap gap-10 mt-10 md:mt-0">
          {[
            {
              title: "Pages",
              items: ["Home", "Services", "Studio", "Contact"],
              extra: (
                <button className="mt-2 px-4 py-2 bg-black text-white">
                  MORE TEMPLATES
                </button>
              ),
            },
            {
              title: "CMS",
              items: [
                "Work",
                "Work Single",
                "Blog",
                "Blog Post",
                "Shop",
                "Shop Single",
              ],
            },
            {
              title: "Utility Pages",
              items: [
                "404 Error Page",
                "Password Protected",
                "Styleguide",
                "Licensing",
                "Changelog",
              ],
            },
          ].map((col, i) => (
            <div key={i} className="footer-column min-w-[150px]">
              <h3 className="text-lg font-semibold mb-2">{col.title}</h3>
              <ul className="space-y-1">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
                {col.extra && <li>{col.extra}</li>}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal Line */}
      <div
        className="horizontal-line border-t border-black my-8"
        style={{ height: "2px" }}
      />

      {/* Bottom Text */}
      <div className="flex flex-col md:flex-row justify-between text-sm">
        <p>
          © MADE BY <a href="#" className="underline">PAWEL GOLA</a> – POWERED BY{" "}
          <a href="#" className="underline">WEBFLOW</a>
        </p>
        <div className="flex space-x-6 pt-2 md:pt-0">
          <a href="#" className="underline">PRIVACY</a>
          <a href="#" className="underline">IMPRINT</a>
        </div>
      </div>
    </footer>
  );
};

export default LnctFooter;