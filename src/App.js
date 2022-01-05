import './App.css';
import Team from './components/Team';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
      <>
          <Router> 
              <Team/>
              <Routes>
                  <Route path='/' exact />
              </Routes>
          </Router>
      </>
  );
}

export default App;
