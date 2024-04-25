import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Labs from "./components/Labs";
import About from "./components/About";
import Support from "./components/Support";
import MainHeader from "./components/MainHeader";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/labs">labs</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader />}></Route>
        {/* default route */}
        <Route index element={<Home/>} ></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/labs" element={<Labs />}></Route>
          <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
