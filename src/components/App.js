import React from 'react';
import  { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { HashRouter as Router } from 'react-router-dom';
import Routes from '../Routes';
import Navbar from './Navbar';

//custom body and root
document.body.style.height="100vh"
document.getElementById("root").style.height="100%";
document.getElementById("root").style.width="100%";
document.getElementById("root").style.position="relative";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <CSSReset />
        <Navbar/>
        <Routes />
      </Router>
  </ThemeProvider>    
  );
}

export default App;
