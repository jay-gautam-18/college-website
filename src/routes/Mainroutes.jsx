import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import RegistrationForm from '../Components/RegistrationForm';
import Header from '../Components/Header';
const Mainroutes = () => {
  return (
    <div className='m-4 border-1 p-5 '>
      <Routes>
         <Route path='/' element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/services' element={<Home />} />
        
        {/* About section links */}
        <Route path='/lnct-group' element={<Home />} />
        <Route path='/our-leadership' element={<Home />} />
        <Route path='/infrastructure' element={<Home />} />
        <Route path='/facility' element={<Home />} />
        <Route path='/innovation' element={<Home />} />
        <Route path='/committee' element={<Home />} />
        <Route path='/aicte' element={<Home />} />
        <Route path='/accredited-by-nba' element={<Home />} />
        <Route path='/rgpv' element={<Home />} />
        <Route path='/academic-calendar' element={<Home />} />
        <Route path='/hostel-allotment' element={<Home />} />
        <Route path='/bus-routes' element={<Home />} />
        <Route path='/international-journal-of-lnct' element={<Home />} />

        {/* Colleges section links */}
        <Route path='/lnct' element={<Home />} />
        <Route path='/lnct-and-s' element={<Home />} />
        <Route path='/lncte' element={<Header/>} />
        <Route path='/mba' element={<Home />} />
        <Route path='/mca' element={<Home />} />
        <Route path='/lnct-indore' element={<Home />} />
        <Route path='/lnct-vidhyapeeth-university' element={<Home />} />
        <Route path='/lnct-jabalpur' element={<Home />} />
        <Route path='/lnct-bhopal' element={<Home />} />
        <Route path='/lnctu' element={<Home />} />
        <Route path='/lnct-shrihansh' element={<Home />} />
        <Route path='/cec-bilaspur' element={<Home />} />
        <Route path='/lnct-pharmacy' element={<Home />} />

        {/* Departments section links */}
        <Route path='/civil-engineering' element={<Home />} />
        <Route path='/electrical-and-electronic' element={<Home />} />
        <Route path='/mechanical' element={<Home />} />
        <Route path='/electrical' element={<Home />} />
        <Route path='/department-of-electronic-and-communication' element={<Home />} />
        <Route path='/computer-science-engineering' element={<Home />} />
        <Route path='/department-of-information-technology' element={<Home />} />
        <Route path='/department-of-basic-science' element={<Home />} />

        {/* Admission section links */}
        <Route path='/admission-process' element={<RegistrationForm/>} />
        <Route path='/admission-enquiry' element={<Home />} />
        <Route path='/t-and-c-online-payment' element={<Home />} />
        <Route path='/fee-refund-policy' element={<Home />} />
        <Route path='/download-prospectus' element={<Home />} />
        <Route path='/fee-structure' element={<Home />} />

        {/* Placement section links */}
        <Route path='/career-development-cell' element={<Home />} />
        <Route path='/clubs' element={<Home />} />
        <Route path='/regular-activities' element={<Home />} />
        <Route path='/placement-records' element={<Home />} />
        <Route path='/industry-interaction' element={<Home />} />
        <Route path='/cisco-academy' element={<Home />} />
        <Route path='/achievements' element={<Home />} />
        <Route path='/coursera-for-lnct' element={<Home />} />
        <Route path='/student-testimonial' element={<Home />} />
        <Route path='/placement-brochure' element={<Home />} />
        <Route path='/kalchuri-lnct-group-incubation' element={<Home />} />
        <Route path='/lnct-model-united-nation' element={<Home />} />
        <Route path='/triumph' element={<Home />} />

        {/* Life @ LNCT section links */}
        <Route path='/garba-night' element={<Home />} />
        <Route path='/ln-gyanarambh' element={<Home />} />
        <Route path='/toppers-wall' element={<Home />} />
        <Route path='/engineering-olympic' element={<Home />} />
        <Route path='/ln-universe' element={<Home />} />
        <Route path='/shristi-2k23' element={<Home />} />
        <Route path='/ieee-explore' element={<Home />} />
        <Route path='/research-and-development' element={<Home />} />
        <Route path='/club' element={<Home />} />

        {/* Alumni section links */}
        <Route path='/alumni-cell' element={<Home />} />
        <Route path='/alumni-affairs' element={<Home />} />
        <Route path='/alma-connect' element={<Home />} />
        <Route path='/alumni-letter' element={<Home />} />
        <Route path='/eminent-alumni' element={<Home />} />


        </Routes>
      </div>

    )
  }

  export default Mainroutes