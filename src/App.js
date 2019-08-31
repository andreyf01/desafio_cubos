import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { SearchStoreProvider } from './Stores/SearchStore';
import Layout from './Components/Layout/Layout';
import Cockpit from './Components/Cockpit/Cockpit';
import MovieList from './Views/MovieList/MovieList';
import MovieDetail from './Views/MovieDetail/MovieDetail';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchStoreProvider>
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
        </SearchStoreProvider>
      </div>
    );
  }
}

export default App;
