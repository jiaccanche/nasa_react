import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Routes from '../routes/Routes';
import Navbar from '../views/Navbar';

//custom body and root
document.body.style.height="100vh"
document.getElementById("root").style.height="100%";
document.body.style.margin="0";
document.getElementById("root").style.width="100%";
document.getElementById("root").style.position="relative";

const App = () => {
  return (
    <Router>
        <Navbar/>
        <Routes />
    </Router>    
  );
}

export default App;
