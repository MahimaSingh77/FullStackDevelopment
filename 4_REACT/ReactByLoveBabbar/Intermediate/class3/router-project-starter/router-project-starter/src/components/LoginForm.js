import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";


const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();


  const [ formData, setFormData ] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event){

    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Loggged In");
    navigate("/dashboard");

  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          <p>
            Email Addresss <sup>*</sup>
          </p>
          <input
            required
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email id"
            name="email"
          />
        </label>
        <label>
          <p>
            Password <sup>*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter password"
            name="password"
          />

          <span onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>

          <Link to="#">
            <p>Forgot Password</p>
          </Link>
        </label>

        <button>
            Sign In
        </button>
      </form>
    </div>
  )
}

export default LoginForm;
