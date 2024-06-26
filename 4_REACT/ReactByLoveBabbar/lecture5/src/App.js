import React from "react";
import "./App.css";
import {toast} from 'react-toastify';
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { useState } from "react";
//   import { filterData } from "./data";
import {apiUrl, filterData} from "./data";


const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();

      // output ->
      setCourses(output);

    }

    catch(error){

      toast.error("Network me dikkat h");

    }

    setLoading(false);

  }

  useEffect(() => {
    fetchData();
  } , [])

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Filter filterData={filterData} />
      </div>

      <div>
        <Cards />
      </div>
    </div>
  );
};
export default App;
