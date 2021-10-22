import './App.scss';
import NavOnTop from '../components/NavOnTop/NavOnTop';
import Nav from '../components/Navigation/Nav';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import homeExotic from '../views/home/exoticDestinations/exotic';
import homeTravel from "../views/home/travelAgency/travel";
import homeWinter from "../views/home/winterHoliday/winter";



function App() {
 
  return (
    <Router>
      <div className="App">
        <NavOnTop />
        <Nav />
      </div>

      <Switch>
        <Route path="/">
          <homeTravel />
        </Route>
        <Route path="/home/winterHoliday">
          <homeWinter />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;