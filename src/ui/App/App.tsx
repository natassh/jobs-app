import React  from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import ThemeProvider from '../modules/color-theme-scheme/contexts/ThemeContext';

const App = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
