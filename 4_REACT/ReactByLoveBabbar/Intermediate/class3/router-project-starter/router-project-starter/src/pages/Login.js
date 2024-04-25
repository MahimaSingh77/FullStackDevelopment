import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.png"
const Login = (setIsLoggedIn) => {
  return (
   <Template
        title="Welcome Back"
        desc1 = "Build skills for today, tomorrow. and beyod."
        desc2 = "Education to future - proof your career."
        image={loginImg}
        Type="login"
        setIsLoggedIn={setIsLoggedIn}


   />
  )
}

export default Login