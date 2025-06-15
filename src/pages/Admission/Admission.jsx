import React from 'react'
import Nav from '../../Components/Nav'
import LnctFooter from '../../Components/LnctFooter'
import Home1 from '../../Components/HomeComponets/Home1'
import RegistrationForm from '../../Components/RegistrationForm'

const Admission = () => {
  return (
    <>
    <Nav/>
    <Home1
    heading={"Admission Process | Central India's No. 1 Engineering Institute - Bhopal"}
    description={"Be the part Of Lnct Group ; Learn, achieve and excel with LNCT Group of colleges"}
    image={"https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-3-1024x682.jpeg"}
    />
    <RegistrationForm
    heading={"Admission Form"}
    />
    
    <LnctFooter/>
    </>
  )
}

export default Admission