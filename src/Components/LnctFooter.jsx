import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LnctFooter = () => {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="footer-section  text-black px-8 py-12 overflow-hidden"
    >
      <div className="horizontal-line border-t border-black my-8" style={{ height: "2px" }} />
      <div className="horizontal-line border-t border-black my-8" style={{ height: "2px" }} />

      <div className="flex flex-col md:flex-row justify-between border-b border-black pb-12 relative">
        <div className="footer-brand max-w-xs space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-4 h-4 border-[5px] border-black" />
            <h2 className="text-2xl font-semibold">LNCT GROUPS</h2>
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

        <div className="relative hidden md:flex items-stretch px-10">
          <div
            className="vertical-line bg-black"
            style={{ width: "1px", minHeight: "200px" }}
          />
        </div>

        <div className="flex flex-wrap gap-10 mt-10 md:mt-0">
          {[
            {
              title: "Colleges",
              items: [
                { label: "LNCT", path: "/lnct" },
                { label: "LNCT&S", path: "/lnct-and-s" },
                { label: "LNCTE", path: "/lncte" },
                { label: "MBA", path: "/mba" },
                { label: "MCA", path: "/mca" },
                { label: "LNCT Indore", path: "/lnct-indore" },
                { label: "LNCT Vidhyapeeth University", path: "/lnct-vidhyapeeth-university" },
                { label: "LNCT Jabalpur", path: "/lnct-jabalpur" },
                { label: "LNCT Bhopal", path: "/lnct-bhopal" },
                { label: "LNCTU", path: "/lnctu" },
                { label: "LNCT Shrihansh", path: "/lnct-shrihansh" },
                { label: "CEC Bilaspur", path: "/cec-bilaspur" },
                { label: "LNCT Pharmacy", path: "/lnct-pharmacy" },
              ],
            },
            {
              title: "Departments",
              items: [
                { label: "Civil Engineering", path: "/civil-engineering" },
                { label: "Electrical and Electronic", path: "/electrical-and-electronic" },
                { label: "Mechanical", path: "/mechanical" },
                { label: "Electrical", path: "/electrical" },
                { label: "Electronics and Communication", path: "/department-of-electronic-and-communication" },
                { label: "Computer Science Engineering", path: "/computer-science-engineering" },
                { label: "Information Technology", path: "/department-of-information-technology" },
                { label: "Basic Science", path: "/department-of-basic-science" },
              ],
            },
            {
              title: "Important Links",
              items: [
                { label: "About", path: "/about" },
                { label: "Admission Process", path: "/admission-process" },
                { label: "Academic Calendar", path: "/academic-calendar" },
                { label: "R&D", path: "/research-and-development" },
                { label: "LN Universe", path: "/ln-universe" },
              ],
            },
            {
              title: "Contact Us",
              items: [
                { label: "Contact", path: "/contact" },
                { label: "Feedback", path: "/feedback" },
                { label: "FAQ", path: "/faq" },
                { label: "Help Desk", path: "/help-desk" },
                { label: "Support", path: "/support" },
              ],
            },
          ].map((col, i) => (
            <div key={i} className="footer-column min-w-[150px]">
              <h3 className="text-lg font-semibold mb-2">{col.title}</h3>
              <ul className="space-y-1">
                {col.items.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="horizontal-line border-t border-black my-8" style={{ height: "2px" }} />

      <div className="flex flex-col md:flex-row justify-between text-sm">
        <p>
          © MADE BY <a href="#" className="underline">BYTE-SLAYERS</a> – POWERED BY <a href="#" className="underline">LNCT</a>
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