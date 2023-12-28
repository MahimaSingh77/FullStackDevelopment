import logo from './logo.svg';
import './App.css';
import reviews from "./data";
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <div>
      <h1>Our Testimonials</h1>
        <div></div>
        <Testimonials reviews={reviews}/>
      </div>
    </div>
  );
}

export default App;
