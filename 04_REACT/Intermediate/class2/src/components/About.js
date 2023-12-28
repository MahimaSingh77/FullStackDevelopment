import React from 'react'
import {useNavigate} from 'react-router-dom'


const About = () => {
  
  const navigate = useNavigate();
  function clickHandler(){
   
    //move to about page
    navigate("/support");
  }
  return (
    <div>
      <div>This is About Page</div>
      <button onClick={clickHandler}>Move to Support PAge</button>
      </div>
  )
}

export default About;