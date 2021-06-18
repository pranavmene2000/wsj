import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// stylesheets
import './App.css';
import './Styles/Styles.css'

import Home from './Pages/Home/Home'
import Sports from './Pages/Sports/Sports'
import Technolgy from './Pages/Technlogy/Technology'
import Business from "./Pages/Business/Business";
import Entertainment from "./Pages/Entertainment/Entertainment";
import Science from "./Pages/Science/Science";
import Health from "./Pages/Health/Health";
import UnitedStates from "./Pages/UnitedStates/UnitedStates";
import Markets from "./Pages/Markets/Markets";
import ReslEstates from "./Pages/RealEstates/RealEstates";
import Politics from "./Pages/Politics/Politics";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/us" component={UnitedStates} />
          <Route path="/politics" component={Politics} />
          <Route path="/sports" component={Sports} />
          <Route path="/business" component={Business} />
          <Route path="/markets" component={Markets} />
          <Route path="/realestates" component={ReslEstates} />
          <Route path="/tech" component={Technolgy} />
          <Route path="/entertainment" component={Entertainment} />
          <Route path="/health" component={Health} />
          <Route path="/science" component={Science} />
          <Route render={() => <Redirect to={{ pathname: '/home' }} />} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
