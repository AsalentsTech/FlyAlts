import React from 'react';
import './App.css';
import Home from './pages/';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import ContactForm from './pages/contactform';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/contact-form' component={ContactForm} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
