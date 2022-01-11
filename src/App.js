import React from 'react';
import './App.css';
import Team from './components/Team';
import Rewiews from './components/Rewiews';
import Webform from './components/Webform';
import Plans from './components/Plans';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
      <>
          <Plans/>
          <Team/>
          <Rewiews/>
          <Webform/>
      </>
  );
}

export default App;
