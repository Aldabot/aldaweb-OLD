import React from 'react';
import Home from './pages/home.js';
import Faq from './pages/faq.js'
import { Switch, Route } from 'react-router-dom'

export default class Main extends React.Component {
    render() {
      return (
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/faq' component={Faq} />
        </Switch>
      );
    }
}
