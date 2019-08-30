import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Layout from './Components/Layout/Layout';
import Cockpit from './Components/Cockpit/Cockpit';
import MovieList from './Views/MovieList/MovieList';
import MovieDetail from './Views/MovieDetail/MovieDetail';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Router>
            <Cockpit
              clicked={this.index} />
            <Route
              path="/"
              exact
              component={() => (<MovieList />)} />
            <Route
              path="/movie/:id" component={MovieDetail} />
          </Router>
        </Layout>
      </div>
    );
  }
}

export default App;
