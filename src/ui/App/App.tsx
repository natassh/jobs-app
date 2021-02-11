import React  from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';
import JobDetail from '../pages/JobDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import ThemeProvider from '../modules/color-theme-scheme/contexts/ThemeContext';
import JobProvider from '../modules/jobs/contexts/JobContext';

const App = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <JobProvider>
          <Router>
            <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/job/:id" component={JobDetail} />
            </Switch>
            <Footer />
          </Router>
        </JobProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
