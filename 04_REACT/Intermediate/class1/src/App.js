// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";

// function App() {
//   // const[firstName,setFirstName] = useState("") ;
//   // const[lastName,setLastName] = useState("") ;

//   // console.log(firstName);
//   // console.log(lastName);

//   // function changeFirstNameHandler(event) {
//   //   // console.log("Printing first name");
//   //   // console.log(event.target.value);
//   //   setFirstName(event.target.value);
//   // }
//   // function changeLastNameHandler(event) {
//   //   // console.log("Printing last name");
//   //   // console.log(event.target.value);
//   //   setLastName(event.target.value);
//   // }

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     comments: "",
//     isVisible: true,
//     mode: "",
//     favCar: "",
//   });

//   console.log(formData);

//   console.log(formData.firstName);
//   console.log(formData.email);

//   function changeHandler(event) {
//     const { name, value, checked, type } = event.target;
//     setFormData((prevFormData) => {
//       return {
//         ...prevFormData,
//         [name]: type === "checkbox" ? checked : value,
//       };
//     });
//   }

//   function submitHandler(event) {
//     event.preventDefault();
//     //print
//     console.log("finally printing entire form ka data........");
//     console.log(formData);
//   }
//   return (
//     <div className="App">
//       <form onSubmit={submitHandler}>
//         <input
//           type="text"
//           placeholder="first name"
//           onChange={changeHandler}
//           name="firstName"
//           value={formData.firstName}
//         />
//         <br />
//         <br />
//         <input
//           type="text"
//           placeholder="last name"
//           onChange={changeHandler}
//           name="lastName"
//           value={formData.lastName}
//         />
//         <br />
//         <br />
//         <input
//           type="email"
//           placeholder="Enter your email here"
//           onChange={changeHandler}
//           name="email"
//           value={formData.email}
//         />

//         <br></br>
//         <br></br>
//         <textarea
//           placeholder="enter your comments here"
//           onChange={changeHandler}
//           name="comments"
//           value={formData.comments}
//         />
//         <br></br>
//         <br></br>
//         <input
//           type="checkbox"
//           onChange={changeHandler}
//           name="isVisible"
//           id="isVisible"
//           checked={formData.isVisible}
//         />

//         <label htmlFor="isVisible">Am I Visible ?</label>
//         <br></br>
//         <br></br>

//         <fieldset>
//           <legend>Mode:</legend>
//           <input
//             type="radio"
//             onChange={changeHandler}
//             name="mode"
//             value="SameAsEmail"
//             id="SameAsEmail"
//             checked={formData.mode === "SameAsEmail"}
//           />
//           <label htmlFor="SameAsEmail">Online Mode</label>

//           <input
//             type="radio"
//             onChange={changeHandler}
//             name="mode" //because of same name we will  be able to tick only one
//             value="Offline-Mode"
//             id="Offline-Mode"
//             checked={formData.mode === "Offline-Mode"}
//           />
//           <label htmlFor="Offline-Mode">Online Mode</label>
//         </fieldset>

//         <label htmlFor="favCar">Tell me your favourite Car </label>
//         <select
//           name="favCar"
//           value={formData.favCar}
//           id="favCar"
//           onChange={changeHandler}
//         >
//           <option value="scorpio">Scorpio </option>
//           <option value="fortuner">Fortuner </option>
//           <option value="thar">Tharr </option>
//           <option value="legender">Legender </option>
//           <option value="defender">Defender </option>
//         </select>

//         {/* <input type="submit" value='submit'></input> */}

//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // const[firstName,setFirstName] = useState("") ;
  // const[lastName,setLastName] = useState("") ;

  // console.log(firstName);
  // console.log(lastName);

  // function changeFirstNameHandler(event) {
  //   // console.log("Printing first name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }
  // function changeLastNameHandler(event) {
  //   // console.log("Printing last name");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    //print
    console.log("finally printing entire form ka data........");
    console.log(formData);
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstname">First Name</label> <br></br>
        <input
          type="text"
          placeholder="first name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <br></br>
        <input
          type="text"
          placeholder="last name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <br />
        <br />
        <label htmlFor="email">Email address</label>
        <br />
        <input
          type="email"
          placeholder="Enter your email here"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
        <br></br>
        <br></br>
        <label htmlFor="country">Country</label> <br />
        <input
          type="text"
          placeholder="India"
          onChange={changeHandler}
          name="country"
          value={formData.country}
        />
        <br></br>
        <br></br>
        <label htmlFor="streetAddress">Street Address</label> <br></br>
        <input
          type="text"
          placeholder="1234 Main St"
          onChange={changeHandler}
          name="streetAddress"
          value={formData.streetAddress}
        />
        <br></br>
        <br></br>
        <label htmlFor="city">City</label> <br></br>
        <input
          type="text"
          placeholder="1234 Main St"
          onChange={changeHandler}
          name="city"
          value={formData.city}
        />
        <br></br>
        <br></br>
        <label htmlFor="state">State</label>
        <br />
        <input
          type="text"
          placeholder="1234 Main St"
          onChange={changeHandler}
          name="state"
          value={formData.state}
        />
        <br />
        <br />
        <label htmlFor="postalCode">postalCode</label>
        <br />
        <input
          type="text"
          placeholder="1234"
          onChange={changeHandler}
          name="postalCode"
          value={formData.postalCode}
        />
        <br />
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">comments</label>
        <p>Get notified when someone posts a comment on a posting</p>
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Candidates</label>
        <p>Get notified when a candidate applies for a job</p>
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Offers</label>
        <p>Get notified when a candidate accepts or rejects an offer</p>
        <br />
        <br />
        <label htmlFor="isVisible">Push Notifications</label>
        <p>Get notified when a candidate accepts or rejects an offer</p>
        <input
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="Everything"
          id="Everything"
          checked={formData.mode === "Everything"}
        />
        <br></br>
        <label htmlFor="Everything">Everything</label>
        <input
          type="radio"
          onChange={changeHandler}
          name="mode" //because of same name we will  be able to tick only one
          value="SameAsEmail"
          id="SameAsEmail"
          checked={formData.mode === "SameAsEmail"}
        />
        <label htmlFor="SameAsEmail">Same As Email</label>
    <br></br>
        <input
          type="radio"
          onChange={changeHandler}
          name="mode" //because of same name we will  be able to tick only one
          value="NoPush"
          id="NoPush"
          checked={formData.mode === "NoPush"}
        />
        <br/>
        <label htmlFor="SameAsEmail">No Push Notifications</label>
        <br/>
        {/* <input type="submit" value='submit'></input> */}
        <button>Save</button>
      </form>
    </div>
  );
}

export default App;
