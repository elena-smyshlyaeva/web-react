import './App.css';
import NavBar from './components/NavBar';
import Header from "./components/Header";
import Services from "./components/Services";
import Support from "./components/Support";
import Expertise from "./components/Expertise";
import Plans from "./components/Plans";
import Cases from "./components/Cases";
import Webform from "./components/Webform";

function App() {
  return (
      <>
          <NavBar/>
          <Header/>
          <Services/>
          <Support/>
          <Expertise/>
          <Plans/>
          <Cases/>
          <Webform/>
      </>
  );
}

export default App;
