import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import RegistrationForm from '../Components/RegistrationForm';
import Trust from '../pages/about/lnct-group/trust';
import OurVision from '../pages/about/lnct-group/OurVision';
import Credo from '../pages/about/lnct-group/credo';
import Management from '../pages/about/our leadership/Management';
import Osd from '../pages/about/our leadership/Osd';
import Principal from '../pages/about/our leadership/principal';
import Advisor from '../pages/about/our leadership/Advisor';
import Auditorium from '../pages/about/infrastructure/Auditorium';
import Seminarhall from '../pages/about/infrastructure/Seminarhall';
import PersonVue from '../pages/about/facility/PersonVue';
import DigitalLibrary from '../pages/about/facility/DigitalLibrary';
import DigitaCLassroom from '../pages/about/facility/DigitaCLassroom';
import HealthCare from '../pages/about/facility/HealthCare';
import Hostel from '../pages/about/facility/Hostel';
import Transportation from '../pages/about/facility/Transportation';
import Innovation from '../pages/about/Innovation';
import DiciplinaryCommities from '../pages/about/committies/DiciplinaryCommities';
import Antiragging from '../pages/about/committies/Antiragging';
import Eoa from '../pages/about/AICTE/Eoa';
import Approval from '../pages/about/AICTE/Approval';
import Mous from '../pages/about/AICTE/Mous';
import AictePragati from '../pages/about/AICTE/AictePragati';
import Acreditation from '../pages/about/Acreditation';
import AcademicCalendar from '../pages/about/AcademicCalendar';
import HostelAllot from '../pages/about/HostelAllot';
import BusRoute from '../pages/about/BusRoute';
import Civil from '../pages/departments/Civil';
import EEEPage from '../pages/departments/EEEPage';
import MEPage from '../pages/departments/MEPage';
import ElectricalEngineering from '../pages/departments/ElectricalEngineering';
import ElectronicsAndCommunicationPage from '../pages/departments/ElectronicsAndCommunicationPage';
import ComputerScienceEngineering from '../pages/departments/ComputerScienceEngineering';
import IT from '../pages/departments/IT';
import CollegeLnct from '../pages/college/CollegeLnct';
import CollegeLnctScience from '../pages/college/CollegeLnctScience';
import CollegeLNCTEecellence from '../pages/college/CollegeLNCTEecellence';
import CollegeLNCTMBA from '../pages/college/CollegeLNCTMBA';
import CollegeLNCTMCA from '../pages/college/CollegeLNCTMCA';
import CollegeIndoreCmpus from '../pages/college/CollegeIndoreCmpus';
import CollegeLnctPharmacy from '../pages/college/CollegeLnctPharmacy';
import Humanities from '../pages/departments/Humanities';
import Physics from '../pages/departments/Physics';
import Chemistry from '../pages/departments/Chemistry';
import Mathematics from '../pages/departments/Mathematics';
import AdmissionEnquiry from '../pages/Admission/AdmissionEnquiry';
import FeeRefundPolicy from '../pages/Admission/FeeRefundPolicy';
import TConlinePayment from '../pages/Admission/TConlinePayment';
import Admission from '../pages/Admission/Admission';
import AdmissionProcess from '../pages/Admission/AdmissionProcess';
const Mainroutes = () => {
  return (
    <div className="p-5">
      <div className='w-full h-full border-1 rounded-xl'>
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
          <Route path="facility/person-jiv" element={<PersonVue/>} />
          <Route path="facility/digital-library" element={<DigitalLibrary/>} />
          <Route path="facility/digital-classroom" element={<DigitaCLassroom/>} />
          <Route path="facility/health-care" element={<HealthCare/>} />
          <Route path="facility/hostel" element={<Hostel />} />
          <Route path="facility/transportation" element={<Transportation />} />
          <Route path="innovation" element={<Innovation/>} />
          <Route path="innovation/lnct-nisp" element={<Innovation/>} />
          <Route path="innovation/lnct-csr-nisp" element={<Innovation/>} />
          <Route path="innovation/lnct-mba-nisp" element={<Innovation/>} />
          <Route path="committee" element={<Home />} />
          <Route path="committee/disciplinary" element={<DiciplinaryCommities />} />
          <Route path="committee/other" element={<DiciplinaryCommities />} />
          <Route path="committee/anti-ragging" element={<Antiragging/>} />
          <Route path="aicte" element={<Home />} />
          <Route path="aicte/eoa-2024-28" element={<Eoa/>} />
          <Route path="aicte/pmkvygudlines" element={<Home />} />
          <Route path="aicte/aictemous" element={<Mous />} />
          <Route path="aicte/aictepragati" element={<AictePragati />} />
          <Route path="aicte/pmkvycoursedetails" element={<Home />} />
          <Route path="aicte/approval" element={<Approval />} />
          <Route path="accredited-by-nba" element={<Acreditation />} />
          <Route path="rgpv" element={<Home />} />
          <Route path="rgpv/mou-courses" element={<Home />} />
          <Route path="academic-calendar" element={<AcademicCalendar/>} />
          <Route path="hostel-allotment" element={<HostelAllot />} />
          <Route path="bus-routes" element={<Home />} />
          <Route path="bus-routes/shift-1" element={<BusRoute/>} />
          <Route path="bus-routes/shift-2" element={<BusRoute/>} />
          <Route path="international-journal-of-lnct" element={<Home />} />
        </Route>

        {/* Colleges section links */}
        <Route path="/colleges" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="lnct" element={<CollegeLnct/>} />
          <Route path="lnct-and-s" element={<CollegeLnctScience />} />
          <Route path="lncte" element={<CollegeLNCTEecellence />} />
          <Route path="mba" element={<CollegeLNCTMBA />} />
          <Route path="mca" element={<CollegeLNCTMCA />} />
          <Route path="lnct-indore" element={<CollegeIndoreCmpus />} />
          <Route path="lnct-vidhyapeeth-university" element={<Home />} />
          <Route path="lnct-jabalpur" element={<Home />} />
          <Route path="lnct-bhopal" element={<Home />} />
          <Route path="lnctu" element={<Home />} />
          <Route path="lnct-shrihansh" element={<Home />} />
          <Route path="cec-bilaspur" element={<Home />} />
          <Route path="lnct-pharmacy" element={<CollegeLnctPharmacy/>} />
        </Route>

        {/* Departments section links */}
        <Route path="/departments" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="civil-engineering" element={<Civil />} />
          <Route path="electrical-and-electronic" element={<EEEPage />} />
          <Route path="mechanical" element={<MEPage />} />
          <Route path="electrical" element={<ElectricalEngineering />} />
          <Route path="department-of-electronic-and-communication" element={<ElectronicsAndCommunicationPage />} />
          <Route path="computer-science-engineering" element={<ComputerScienceEngineering />} />
          <Route path="department-of-information-technology" element={<IT />} />
          <Route path="department-of-basic-science" element={<Home />} />
          <Route path="department-of-basic-science/humanity" element={<Humanities />} />
          <Route path="department-of-basic-science/physics" element={<Physics />} />
          <Route path="department-of-basic-science/chemistry" element={<Chemistry />} />
          <Route path="department-of-basic-science/mathematics" element={<Mathematics />} />
        </Route>

        {/* Admission section links */}
        <Route path="/admission" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="admission-process" element={<AdmissionProcess />} />
          <Route path="admission-enquiry" element={<AdmissionEnquiry />} />
          <Route path="t-and-c-online-payment" element={< TConlinePayment/>} />
          <Route path="fee-refund-policy" element={<FeeRefundPolicy />} />
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
    </div>
  );
};

export default Mainroutes;