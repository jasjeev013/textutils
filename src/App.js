import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';


function App() {

  return (
    <>
    
      <Navbar title='TextUtils'/>
      <div className="container">
        {/* <TextForm heading="Enter Text To Analyse"/> */}
        <About/>
      </div>

    </>
  );
}

export default App;
