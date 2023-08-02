import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ContactUs } from './pages/ContactUs';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';


export const rm_theme = createTheme({
  typography: {
    fontFamily: [
     'Besley', 'serif'
    ].join(','),
    body1: {
      fontFamily: "Alegreya Sans"
    },
    body2: {
      fontFamily: "Alegreya Sans"
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Besley';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        },
      `,
    },
  },
  palette: {
  background: {
    default: "#f4c67e",
    paper: "#b0341a33"
  },
    primary: {
      main: "#b0341a"
    },
    secondary: {
      main: "#e8ba29"
    }
  },
});


function App() {
  return (
  <ThemeProvider theme={rm_theme}>
    <CssBaseline />
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
