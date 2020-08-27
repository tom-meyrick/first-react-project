import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Stuff from "./Stuff";
import Appify from "./Appify";
import Clicked from "./Clicked";
import ToggleText from "./ToggleText";
import Counter from "./Counter";
import StepCounter from "./StepCounter";
import CatchMeIfYouCan from "./CatchMeIfYouCan";
import RollCall from "./RollCall";
import GodCounter from "./GodCounter";
import TwoCounters from "./TwoCounters";
import LightBox from "./LightBox";
import Length from "./Length";
import PasswordStrength from "./PasswordStrength";
import TempConverter from "./TempConverter";
import List from "./List";
import Adder from "./Adder";
import Transform from "./Transform";
import Footer from "./Footer";
import FourOhFour from "./FourOhFour";

let names = ["Dave", "Ariel", "Sheila", "Nigel", "Peter"];
let blah =
  "https://www.sundaypost.com/wp-content/uploads/sites/13/2018/03/iStock-697083606.jpg.jpg";

let square = (x) => x * x;
let sum = (x) => +x + +x;

const App = () => (
  <Router>
    <Stuff />
    <Switch>
      <Route exact-path="/">
        <Transform transform={sum} />
        <Transform transform={square} />
        <Adder />
        <List />
      </Route>
    </Switch>
    <Switch>
      <Route path="/first">
        <TempConverter />
        <PasswordStrength />
        <Length />
      </Route>
    </Switch>
    <Switch>
      <Route path="/second">
        <TwoCounters />
        <GodCounter />
        <CatchMeIfYouCan jump={100} />
        <Clicked />
      </Route>
    </Switch>
    <Switch>
      <Route path="/third">
        <ToggleText initial="Hello" alternate="World" />
        <Counter initial={50} max={100} />
        <StepCounter step={5} max={100} />
        <RollCall names={names} />
        <Appify />
      </Route>
    </Switch>
    <Switch>
      <FourOhFour />
    </Switch>
    <Footer />
  </Router>
);

export default App;
