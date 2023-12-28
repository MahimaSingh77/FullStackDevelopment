import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
  const [ formData, setFormData ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    if(formData.password != formData.confirmPassword){
        toast.error("Passwords do not match");
        return;
    }

    setIsLoggedIn(true);
    toast.success("Account created");
    const accountData = {
        ...formData
    };
    console.log("Printing account data");
    console.log(accountData);

    navigate("/dashboard");
  }
  return (
    <div>
      {/* Student Instructor Tab */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        {/* FirstName n Last Name */}
        <div>
          <label>
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter First Name"
              name="firstName"
            />
          </label>
          <label>
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter First Name"
              name="lastName"
            />
          </label>
        </div>

        {/* email address */}
        <label>
          <p>
            Email Address <sup>*</sup>
          </p>
          <input
            required
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter Your Email Address"
            name="email"
          />
        </label>

        {/* create Password and confirm password */}
        <div>
          <label>
            <p>
              CreatePassword <sup>*</sup>
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
          </label>

          <label>
            <p>
              CreatePassword <sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm password"
              name="confirmPassword"
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>

        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
