import React from 'react'
import Template from '../components/Template'
import SignupImg from "../assets/login.png"

const Signup = (setIsLoggedIn) => {
  return (
    <Template
        title="Welcome Back"
        desc1 = "Build skills for today, tomorrow. and beyod."
        desc2 = "Education to future - proof your career."
        image={SignupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}


   />
  )
}

export default Signup