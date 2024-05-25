import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';


function App() {

  return (
    <>
    
      <Navbar title='TextUtils'/>
      <div className="container">
        <TextForm heading="Enter Text To Analyse"/>
      </div>
    </>
  );
}

export default App;
