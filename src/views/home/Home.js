import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navigation from './view/Navigation';
import BodyLanding from './view/BodyLanding';
import FooterLanding from './view/FooterLanding/FooterLanding';
import Login from '../pages/login/Login';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

class Home extends Component {
  render (){
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
        <Navigation/>
          <Switch>
            <Route path="/home/login" name="LoginPage" render={props => <Login {...props}/>} />
            <Route exact path="/home" name="BodyHome" render={props => <BodyLanding {...props}/>} />
          </Switch>
        <FooterLanding/>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default Home;
