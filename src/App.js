import React from 'react';
import './App.css';
import Stuff from './Stuff';
import Appify from './Appify';
import Clicked from './Clicked';
import ToggleText from './ToggleText'; 
import Counter from './Counter';
import StepCounter from './StepCounter';


const App = () => (
    <>
    <Clicked />
    <Stuff />
    <Appify />
    <ToggleText initial="Hello" alternate="World" />
    <Counter initial={ 50 } max={ 100 } />
    <StepCounter step={ 5 } max={ 100 } />
    </>
  );

export default App;
