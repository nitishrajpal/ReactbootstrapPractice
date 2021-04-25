import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/service" component={Service} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
    <Footer />
    </>
  );
};

export default App;