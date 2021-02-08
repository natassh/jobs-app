import React  from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';
import Header from './components/Header';
import './App.css';

const App = () => {

  return (
    <div className="App">
     <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
