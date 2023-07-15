import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ContactUs } from './pages/ContactUs';
import { ThemeProvider, createTheme } from '@mui/material/styles';


export const rm_theme = createTheme({
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
  <ThemeProvider theme={rm_theme}>
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
