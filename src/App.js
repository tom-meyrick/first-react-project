import React from 'react';
import './App.css';
import Stuff from './Stuff';
import Appify from './Appify';
import Clicked from './Clicked';
import ToggleText from './ToggleText'; 


const App = () => (
    <>
    <Clicked />
    <Stuff />
    <Appify />
    <ToggleText initial="Hello" alternate="World" />
    </>
  );

export default App;
