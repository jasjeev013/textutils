import { useState } from 'react';
import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#3c3e41';
      showAlert('Dark Mode Enabled', 'success')
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Enabled', 'success')
    }
  }
  return (
    <>
      <Router>

        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} mode={mode} />

        <div className="container">
          <Routes>
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter Text To Analyse" mode={mode} />}/>

            <Route exact path='/about' element={<About mode={mode} />}/>
              
           

          </Routes>
        </div>

      </Router>

    </>
  );
}

export default App;
