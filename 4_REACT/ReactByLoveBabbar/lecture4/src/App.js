import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [name, setName] = useState("love");

  // //variation1 -> Every Render
  // useEffect( () => {
  //   console.log("UI RENDERING DONE");
  // });

  //Variation2 ->  First Render
  // useEffect(() => {
  //   console.log("UI RENDERING DONEE");
  // }, []);

  // //Variation3 ->  First Render + whenever dependency is changed
  //  useEffect (() => {
  //   console.log("Change observed")
  //  }, [text]);

  // //Variation4 ->  whenever value is changed
  // useEffect (() => {
  //   console.log("Change observed")
  //  }, [name]);

  //Variation5 ->  To handle unmounting of a component
  // useEffect (() => {
  //   // add eventlistener
  //   console.log("Change observed")
  //  }, []);

  useEffect(() => {
    // add eventlistener
    console.log("istener added");

    return () => {
      console.log("Listener removed");
    }
  }, [text]);



  function changeHandler(event) {
    setText(event.target.value);
    console.log(text);

  }
  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}  

export default App; 
