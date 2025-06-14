import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import RegistrationForm from '../Components/RegistrationForm';
import Header from '../Components/Header';
import Trust from '../pages/about/lnct-group/trust';
import OurVision from '../pages/about/lnct-group/OurVision';
import Credo from '../pages/about/lnct-group/credo';
import Management from '../pages/about/our leadership/Management';
import Osd from '../pages/about/our leadership/Osd';
import Principal from '../pages/about/our leadership/principal';
import Advisor from '../pages/about/our leadership/Advisor';
import Auditorium from '../pages/about/infrastructure/Auditorium';
import Seminarhall from '../pages/about/infrastructure/Seminarhall';

const Mainroutes = () => {
  return (
    <div className="m-4 border-1 p-5">
      <Routes>
        <Route path="/" element={<Home/>} />

        {/* About section links */}
        <Route path="/about" element={<Outlet />}>
          <Route index element={<Home />} /> {/* Render Home for /about */}
          <Route path="lnct-group" element={<Home />} />
          <Route path="lnct-group/vision-mission" element={<OurVision/>} />
          <Route path="lnct-group/trust" element={<Trust/>} />
          <Route path="lnct-group/creedo" element={<Credo/>} />
          <Route path="our-leadership" element={<Home />} />
          <Route path="our-leadership/management" element={<Management/>} />
          <Route path="our-leadership/osd" element={<Osd/>} />
          <Route path="our-leadership/principal" element={<Principal/>} />
          <Route path="our-leadership/advisor" element={<Advisor/>} />
          <Route path="infrastructure" element={<Home />} />
          <Route path="infrastructure/auditorium" element={<Auditorium />} />
          <Route path="infrastructure/seminar-hall" element={<Seminarhall />} />
          <Route path="facility" element={<Home />} />
          <Route path="facility/person-jiv" element={<Home />} />
          <Route path="facility/digital-library" element={<Home />} />
          <Route path="facility/digital-classroom" element={<Home />} />
          <Route path="facility/health-care" element={<Home />} />
          <Route path="facility/hostel" element={<Home />} />
          <Route path="facility/transportation" element={<Home />} />
          <Route path="innovation" element={<Home />} />
          <Route path="innovation/lnct-nisp" element={<Home />} />
          <Route path="innovation/lnct-csr-nisp" element={<Home />} />
          <Route path="innovation/lnct-mba-nisp" element={<Home />} />
          <Route path="committee" element={<Home />} />
          <Route path="committee/disciplinary" element={<Home />} />
          <Route path="committee/other" element={<Home />} />
          <Route path="committee/anti-ragging" element={<Home />} />
          <Route path="aicte" element={<Home />} />
          <Route path="aicte/eoa-2024-28" element={<Home />} />
          <Route path="aicte/pmkvygudlines" element={<Home />} />
          <Route path="aicte/aictemous" element={<Home />} />
          <Route path="aicte/aictepragati" element={<Home />} />
          <Route path="aicte/pmkvycoursedetails" element={<Home />} />
          <Route path="aicte/approval" element={<Home />} />
          <Route path="accredited-by-nba" element={<Home />} />
          <Route path="rgpv" element={<Home />} />
          <Route path="rgpv/mou-courses" element={<Home />} />
          <Route path="academic-calendar" element={<Home />} />
          <Route path="hostel-allotment" element={<Home />} />
          <Route path="bus-routes" element={<Home />} />
          <Route path="bus-routes/shift-1" element={<Home />} />
          <Route path="bus-routes/shift-2" element={<Home />} />
          <Route path="international-journal-of-lnct" element={<Home />} />
        </Route>

        {/* Colleges section links */}
        <Route path="/colleges" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="lnct" element={<Home />} />
          <Route path="lnct-and-s" element={<Home />} />
          <Route path="lncte" element={<Header />} />
          <Route path="mba" element={<Home />} />
          <Route path="mca" element={<Home />} />
          <Route path="lnct-indore" element={<Home />} />
          <Route path="lnct-vidhyapeeth-university" element={<Home />} />
          <Route path="lnct-jabalpur" element={<Home />} />
          <Route path="lnct-bhopal" element={<Home />} />
          <Route path="lnctu" element={<Home />} />
          <Route path="lnct-shrihansh" element={<Home />} />
          <Route path="cec-bilaspur" element={<Home />} />
          <Route path="lnct-pharmacy" element={<Home />} />
        </Route>

        {/* Departments section links */}
        <Route path="/departments" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="civil-engineering" element={<Home />} />
          <Route path="electrical-and-electronic" element={<Home />} />
          <Route path="mechanical" element={<Home />} />
          <Route path="electrical" element={<Home />} />
          <Route path="department-of-electronic-and-communication" element={<Home />} />
          <Route path="computer-science-engineering" element={<Home />} />
          <Route path="department-of-information-technology" element={<Home />} />
          <Route path="department-of-basic-science" element={<Home />} />
          <Route path="department-of-basic-science/humanity" element={<Home />} />
          <Route path="department-of-basic-science/physics" element={<Home />} />
          <Route path="department-of-basic-science/chemistry" element={<Home />} />
          <Route path="department-of-basic-science/mathematics" element={<Home />} />
        </Route>

        {/* Admission section links */}
        <Route path="/admission" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="admission-process" element={<RegistrationForm />} />
          <Route path="admission-enquiry" element={<Home />} />
          <Route path="t-and-c-online-payment" element={<Home />} />
          <Route path="fee-refund-policy" element={<Home />} />
          <Route path="download-prospectus" element={<Home />} />
          <Route path="fee-structure" element={<Home />} />
        </Route>

        {/* Placement section links */}
        <Route path="/placement" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="career-development-cell" element={<Home />} />
          <Route path="clubs" element={<Home />} />
          <Route path="clubs/iic-club" element={<Home />} />
          <Route path="clubs/hackathon" element={<Home />} />
          <Route path="clubs/ai-club" element={<Home />} />
          <Route path="clubs/literacy-club" element={<Home />} />
          <Route path="clubs/quest-nature-club" element={<Home />} />
          <Route path="clubs/music-club" element={<Home />} />
          <Route path="clubs/photo-club" element={<Home />} />
          <Route path="regular-activities" element={<Home />} />
          <Route path="placement-records" element={<Home />} />
          <Route path="industry-interaction" element={<Home />} />
          <Route path="cisco-academy" element={<Home />} />
          <Route path="achievements" element={<Home />} />
          <Route path="coursera-for-lnct" element={<Home />} />
          <Route path="student-testimonial" element={<Home />} />
          <Route path="placement-brochure" element={<Home />} />
          <Route path="kalchuri-lnct-group-incubation" element={<Home />} />
          <Route path="lnct-model-united-nation" element={<Home />} />
          <Route path="triumph" element={<Home />} />
        </Route>

        {/* Life @ LNCT section links */}
        <Route path="/life-at-lnct" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="garba-night" element={<Home />} />
          <Route path="ln-gyanarambh" element={<Home />} />
          <Route path="toppers-wall" element={<Home />} />
          <Route path="engineering-olympic" element={<Home />} />
          <Route path="ln-universe" element={<Home />} />
          <Route path="shristi-2k23" element={<Home />} />
          <Route path="ieee-explore" element={<Home />} />
          <Route path="research-and-development" element={<Home />} />
          <Route path="club" element={<Home />} />
        </Route>

        {/* Alumni section links */}
        <Route path="/alumni" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="alumni-cell" element={<Home />} />
          <Route path="alumni-affairs" element={<Home />} />
          <Route path="alma-connect" element={<Home />} />
          <Route path="alumni-letter" element={<Home />} />
          <Route path="eminent-alumni" element={<Home />} />
        </Route>

        {/* Add a 404 route */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </div>
  );
};

export default Mainroutes;