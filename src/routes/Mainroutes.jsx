import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import RegistrationForm from '../Components/RegistrationForm';
import Header from '../Components/Header';
import Nav from '../Components/Nav';
const Mainroutes = () => {
  return (
    <div className='m-4 border-1 p-5 '>
      <Routes>
         <Route path='/' element={<Home />} />
         {/* About section links */}
        <Route path='/about'>
          {/* Nested routes for About section */}
          <Route path='/about/lnct-group' element={<Nav/>} />
          <Route path='/about/our-leadership' element={<Home />} />
          <Route path='/about/infrastructure' element={<Home />} />
          <Route path='/about/facility' element={<Home />} />
          <Route path='/about/innovation' element={<Home />} />
          <Route path='/about/committee' element={<Home />} />
          <Route path='/about/aicte' element={<Home />} />
          <Route path='/about/accredited-by-nba' element={<Home />} />
          <Route path='/about/rgpv' element={<Home />} />
          <Route path='/about/academic-calendar' element={<Home />} />
          <Route path='/about/hostel-allotment' element={<Home />} />
          <Route path='/about/bus-routes' element={<Home />} />
          <Route path='/about/international-journal-of-lnct' element={<Home />} />
        </Route>
        {/* Colleges section links */}
        <Route path='/colleges' >
          <Route path='/colleges/lnct' element={<Home />} />
          <Route path='/colleges/lnct-and-s' element={<Home />} />
          <Route path='/colleges/lncte' element={<Header/>} />
          <Route path='/colleges/mba' element={<Home />} />
          <Route path='/colleges/mca' element={<Home />} />
          <Route path='/colleges/lnct-indore' element={<Home />} />
          <Route path='/colleges/lnct-vidhyapeeth-university' element={<Home />} />
          <Route path='/colleges/lnct-jabalpur' element={<Home />} />
          <Route path='/colleges/lnct-bhopal' element={<Home />} />
          <Route path='/colleges/lnctu' element={<Home />} />
          <Route path='/colleges/lnct-shrihansh' element={<Home />} />
          <Route path='/colleges/cec-bilaspur' element={<Home />} />
          <Route path='/colleges/lnct-pharmacy' element={<Home />} />
        </Route>
        {/* Departments section links */}
        <Route path='/departments'>
              <Route path='/departments/civil-engineering' element={<Home />} />
              <Route path='/departments/electrical-and-electronic' element={<Home />} />
              <Route path='/departments/mechanical' element={<Home />} />
              <Route path='/departments/electrical' element={<Home />} />
              <Route path='/departments/department-of-electronic-and-communication' element={<Home />} />
              <Route path='/departments/computer-science-engineering' element={<Home />} />
              <Route path='/departments/department-of-information-technology' element={<Home />} />
              <Route path='/departments/department-of-basic-science' element={<Home />} />
        </Route>
        {/* Admission section links */}
        <Route path='/admission'>
          <Route path='/admission/admission-process' element={<RegistrationForm/>} />
          <Route path='/admission/admission-enquiry' element={<Home />} />
          <Route path='/admission/t-and-c-online-payment' element={<Home />} />
          <Route path='/admission/fee-refund-policy' element={<Home />} />
          <Route path='/admission/download-prospectus' element={<Home />} />
          <Route path='/admission/fee-structure' element={<Home />} />
        </Route>
        {/* Placement section links */}
        <Route path='/placement'>
          <Route path='/placement/career-development-cell' element={<Home />} />
          <Route path='/placement/clubs' element={<Home />} />
          <Route path='/placement/regular-activities' element={<Home />} />
          <Route path='/placement/placement-records' element={<Home />} />
          <Route path='/placement/industry-interaction' element={<Home />} />
          <Route path='/placement/cisco-academy' element={<Home />} />
          <Route path='/placement/achievements' element={<Home />} />
          <Route path='/placement/coursera-for-lnct' element={<Home />} />
          <Route path='/placement/student-testimonial' element={<Home />} />
          <Route path='/placement/placement-brochure' element={<Home />} />
          <Route path='/placement/kalchuri-lnct-group-incubation' element={<Home />} />
          <Route path='/placement/lnct-model-united-nation' element={<Home />} />
          <Route path='/placement/triumph' element={<Home />} />
        </Route>
        {/* Life @ LNCT section links */}
        <Route path='/life-at-lnct'>
            <Route path='/life-at-lnct/garba-night' element={<Home />} />
            <Route path='/life-at-lnct/ln-gyanarambh' element={<Home />} />
            <Route path='/life-at-lnct/toppers-wall' element={<Home />} />
            <Route path='/life-at-lnct/engineering-olympic' element={<Home />} />
            <Route path='/life-at-lnct/ln-universe' element={<Home />} />
            <Route path='/life-at-lnct/shristi-2k23' element={<Home />} />
            <Route path='/life-at-lnct/ieee-explore' element={<Home />} />
            <Route path='/life-at-lnct/research-and-development' element={<Home />} />
            <Route path='/life-at-lnct/club' element={<Home />} />
        </Route>
        {/* Alumni section links */}
        <Route path='/alumni'>
            <Route path='/alumni/alumni-cell' element={<Home />} />
            <Route path='/alumni/alumni-affairs' element={<Home />} />
            <Route path='/alumni/alma-connect' element={<Home />} />
            <Route path='/alumni/alumni-letter' element={<Home />} />
            <Route path='/alumni/eminent-alumni' element={<Home />} />
        </Route>
      </Routes>
      </div>

    )
  }

  export default Mainroutes