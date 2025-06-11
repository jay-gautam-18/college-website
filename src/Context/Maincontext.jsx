import React, { createContext, useState } from 'react'

export const MainContext = createContext(null) // <-- Changed here
const Maincontext = (props) => {
  const [Nav, setNav] = useState([
  {
    title: 'About',
    description: 'General overview and institutional details of LNCT.',
    links: [
      { label: 'LNCT-GROUP', path: '/lnct-group' },
      { label: 'Our Leadership', path: '/our-leadership' },
      { label: 'Infrastructure', path: '/infrastructure' },
      { label: 'Facility', path: '/facility' },
      { label: 'Innovation', path: '/innovation' },
      { label: 'Committee', path: '/committee' },
      { label: 'AICTE', path: '/aicte' },
      { label: 'Accredited by NBA', path: '/accredited-by-nba' },
      { label: 'RGPV', path: '/rgpv' },
      { label: 'Academic Calendar', path: '/academic-calendar' },
      { label: 'Hostel Allotment', path: '/hostel-allotment' },
      { label: 'Bus Routes', path: '/bus-routes' },
      { label: 'International Journal of LNCT', path: '/international-journal-of-lnct' },
    ],
  },
  {
    title: 'Colleges',
    description: 'Different campuses and branches under LNCT group.',
    links: [
      { label: 'LNCT', path: '/lnct' },
      { label: 'LNCT&S', path: '/lnct-and-s' },
      { label: 'LNCTE', path: '/lncte' },
      { label: 'MBA', path: '/mba' },
      { label: 'MCA', path: '/mca' },
      { label: 'LNCT Indore', path: '/lnct-indore' },
      { label: 'LNCT Vidhyapeeth University', path: '/lnct-vidhyapeeth-university' },
      { label: 'LNCT Jabalpur', path: '/lnct-jabalpur' },
      { label: 'LNCT Bhopal', path: '/lnct-bhopal' },
      { label: 'LNCTU', path: '/lnctu' },
      { label: 'LNCT Shrihansh', path: '/lnct-shrihansh' },
      { label: 'CEC Bilaspur', path: '/cec-bilaspur' },
      { label: 'LNCT Pharmacy', path: '/lnct-pharmacy' },
    ],
  },
  {
    title: 'Departments',
    description: 'Academic departments offered under LNCT.',
    links: [
      { label: 'Civil Engineering', path: '/civil-engineering' },
      { label: 'Electrical and Electronic', path: '/electrical-and-electronic' },
      { label: 'Mechanical', path: '/mechanical' },
      { label: 'Electrical', path: '/electrical' },
      { label: 'Department of Electronic and Communication', path: '/department-of-electronic-and-communication' },
      { label: 'Computer Science Engineering', path: '/computer-science-engineering' },
      { label: 'Department of Information Technology', path: '/department-of-information-technology' },
      { label: 'Department of Basic Science', path: '/department-of-basic-science' },
    ],
  },
  {
    title: 'Admission',
    description: 'Details and procedures related to admission at LNCT.',
    links: [
      { label: 'Admission Process', path: '/admission-process' },
      { label: 'Admission Enquiry', path: '/admission-enquiry' },
      { label: 'T&C Online Payment', path: '/t-and-c-online-payment' },
      { label: 'Fee Refund Policy', path: '/fee-refund-policy' },
      { label: 'Download Prospectus', path: '/download-prospectus' },
      { label: 'Fee Structure', path: '/fee-structure' },
    ],
  },
  {
    title: 'Placement',
    description: 'Placement cell and student career opportunities.',
    links: [
      { label: 'Career Development Cell', path: '/career-development-cell' },
      { label: 'Clubs', path: '/clubs' },
      { label: 'Regular Activities', path: '/regular-activities' },
      { label: 'Placement Records', path: '/placement-records' },
      { label: 'Industry Interaction', path: '/industry-interaction' },
      { label: 'Cisco Academy', path: '/cisco-academy' },
      { label: 'Achievements', path: '/achievements' },
      { label: 'Coursera for LNCT', path: '/coursera-for-lnct' },
      { label: 'Student Testimonial', path: '/student-testimonial' },
      { label: 'Placement Brochure', path: '/placement-brochure' },
      { label: 'Kalchuri LNCT Group Incubation', path: '/kalchuri-lnct-group-incubation' },
      { label: 'LNCT Model United Nation', path: '/lnct-model-united-nation' },
      { label: 'Triumph', path: '/triumph' },
    ],
  },
  {
    title: 'Life @ LNCT',
    description: 'Events, achievements, and activities that shape campus life at LNCT.',
    links: [
      { label: 'Garba Night', path: '/garba-night' },
      { label: 'LN Gyanarambh', path: '/ln-gyanarambh' },
      { label: 'Toppers Wall', path: '/toppers-wall' },
      { label: 'Engineering Olympic', path: '/engineering-olympic' },
      { label: 'LN Universe', path: '/ln-universe' },
      { label: 'Shristi 2k23', path: '/shristi-2k23' },
      { label: 'IEEE Explore', path: '/ieee-explore' },
      { label: 'Research and Development', path: '/research-and-development' },
      { label: 'Club', path: '/club' },
    ],
  },
  {
    title: 'Alumni',
    description: 'Connecting with the LNCT alumni network and their achievements.',
    links: [
      { label: 'Alumni Cell', path: '/alumni-cell' },
      { label: 'Alumni Affairs', path: '/alumni-affairs' },
      { label: 'ALMA Connect', path: '/alma-connect' },
      { label: 'Alumni Letter', path: '/alumni-letter' },
      { label: 'Eminent Alumni', path: '/eminent-alumni' },
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
    <MainContext.Provider value={{ Nav, setNav, data, setdata , values, setvalues ,news , setnews}}>
      {props.children}
    </MainContext.Provider>
  );
}

export default Maincontext