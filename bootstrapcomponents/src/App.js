import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import Errorpage from './components/ErrorPage';
import About from './components/About';
import Contact from './components/Contact';
import Layout from './components/layout/Layout';

function App() {
  return (
    <>
    <Layout>
    <Router>
      <Switch>
        <Route exact path ='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact} />
        <Route component={Errorpage} />
      </Switch>
    </Router>
    </Layout>
    </>
  );
}

export default App;
