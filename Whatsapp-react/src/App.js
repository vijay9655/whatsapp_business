import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home_page from './components/Homepage/Home_page_nav';
import Main_Page from './components/Mainpage/Main_Page';


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path='/' exact component={Home_page}/>
       
        <Route path='/mainpage'  component={Main_Page}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
