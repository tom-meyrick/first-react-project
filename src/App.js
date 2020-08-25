import React from 'react';
import './App.css';
import Stuff from './Stuff';
import Appify from './Appify';
import Clicked from './Clicked';
import ToggleText from './ToggleText'; 
import Counter from './Counter';
import StepCounter from './StepCounter';
import CatchMeIfYouCan from './CatchMeIfYouCan';
import RollCall from './RollCall'; 

let names = ["Dave", "Ariel", "Sheila", "Nigel", "Peter"]; 

const App = () => (
    <>
    <CatchMeIfYouCan jump={100} />
    <Clicked />
    <Stuff />
    <Appify />
    <ToggleText initial="Hello" alternate="World" />
    <Counter initial={ 50 } max={ 100 } />
    <StepCounter step={ 5 } max={ 100 } />
    <RollCall names={ names } />
    </>
  );

export default App;
