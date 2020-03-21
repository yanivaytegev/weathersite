import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home/home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}

export default App;
