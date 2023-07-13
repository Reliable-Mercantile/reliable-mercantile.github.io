import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ContactUs } from './pages/ContactUs';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  typography: {
    fontFamily: [
     'Besley', 'serif'
    ].join(','),
    body1: {
      fontFamily: ['serif'].join(','),
      fontWeight: "500"
      
    },
    body2: {
      fontFamily: ['serif'].join(','),
      fontWeight: "500"

    }
  },
});


function App() {
  return (
  <ThemeProvider theme={theme}>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<About />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact-us" element={<ContactUs />} />
    </Route>
  </Routes>
  </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
