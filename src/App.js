import React from 'react';
import './App.css';
import Team from './components/Team';
import Rewiews from './components/Rewiews';
import Webform from './components/Webform';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
      <>
          <Team/>
          <Rewiews/>
          <Webform/>
      </>
  );
}

export default App;
