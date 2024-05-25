import { useState } from 'react';
import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';


function App() {
  const [mode,setMode] = useState('light');

  const toggleMode =  ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#3c3e41';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <TextForm heading="Enter Text To Analyse" mode={mode} />
        {/* <About mode={mode}/> */}
      </div>

    </>
  );
}

export default App;
