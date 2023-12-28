import React from 'react'
import {useNavigate} from 'react-router-dom'


const Support = () => {
  
  const navigate = useNavigate();
  function clickHandler(){
   
    //move to about page
    navigate("/support");
  }
  return (
    <div>
      <div>This is Support Page</div>
      <button onClick={clickHandler}>Move to Support PAge</button>
      </div>
  )
}

export default Support