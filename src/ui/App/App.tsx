import React  from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from '../modules/color-theme-scheme/contexts/ThemeContext';
import JobProvider from '../modules/jobs/contexts/JobContext';
import Routes from './router/Routes';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <ThemeProvider>
          <Router>
            <Header/>
            <JobProvider>
              <Routes/>
            </JobProvider>
            <Footer />
          </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
