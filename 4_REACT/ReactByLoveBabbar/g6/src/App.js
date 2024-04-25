import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
    // <Testing/>
    // <List/>
    <div>
      <BrowserRouter>
        {/* <Route path="/fav" component={Component2}/> */}
        <Component2 />
        <Switch>
          <Route path="/" exact render={(props) => <Component1 {...props} />} />
          <Route path="/fav2" component={Component3} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
