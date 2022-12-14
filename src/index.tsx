import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import theme from './theme/theme'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <ThemeProvider theme = { theme }>
      <App />
    </ThemeProvider>
  </Router>
);


