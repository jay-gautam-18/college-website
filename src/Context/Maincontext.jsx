import React, { createContext, useState } from 'react'

export const mainContext = createContext(null) // <-- Changed here
const Maincontext = (props) => {
  const [Nav, setNav] = useState([
  {
    title: 'About',
    description: 'General overview and institutional details of LNCT.',
    links: [
      { label: 'LNCT-GROUP', path: '/about/lnct-group' },
      { label: 'Our Leadership', path: '/about/our-leadership' },
      { label: 'Infrastructure', path: '/about/infrastructure' },
      { label: 'Facility', path: '/about/facility' },
      { label: 'Innovation', path: '/about/innovation' },
      { label: 'Committee', path: '/about/committee' },
      { label: 'AICTE', path: '/about/aicte' },
      { label: 'Accredited by NBA', path: '/about/accredited-by-nba' },
      { label: 'RGPV', path: '/about/rgpv' },
      { label: 'Academic Calendar', path: '/about/academic-calendar' },
      { label: 'Hostel Allotment', path: '/about/hostel-allotment' },
      { label: 'Bus Routes', path: '/about/bus-routes' },
      { label: 'International Journal of LNCT', path: '/about/international-journal-of-lnct' },
    ],
  },
  {
    title: 'Colleges',
    description: 'Different campuses and branches under LNCT group.',
    links: [
      { label: 'LNCT', path: '/colleges/lnct' },
      { label: 'LNCT&S', path: '/colleges/lnct-and-s' },
      { label: 'LNCTE', path: '/colleges/lncte' },
      { label: 'MBA', path: '/colleges/mba' },
      { label: 'MCA', path: '/colleges/mca' },
      { label: 'LNCT Indore', path: '/colleges/lnct-indore' },
      { label: 'LNCT Vidhyapeeth University', path: '/colleges/lnct-vidhyapeeth-university' },
      { label: 'LNCT Jabalpur', path: '/colleges/lnct-jabalpur' },
      { label: 'LNCT Bhopal', path: '/colleges/lnct-bhopal' },
      { label: 'LNCTU', path: '/colleges/lnctu' },
      { label: 'LNCT Shrihansh', path: '/colleges/lnct-shrihansh' },
      { label: 'CEC Bilaspur', path: '/colleges/cec-bilaspur' },
      { label: 'LNCT Pharmacy', path: '/colleges/lnct-pharmacy' },
    ],
  },
  {
    title: 'Departments',
    description: 'Academic departments offered under LNCT.',
    links: [
      { label: 'Civil Engineering', path: '/departments/civil-engineering' },
      { label: 'Electrical and Electronic', path: '/departments/electrical-and-electronic' },
      { label: 'Mechanical', path: '/departments/mechanical' },
      { label: 'Electrical', path: '/departments/electrical' },
      { label: 'Department of Electronic and Communication', path: '/departments/department-of-electronic-and-communication' },
      { label: 'Computer Science Engineering', path: '/departments/computer-science-engineering' },
      { label: 'Department of Information Technology', path: '/departments/department-of-information-technology' },
      { label: 'Department of Basic Science', path: '/departments/department-of-basic-science' },
    ],
  },
  {
    title: 'Admission',
    description: 'Details and procedures related to admission at LNCT.',
    links: [
      { label: 'Admission Process', path: '/admission/admission-process' },
      { label: 'Admission Enquiry', path: '/admission/admission-enquiry' },
      { label: 'T&C Online Payment', path: '/admission/t-and-c-online-payment' },
      { label: 'Fee Refund Policy', path: '/admission/fee-refund-policy' },
      { label: 'Download Prospectus', path: '/admission/download-prospectus' },
      { label: 'Fee Structure', path: '/admission/fee-structure' },
    ],
  },
  {
    title: 'Placement',
    description: 'Placement cell and student career opportunities.',
    links: [
      { label: 'Career Development Cell', path: '/placement/career-development-cell' },
      { label: 'Clubs', path: '/placement/clubs' },
      { label: 'Regular Activities', path: '/placement/regular-activities' },
      { label: 'Placement Records', path: '/placement/placement-records' },
      { label: 'Industry Interaction', path: '/placement/industry-interaction' },
      { label: 'Cisco Academy', path: '/placement/cisco-academy' },
      { label: 'Achievements', path: '/placement/achievements' },
      { label: 'Coursera for LNCT', path: '/placement/coursera-for-lnct' },
      { label: 'Student Testimonial', path: '/placement/student-testimonial' },
      { label: 'Placement Brochure', path: '/placement/placement-brochure' },
      { label: 'Kalchuri LNCT Group Incubation', path: '/placement/kalchuri-lnct-group-incubation' },
      { label: 'LNCT Model United Nation', path: '/placement/lnct-model-united-nation' },
      { label: 'Triumph', path: '/placement/triumph' },
    ],
  },
  {
    title: 'Life @ LNCT',
    description: 'Events, achievements, and activities that shape campus life at LNCT.',
    links: [
      { label: 'Garba Night', path: '/life-at-lnct/garba-night' },
      { label: 'LN Gyanarambh', path: '/life-at-lnct/ln-gyanarambh' },
      { label: 'Toppers Wall', path: '/life-at-lnct/toppers-wall' },
      { label: 'Engineering Olympic', path: '/life-at-lnct/engineering-olympic' },
      { label: 'LN Universe', path: '/life-at-lnct/ln-universe' },
      { label: 'Shristi 2k23', path: '/life-at-lnct/shristi-2k23' },
      { label: 'IEEE Explore', path: '/life-at-lnct/ieee-explore' },
      { label: 'Research and Development', path: '/life-at-lnct/research-and-development' },
      { label: 'Club', path: '/life-at-lnct/club' },
    ],
  },
  {
    title: 'Alumni',
    description: 'Connecting with the LNCT alumni network and their achievements.',
    links: [
      { label: 'Alumni Cell', path: '/alumni/alumni-cell' },
      { label: 'Alumni Affairs', path: '/alumni/alumni-affairs' },
      { label: 'ALMA Connect', path: '/alumni/alma-connect' },
      { label: 'Alumni Letter', path: '/alumni/alumni-letter' },
      { label: 'Eminent Alumni', path: '/alumni/eminent-alumni' },
    ],
  }
  ]);
  const [data, setdata] = useState([
  ]);
  const [values, setvalues] = useState([
              {
                  number: '01',
                  title: 'VISION',
                  desc: "Our relentless pursuit of a shared vision fuels our creativity and propels us forward. With clarity and foresight, we craft strategies that align with our clients' goals and aspirations...",
                },
                {
                    number: '02',
                    title: 'INNOVATION',
                    desc: "Innovation is at the core of everything we do. We embrace curiosity, explore uncharted territories, and challenge the status quo...",
                },
                {
                    number: '03',
                    title: 'CONNECTION',
                    desc: "We believe in the power of connection. We strive to build bridges between brands and their audiences, fostering genuine relationships...",
                },
            ])

   const [news, setnews] = useState(  [
    {
      img: 'https://imgs.search.brave.com/7y447t9bjRQ_91yTxjzr-76Rmvch5yRFMBiDDe3ISPY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29sbGVnZWJhdGNo/LmNvbS9zdGF0aWMv/Y2xnLWdhbGxlcnkv/bG5jdC1ncm91cC1v/Zi1jb2xsZWdlcy1i/aG9wYWwtMjE1MDkw/LmpwZw',
      tag: 'BRANDING',
      title: 'Things to Look for When Comparing Branding Alternatives',
    },
    {
      img: 'https://imgs.search.brave.com/xPm4RETCreM5jsxHpKdDlcAFUZ1-kalbJ29HQXaYKHU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29sbGVnZWJhdGNo/LmNvbS9zdGF0aWMv/Y2xnLWdhbGxlcnkv/bG5jdC1ncm91cC1v/Zi1jb2xsZWdlcy1i/aG9wYWwtMjE1MDk0/LmpwZw',
      tag: 'BRANDING',
      title: '5 Stand-out Features of Branding You Should Know',
    },
    {
      img: 'https://imgs.search.brave.com/xPm4RETCreM5jsxHpKdDlcAFUZ1-kalbJ29HQXaYKHU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29sbGVnZWJhdGNo/LmNvbS9zdGF0aWMv/Y2xnLWdhbGxlcnkv/bG5jdC1ncm91cC1v/Zi1jb2xsZWdlcy1i/aG9wYWwtMjE1MDk0/LmpwZw',
      tag: 'BRANDING',
      title: 'Branding: What Real Customers Have to Say',
    },
  ])         
//data ese hi lagay hai abhi baad mei chnge kar denge
  return (
    <mainContext.Provider value={{ Nav, setNav, data, setdata , values, setvalues ,news , setnews}}>
      {props.children}
    </mainContext.Provider>
  );
}

export default Maincontext