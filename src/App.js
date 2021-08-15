import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ContactMe, About, Home, Projects, NotFound } from './pages';
import { Navbar, Footer } from './layout';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
